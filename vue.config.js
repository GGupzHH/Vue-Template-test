const path = require('path')
module.exports = {
  // 是配置在本地项目启动的时候追加到URL后面的内容
  // http://172.30.24.109:8080/ZHH/zhh/upload
  publicPath: '/ZHH/zhh',
  // 打包的文件目录 打包时会自动替换
  outputDir: 'dist',
  // 暂时没有搞明白
  assetsDir: './status/ZHH',
  // 指定生成的静态文件路径       default:index.html
  indexPath: 'index.html',
  // 配置vue多页应用
  // pages: Object
  // 是否在开发环境下通过eslint-loader   lint 代码
  // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  // 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
  lintOnSave: true, // default:true
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: true, // default false
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [], // default []
  // configureWebpack: {
  //   performance: {
  //     hints: 'warning',
  //     maxEntrypointSize: 50000000, // 入口起点的最大体积A
  //     // 生成文件的最大体积
  //     maxAssetSize: 30000000,
  //     // 只给出 js 文件的性能提示
  //     assetFilter: function (assetFilename) {
  //       return assetFilename.endsWith('.js')
  //     }
  //   }
  // }
  // clear console
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        'console.log'
      ]
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .test(/\.(gif|png|jpe?g|svg)$/i)
  //     .use('image-webpack-loader')
  //     .loader('image-webpack-loader')
  //     .options(
  //       {
  //         // https://www.npmjs.com/package/image-webpack-loader
  //         // 使用此选项，当使用webpack“调试”模式并且加载程序充当常规文件加载程序时，不会执行任何处理。在开发或使用webpack dev server时，使用此选项可加快初始编译和后续编译（在较小程度上）。正常的构建被正常处理，输出优化的文件。
  //         // bypassOnDebug: true,
  //         // Same functionality as bypassOnDebug option, but doesn't depend on webpack debug mode, which was deprecated in 2.x. Basically you want to use this option if you're running webpack@2.x or newer.
  //         // disable: true,
  //         // -------- 上面两个配置项都是老版本的配置 默认值都为false 修改之后图片不会被压缩

  //         // 压缩png
  //         pngquant: {
  //           // 品质  0.65-0.9
  //           quality: [0.65, 0.90],
  //           // 压缩速度
  //           speed: 4
  //         },
  //         // 好像是压缩png详细配置的
  //         // optipng: {

  //         // },
  //         // webp
  //         webp: {
  //           quality: 75
  //         },
  //         // jpg
  //         mozjpeg: {
  //           progressive: true,
  //           quality: 65
  //         },
  //         // gif
  //         gifsicle: {
  //           // 是否开启gif的压缩和渐进式渲染
  //           interlaced: false,
  //           // 优化级别 1-3
  //           optimizationLevel: 3,
  //           // 颜色选择
  //           colors: 256
  //         }
  //       }
  //     )
  // },
  // devServer: {
  //   overlay: {
  //     warnings: false,
  //     errors: false
  //   }
  // },
  // 将封装的less全局引入 需要安装插件 style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [`${path.join(__dirname, './src/style/encapsulation.less')}`]
    }
  }
}
