const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/src/pages/404.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/src/pages/faq.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/src/pages/gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/src/pages/index.js"))),
  "component---src-pages-location-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/src/pages/location.js"))),
  "component---src-pages-registry-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/src/pages/registry.js"))),
  "component---src-pages-video-js": hot(preferDefault(require("/Users/luke/Documents/Github/wedding-aaron-amanda/src/pages/video.js")))
}

