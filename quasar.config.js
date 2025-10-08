/* quasar.config.js */
const { configure } = require('quasar/wrappers')

module.exports = configure(function () {
  return {
    build: {
      vueRouterMode: 'hash',  // สำคัญสำหรับ GitHub Pages
      publicPath: '/6704101342-natthha-janplod/'  // ชื่อ repo ของคุณ
    }
  }
})
