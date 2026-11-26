"""Check authored data, responsive assets and (optionally) a deployed Jekyll site.

python scripts/check_site.py --source-only
python scripts/check_site.py --base-url https://danielprecioso.com
Requires PyYAML, Pillow, requests and beautifulsoup4.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
import json
from pathlib import Path
from urllib.parse import urljoin, urlparse, urldefrag, unquote
import xml.etree.ElementTree as ET
import requests
from bs4 import BeautifulSoup
from PIL import Image
import yaml

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument("--source-only", action="store_true")
parser.add_argument("--base-url", default="https://danielprecioso.com")
args = parser.parse_args()
errors = []
for folder in ["_data", "_pages", "_posts", "_papers", "_portfolio", "_teaching", "_talks"]:
    for path in (ROOT / folder).rglob("*"):
        if path.suffix not in {".yml", ".md", ".html"}:
            continue
        source = path.read_text(encoding="utf-8")
        if path.suffix == ".yml":
            yaml.safe_load(source)
        elif source.startswith("---"):
            yaml.safe_load(source.split("---", 2)[1])
assets = json.loads((ROOT / "_data/image_assets.json").read_text(encoding="utf-8"))
for source, asset in assets.items():
    with Image.open(ROOT / asset["src"].lstrip("/")) as image:
        assert image.size == (asset["width"], asset["height"]), source
    for candidate in asset["srcset"].split(", "):
        assert (ROOT / candidate.split()[0].lstrip("/")).is_file(), candidate
print(f"Source data and {len(assets)} responsive image sets passed.")
if args.source_only:
    raise SystemExit(0)

base = args.base_url.rstrip("/")
response = requests.get(base + "/sitemap.xml?check=site-audit", timeout=20)
response.raise_for_status()
urls = [element.text for element in ET.fromstring(response.content).iter() if element.tag.endswith("loc")]

def inspect(url):
    response = requests.get(url + "?check=site-audit", timeout=20)
    response.raise_for_status()
    if "text/html" not in response.headers.get("Content-Type", ""):
        return None
    soup = BeautifulSoup(response.content, "html.parser")
    if soup.select_one('meta[http-equiv="refresh"]'):
        return None
    problems = []
    for selector in ['meta[name="description"]', 'meta[property="og:image"]']:
        element = soup.select_one(selector)
        if not element or not element.get("content", "").strip():
            problems.append("Missing " + selector)
    if len(soup.select("h1")) != 1:
        problems.append("Expected one main heading")
    ids = [element["id"] for element in soup.select("[id]")]
    if len(ids) != len(set(ids)):
        problems.append("Duplicate element IDs")
    if any(not image.has_attr("alt") for image in soup.select("img")):
        problems.append("Image missing alt attribute")
    skip = soup.select_one("a.skip-link")
    if not skip or skip.get("href", "").lstrip("#") not in ids:
        problems.append("Skip link does not target the main content")
    return url, ids, [anchor["href"] for anchor in soup.select("a[href]")], problems

with ThreadPoolExecutor(max_workers=6) as pool:
    pages = [page for page in pool.map(inspect, urls) if page]
by_url = {page[0].rstrip("/"): page for page in pages}
for url, ids, links, problems in pages:
    errors.extend(f"{url}: {problem}" for problem in problems)
    for href in links:
        destination, fragment = urldefrag(urljoin(url, href))
        destination = destination.split("?")[0].rstrip("/")
        if fragment and destination in by_url and unquote(fragment) not in by_url[destination][1]:
            errors.append(f"{url}: missing anchor {href}")
for path in ["/REDESIGN_NOTES/", "/markdown/", "/non-menu-page/", "/markdown_generator/"]:
    if requests.get(base + path + "?check=site-audit", timeout=15).status_code != 404:
        errors.append("Development/demo page is still published: " + path)
for error in errors:
    print("FAIL:", error)
print(f"Checked {len(pages)} published HTML pages; {len(errors)} problems.")
raise SystemExit(bool(errors))
