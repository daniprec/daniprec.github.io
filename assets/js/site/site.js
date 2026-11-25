/* Site interactions: strengths panels, career map, experience views.
   Content is readable without this file. It only adds behaviour. */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Career map ---------- */
  function initCareer() {
    var root = document.querySelector("[data-career]");
    if (!root) return;
    var start = parseFloat(root.dataset.start), end = parseFloat(root.dataset.end);
    var stage = root.querySelector(".cm__stage");
    var svg = root.querySelector(".cm__svg");
    var panel = root.querySelector("#cm-panel");
    var items = Array.prototype.slice.call(root.querySelectorAll(".cm-item"));
    var laneEls = Array.prototype.slice.call(root.querySelectorAll(".cm__lanes div"));
    var laneIds = laneEls.map(function (l) { return l.dataset.lane; });
    var rails = Array.prototype.slice.call(root.querySelectorAll(".cm__rails div"));
    var conns = (window.CAREER_CONNECTIONS || []);
    var mq = window.matchMedia("(min-width: 960px)");
    var CARD = 200, RAILS_H = 66, PITCH = 148, TOP = 84;
    var selected = null;
    var disclosure = root.closest("details");
    if (disclosure) disclosure.addEventListener("toggle", function () {
      if (disclosure.open) requestAnimationFrame(layout);
    });

    function wide() { return mq.matches; }

    function tx(y, w) { return CARD / 2 + (y - start) / (end - start) * (w - CARD); }

    function layout() {
      root.classList.toggle("cm--wide", wide());
      if (!wide()) {
        stage.style.removeProperty("--stage-h");
        items.forEach(function (it) { it.style.removeProperty("--x"); it.style.removeProperty("--y"); });
        svg.innerHTML = svg.querySelector("defs").outerHTML;
        items.forEach(function (it) {
          var b = it.querySelector(".cm-node");
          it.querySelector(".cm-detail").hidden = b.getAttribute("aria-expanded") !== "true";
        });
        return;
      }
      var w = stage.clientWidth;
      stage.style.setProperty("--stage-h", (TOP + RAILS_H + laneIds.length * PITCH) + "px");
      rails.forEach(function (r) {
        var x1 = tx(parseFloat(r.dataset.from), w), x2 = tx(parseFloat(r.dataset.to), w);
        r.style.left = x1 + "px"; r.style.width = (x2 - x1) + "px"; r.style.top = (parseInt(r.dataset.row, 10) * 28) + "px";
      });
      laneEls.forEach(function (l, i) { l.style.top = (RAILS_H + 24 + i * PITCH) + "px"; });
      var laneEnds = {};
      items.forEach(function (it) {
        var x = tx(parseFloat(it.dataset.year), w) - CARD / 2;
        // Keep milestones readable when two subjects share a history row.
        if (laneEnds[it.dataset.lane] !== undefined) {
          x = Math.max(x, laneEnds[it.dataset.lane] + 16);
        }
        laneEnds[it.dataset.lane] = x + CARD;
        var y = RAILS_H + 24 + laneIds.indexOf(it.dataset.lane) * PITCH + 6;
        it.style.setProperty("--x", x + "px");
        it.style.setProperty("--y", y + "px");
        it.querySelector(".cm-detail").hidden = true;
      });
      draw();
      if (selected) show(selected); 
    }

    function box(it) {
      var s = stage.getBoundingClientRect(), r = it.getBoundingClientRect();
      return { l: r.left - s.left, r: r.right - s.left, t: r.top - s.top, b: r.bottom - s.top, cx: (r.left + r.right) / 2 - s.left, cy: (r.top + r.bottom) / 2 - s.top };
    }

    function draw() {
      var defs = svg.querySelector("defs").outerHTML;
      var html = defs;
      conns.forEach(function (c) {
        var a = root.querySelector('.cm-item[data-id="' + c.from + '"]'), b = root.querySelector('.cm-item[data-id="' + c.to + '"]');
        if (!a || !b) return;
        var A = box(a), B = box(b), d;
        if (B.l > A.r + 12) {
          var mx = (A.r + B.l) / 2;
          d = "M" + A.r + " " + A.cy + " C" + mx + " " + A.cy + " " + mx + " " + B.cy + " " + B.l + " " + B.cy;
        } else {
          var dir = B.cy > A.cy ? 1 : -1;
          var sy = dir > 0 ? A.b : A.t, ey = dir > 0 ? B.t : B.b, my = (sy + ey) / 2;
          d = "M" + A.cx + " " + sy + " C" + A.cx + " " + my + " " + B.cx + " " + my + " " + B.cx + " " + ey;
        }
        html += '<path d="' + d + '" fill="none" style="stroke:var(--ink-soft)" stroke-width="2"' + (c.type === "shared" ? ' stroke-dasharray="6 5"' : ' marker-end="url(#cm-arrow)"') + "/>";
      });
      svg.innerHTML = html;
    }

    function show(it) {
      var detail = it.querySelector(".cm-detail");
      var title = it.querySelector(".cm-node__title").textContent;
      var year = it.querySelector(".cm-node__year").textContent;
      panel.innerHTML = "<p class=\"cm-node__year\">" + year + "</p><h3>" + title + "</h3>" + detail.innerHTML;
    }

    items.forEach(function (it) {
      var btn = it.querySelector(".cm-node");
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        if (wide()) {
          items.forEach(function (o) { o.querySelector(".cm-node").setAttribute("aria-expanded", "false"); });
          btn.setAttribute("aria-expanded", "true");
          selected = it; show(it);
        } else {
          btn.setAttribute("aria-expanded", open ? "false" : "true");
          it.querySelector(".cm-detail").hidden = open;
        }
      });
    });

    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(layout, 120); });
    layout();
  }

  /* ---------- Experience views ---------- */
  function initViews() {
    var bar = document.querySelector("[data-view-bar]");
    if (!bar) return;
    var buttons = Array.prototype.slice.call(bar.querySelectorAll("button"));
    var targets = Array.prototype.slice.call(document.querySelectorAll("[data-views]"));
    function set(view, push) {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.view === view)); });
      targets.forEach(function (el) {
        var v = (el.dataset.views || "").split(/\s+/);
        el.hidden = !(view === "all" || v.indexOf(view) > -1);
      });
      var label = document.getElementById("view-status");
      if (label) label.textContent = "Showing: " + (buttons.filter(function (b) { return b.dataset.view === view; })[0] || {}).textContent;
      if (push && window.history && history.replaceState) history.replaceState(null, "", "#view=" + view);
    }
    buttons.forEach(function (b) { b.addEventListener("click", function () { set(b.dataset.view, true); }); });
    var m = /view=(applied|research|all)/.exec(location.hash);
    set(m ? m[1] : "applied", false);
  }

  /* Click-to-play previews: poster by default, no autoplay */
  function initGifs() {
    document.querySelectorAll("[data-gif]").forEach(function (fig) {
      var img = fig.querySelector("img");
      if (!img) return;
      var poster = img.getAttribute("src");
      var gif = fig.getAttribute("data-gif");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "s-btn gifplay__btn";
      btn.textContent = "Play preview";
      btn.setAttribute("aria-pressed", "false");
      var on = false;
      btn.addEventListener("click", function () {
        on = !on;
        img.src = on ? gif : poster;
        btn.textContent = on ? "Stop preview" : "Play preview";
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      fig.classList.add("gifplay");
      fig.appendChild(btn);
    });
  }

  /* Light and dark theme: follows the system, the button overrides it */
  function initTheme() {
    var btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    var root = document.documentElement;
    var mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : { matches: false };
    function isDark() {
      var t = root.getAttribute("data-theme");
      return t ? t === "dark" : mq.matches;
    }
    function paint() {
      var d = isDark();
      btn.textContent = d ? "Light mode" : "Dark mode";
      btn.setAttribute("aria-pressed", d ? "true" : "false");
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", d ? "#0c1820" : "#f5f7f8");
    }
    btn.hidden = false;
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });
    paint();
  }

  function init() { initTheme(); initCareer(); initViews(); initGifs(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
