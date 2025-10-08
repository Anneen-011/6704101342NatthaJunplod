// quasar.config.js
const { configure } = require('quasar/wrappers')

module.exports = configure(function () {
  return {
    build: {
      vueRouterMode: 'hash',
      publicPath: '/6704101342-natthha-janplod/',
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},
      plugins: []
    },

    cssAddon: true,
    extras: [
      'material-icons',
      'roboto-font'
    ],
  }
})
