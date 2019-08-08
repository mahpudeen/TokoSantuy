module.exports = {

  devServer:{
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        ws: true,
        changeOrigin: true
      }
    }
  }, 
//   pluginOptions: {
//     quasar: {
//       rtlSupport: true,
//       treeShake: true
//     }
//   },
//   devServer:{
//     proxy:{
//       '/api': {
//         target: 'http://localhost:8080',
//         ws: true,
//         changeOrigin: true
//       }
//     }
//   },
  
//   transpileDependencies: [
//     /[\\\/]node_modules[\\\/]quasar[\\\/]/
//   ],

  
}
