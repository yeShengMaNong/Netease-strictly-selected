const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
// const postcss = px2rem({
//   remUnit: 37.5//基准大小 baseSize，需要和rem.js中单位rem值占比一样相同  设计好的10分之一   设计稿:750 就remUnit: 75  在ccs中直接写入px 库会自动计算rem
// })

module.exports = {
  runtimeCompiler: true,   //配置 : template:'<App/>'
  lintOnSave: false,       //关闭line语法检查
  productionSourceMap: false, // 不生成 source map文件
  // css: { // 添加postcss配置
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [

  //         postcss
  //       ]
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                px2rem({
                    remUnit: 75.0 //设计稿等分后的rem值  375/10
                })
            ]
        }
    }
},
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },

      '/foo':{
        target:'https://m.you.163.com',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/foo':''
        }
      }
    }
  },
}