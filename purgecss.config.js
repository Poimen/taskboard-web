module.exports = {
  content: ['build/index.html', 'build/static/js/*.js'],
  css: ['build/static/css/*.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[\w-/:]+(?<!:)/g) || [];
        }
      },
      extensions: ['html']
    }
  ],
  whitelist: ['flex-1\.3'],
  whitelistPatterns: [/ant-/]
};
