const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  target: 'electron-main',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', 'jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    alias: {
      /**
       * node-fetch는 default로 fetch 함수를 리턴하기 때문에
       * ```
       * import fetch from 'node-fetch'
       * ```
       * 와 같이 가져오게 되면 `fetch.default`같은 형식으로 사용해야함
       *
       * 디스코드 내부 APIRequest 함수를 보면 `const fetch = require('node-fetch');`
       * 와 같이 node-fetch를 가져오는데 electron 환경이라 터지나봄
       *
       * 따라서 이를 모듈을 불러올 때 수정해주거나 node-fetch를 수정할 필요가 있음
       */
      fetch: require.resolve('../modules/fetch'),
      'node-fetch': require.resolve('../modules/fetch'),
    },
  },
  entry: './electron/main.ts',
  module: {
    rules: require('./rules.webpack'),
  },
}
