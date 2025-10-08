// quasar.config.js
const { configure } = require('quasar/wrappers')

module.exports = configure(function () {
  return {
    // การตั้งค่า build
    build: {
      vueRouterMode: 'hash', // สำคัญสำหรับ GitHub Pages
      publicPath: '/6704101342-natthha-janplod/', // ใส่ชื่อ repo ของคุณ
      // สามารถใส่ options อื่นๆ ของ build ตามต้องการ
    },

    // การตั้งค่า dev server
    devServer: {
      open: true // เปิด browser อัตโนมัติเมื่อ run quasar dev
    },

    // การตั้งค่า Framework ของ Quasar
    framework: {
      config: {}, // ใส่ config เฉพาะของ Quasar components ถ้ามี
      plugins: [] // ใส่ plugins ของ Quasar ถ้าต้องการ
    },

    // การตั้งค่า assets, css, boot files, และอื่นๆ
    cssAddon: true,
    extras: [
      'material-icons', // ตัวอย่าง icon
      'roboto-font'     // ตัวอย่าง font
    ],

    // PWA หรือ SPA settings ถ้าต้องการ
    // pwa: {},
    // ssr: {},
    // cordova: {},
    // capacitor: {},
    // electron: {},
  }
})
