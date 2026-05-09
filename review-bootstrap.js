// review-bootstrap.js
//
// Loaded on every page. Does nothing unless the URL contains ?review=1.
// When review=1 is detected, dynamically loads the full review widget
// (review-mode.css + contact-form.config.js + review-mode.js).
//
// Visible to the public, but inert. The "review mode" itself is only
// activated by the URL flag.

(function () {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("review") || params.get("review") !== "1") return;

  // Inject CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/review-mode.css";
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

  // Load Firebase config (sets window.PROTA_CONTACT_CONFIG), then the widget
  // The config file is the same one the contact form uses — same Firebase
  // project, same Web App. Comments live at /comments/{push-id} (a different
  // root path from the contact form's /contacts/{push-id}).
  loadScript("/contact-form.config.js")
    .then(function () { return loadScript("/review-mode.js", { module: true }); })
    .catch(function (err) {
      console.error("[review-mode] failed to load:", err);
    });
})();
