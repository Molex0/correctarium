const path = require("path")

module.exports = {
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "ua",
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: false }
}
