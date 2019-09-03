module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
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
}
