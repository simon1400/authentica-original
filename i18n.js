module.exports = {
  locales: ['cs', 'en', 'de'],
  defaultLocale: 'cs',
  localeDetection: false,
  pages: {
    '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
  },
};