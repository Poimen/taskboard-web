const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // '@layout-body-background': '#e2e8f0' // bg-gray-300
      '@layout-body-background': '#f7fafc' // bg-gray-100
    }
  }),
  addWebpackAlias({
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/assets/icons.js'),
    '@svg': path.resolve(__dirname, './src/assets/svg')
  })
);
