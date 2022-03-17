const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.tsx', 'jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  entry: './electron/main.ts',
  module: {
    rules: require('./rules.webpack'),
  },
}
