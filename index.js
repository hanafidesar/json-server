const token = require('./src/token.json')
const profile = require('./src/profile.json')
const product = require('./src/product.json')

module.exports = () => ({
  token: token,
  profile: profile,
  product: product
});