// Prota Studios — contact-form Firebase config
//
// FIREBASE_CONFIG: live Web App config from the prota-studios-87dd8 project.
//   Safe to commit publicly; security is enforced by Realtime Database rules.
//
// CONTACTS_PATH: RTDB node where submissions land. Each submission is a
//   push() child with an auto-generated ID, so submissions are never
//   overwritten.
//
// Review-widget config — read by review-mode.js (re-composed 2026-05-15
// against library/features/review-widget atomics, upstream f40cbe7..192de33):
//
//   commentLifecycleMode: 'feedback-only'
//     Prota's workflow is Vernon (reviewer) → Claude (operator who patches
//     status outside the widget). In-UI Apply/Archive buttons would be
//     misleading because they'd skip Claude. Per comment-lifecycle.md
//     §"`commentLifecycleMode: 'feedback-only'`", per-row buttons reduce to
//     Edit/Delete on `pending`, Restore/Delete on `applied`/`archived`, and
//     the group-footer bulk-archive button is suppressed.
//
//   chromeAnchored: true
//     Vernon comments on site chrome (nav links, logo, footer) which is
//     identical across pages. Per commentable-everything.md §"`chromeAnchored:
//     boolean`", chrome elements get `chrome-{tag}-{n}` slugs (no pageSlug
//     prefix) and write `page: '__chrome__'`, so the same chrome comment
//     surfaces on every page that loads the widget. As of 2026-05-15
//     zero existing comments are on chrome anchors, so this is a forward-only
//     adoption — no anchor migration needed.
//
//   ANCHOR_TAGS_EXTRA: [...]
//     Canonical ANCHOR_TAGS in anchor-strategy.md is a tight set (h1-h6, p, li,
//     td, th, dt, dd, strong, em, small, span, plus structural). Vernon's
//     existing 29 comments include 3 on <a> and 1 on <summary>, both outside
//     canonical. Without these extras, those comments orphan to "(no anchor)"
//     and Vernon loses the ability to comment on CTA links / case-study
//     blockquotes / figure captions going forward. The list below covers
//     the typical marketing-page anchor surface. Per anti-pattern in
//     anchor-strategy.md, `div` is intentionally NOT in this list — a
//     `<div>` opt-in goes through `[data-comment-target]` instead.
//
//   commentableContent: not set → defaults to 'allowlist' per
//     commentable-everything.md §"`commentableContent`". Prota stays on the
//     curated tag-list model rather than direct-text mode.

window.PROTA_CONTACT_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyB_NweRqniNYD-dAA1BLwZ3IetHVJDM8ko",
    authDomain: "prota-studios-87dd8.firebaseapp.com",
    databaseURL: "https://prota-studios-87dd8-default-rtdb.firebaseio.com",
    projectId: "prota-studios-87dd8",
    storageBucket: "prota-studios-87dd8.firebasestorage.app",
    messagingSenderId: "288182878069",
    appId: "1:288182878069:web:ec9968d3a63dc9ef9bdd3c",
  },
  CONTACTS_PATH: "contacts",
  ENABLED: true,

  // Review widget — composition options (per library/features/review-widget)
  commentLifecycleMode: "feedback-only",
  chromeAnchored: true,
  ANCHOR_TAGS_EXTRA: [
    "a", "button", "label",
    "blockquote", "figcaption", "summary", "details",
    "b", "i", "u", "mark", "cite", "q",
    "code", "pre", "kbd", "samp", "var",
    "time", "abbr",
  ],
};
