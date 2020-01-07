const path = require('path');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@layouts': path.resolve(__dirname, 'src/layouts'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@services': path.resolve(__dirname, 'src/services')
  })
);
