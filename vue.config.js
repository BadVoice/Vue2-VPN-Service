const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          GENERATE_PAY: JSON.stringify(process.env.GENERATE_PAY),
          COMMIT_PAY: JSON.stringify(process.env.COMMIT_PAY),
          CHECK_PAY: JSON.stringify(process.env.CHECK_PAY),
          LOGIN: JSON.stringify(process.env.LOGIN),
          REGISTER: JSON.stringify(process.env.REGISTER),
          UPDATE_PROFILE: JSON.stringify(process.env.UPDATE_PROFILE),
          GET_PROFILE: JSON.stringify(process.env.GET_PROFILE),
        }
      })
    ]
  },
  transpileDependencies: true
})


