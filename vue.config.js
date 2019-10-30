const path = require('path')
module.exports = {
  // 是配置在本地项目启动的时候追加到URL后面的内容
  // http://172.30.24.109:8080/ZHH/zhh/upload
  publicPath: '/ZHH/zhh',
  // configureWebpack: {
  //   performance: {
  //     hints: 'warning',
  //     maxEntrypointSize: 50000000, // 入口起点的最大体积
  //     // 生成文件的最大体积
  //     maxAssetSize: 30000000,
  //     // 只给出 js 文件的性能提示
  //     assetFilter: function (assetFilename) {
  //       return assetFilename.endsWith('.js')
  //     }
  //   }
  // }
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  // 将封装的less全局引入 需要安装插件 style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/encapsulation.less')]
    }
  }
}
