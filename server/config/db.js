const redis = require('redis')
const { REDIS_HOST = '127.0.0.1', REDIS_PORT = 6379 } = process.env

const client = redis.createClient(REDIS_PORT, REDIS_HOST)

client.on('connect', function() {
  console.log('Redis client connected')
})

client.on('error', function(err) {
  console.log('Something went wrong ' + err)
})

module.exports = client
