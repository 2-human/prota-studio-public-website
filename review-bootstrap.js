// review-bootstrap.js
//
// Loaded on every page. Two responsibilities:
//
//  1. ALWAYS (until ?review=1) — injects a small floating "Comments"
//     entry button (bottom-right). Clicking it appends ?review=1 to the
//     URL and reloads. This is the inert-page entry affordance per
//     library/features/review-widget/inert-entry-button.md.
//
//  2. WHEN ?review=1 — dynamically loads the full review widget
//     (review-mode.css + contact-form.config.js + review-mode.js).
//     The entry button is hidden in active mode; the banner has Exit.
//
// Self-locating: computes its own directory from the script tag's src
// so the rest of the assets load with the same base. Works without a
// CNAME (e.g. tnosugar.github.io/prota-studio-public-website/) where
// root-absolute paths like "/review-mode.css" would resolve incorrectly.

(function () {
  const params = new URLSearchParams(window.location.search);
  const reviewActive = params.has("review") && params.get("review") === "1";

  // Compute base URL of this bootstrap so we can load sibling assets
  // with relative-to-script paths regardless of which page we're on.
  const scriptEl =
    document.currentScript ||
    document.querySelector('script[src*="review-bootstrap.js"]');
  const baseHref = scriptEl
    ? new URL(".", scriptEl.src).href
    : new URL(".", window.location.href).href;

  // ----- (1) Inert-page entry button — always (until review mode active) -----
  //
  // Token-resolved colors: prota navy (primary-deep = #1F3864, primary-darker
  // = #142646, surface-base = #ffffff). Per inert-entry-button.md anti-pattern
  // §"Hardcoding colors instead of resolving brand tokens", these are the
  // resolved brand values (not odvaz's forest #2c5e4a which was the prior
  // composition's bug). No ::before glyph — the visible label "Comments" is
  // sufficient for prota's brand voice.

  function injectEntryButton() {
    if (reviewActive) return; // banner has Exit; no entry button needed

    const style = document.createElement("style");
    style.textContent = `
      .review-toggle-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9990;
        background: #1F3864;
        color: #ffffff;
        border: none;
        padding: 12px 20px;
        border-radius: 999px;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.04em;
        box-shadow: 0 4px 14px rgba(31, 32, 36, 0.18);
        transition: transform .15s, box-shadow .15s, background .15s;
        display: inline-flex;
        align-items: center;
      }
      .review-toggle-btn:hover {
        transform: translateY(-1px);
        background: #142646;
        box-shadow: 0 6px 20px rgba(31, 32, 36, 0.22);
      }
      .review-toggle-btn:active { transform: translateY(0); }
      @media print { .review-toggle-btn { display: none; } }
    `;
    document.head.appendChild(style);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "review-toggle-btn";
    btn.setAttribute("data-review-skip", ""); // prevent self-anchoring
    // Labels (English defaults; override via window.{CONFIG}.REVIEW_LABELS)
    const cfg = window.PROTA_CONTACT_CONFIG || {};
    const labels = (cfg && cfg.REVIEW_LABELS) || {};
    btn.textContent = labels.toggleButton || "Comments";
    btn.title = labels.toggleButtonTitle || "Open comment review mode";
    btn.addEventListener("click", function () {
      const url = new URL(window.location.href);
      url.searchParams.set("review", "1");
      window.location.href = url.toString();
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectEntryButton);
  } else {
    injectEntryButton();
  }

  if (!reviewActive) return;

  // ----- (2) Review widget activation -----

  // Inject CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = baseHref + "review-mode.css";
  document.head.appendChild(link);

  // Helper: dynamically load a <script>
  function loadScript(src, opts) {
    return new Promise(function (resolve, reject) {
      const s = document.createElement("script");
      s.src = src;
      if (opts && opts.type) s.type = opts.type;
      if (opts && opts.module) s.type = "module";
      s.onload = resolve;
      s.onerror = function () { reject(new Error("Failed to load " + src)); };
      document.head.appendChild(s);
    });
  }

  // Load config (sets window.PROTA_CONTACT_CONFIG), then the widget.
  loadScript(baseHref + "contact-form.config.js")
    .then(function () { return loadScript(baseHref + "review-mode.js", { module: true }); })
    .catch(function (err) {
      console.error("[review-mode] failed to load:", err);
    });
})();
