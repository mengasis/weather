const { promisify } = require('util')
const client = require('../config/db')

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  hsetAsync: promisify(client.hset).bind(client),
  keysAsync: promisify(client.keys).bind(client)
}
