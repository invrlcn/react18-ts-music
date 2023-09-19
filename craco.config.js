const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (src) => path.resolve(__dirname, src)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [{ plugin: CracoLessPlugin }]
}
