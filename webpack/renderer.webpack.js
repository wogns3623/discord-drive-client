const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  target: 'electron-renderer',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', 'jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: require('./rules.webpack'),
  },
}
