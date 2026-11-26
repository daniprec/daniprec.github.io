"""Build responsive WebP copies of site images without changing the originals.

Run after adding photographs or figures: python scripts/optimize_images.py
Requires Pillow. Jekyll reads the generated manifest through responsive-image.html.
"""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "images" / "optimized"
manifest = {}
original_bytes = optimized_bytes = 0
for source in sorted((ROOT / "images").rglob("*")):
    if not source.is_file() or source.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
        continue
    if OUTPUT in source.parents or "logos" in source.parts or source.stat().st_size < 10000:
        continue
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        if image.width < 320:
            continue
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        variants = []
        relative = source.relative_to(ROOT / "images")
        for width in sorted({min(width, image.width) for width in [480, 960, 1600]}):
            height = round(image.height * width / image.width)
            target = OUTPUT / relative.parent / f"{source.stem}-{source.suffix[1:].lower()}-{width}.webp"
            target.parent.mkdir(parents=True, exist_ok=True)
            if not target.exists() or target.stat().st_mtime < source.stat().st_mtime:
                image.resize((width, height), Image.Resampling.LANCZOS).save(
                    target, "WEBP", quality=88, method=6
                )
            variants.append({"src": "/" + target.relative_to(ROOT).as_posix(), "width": width, "height": height})
        default = min(variants, key=lambda variant: abs(variant["width"] - 960))
        manifest["/" + source.relative_to(ROOT).as_posix()] = {
            **default,
            "srcset": ", ".join(f"{v['src']} {v['width']}w" for v in variants),
        }
        original_bytes += source.stat().st_size
        optimized_bytes += (ROOT / default["src"].lstrip("/")).stat().st_size
(ROOT / "_data" / "image_assets.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print(f"Built responsive copies for {len(manifest)} images: {original_bytes:,} original bytes; {optimized_bytes:,} bytes at the default sizes.")
