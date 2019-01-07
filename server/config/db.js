const redis = require('redis')
const { REDIS_URL } = process.env

const client = redis.createClient(REDIS_URL)

client.on('connect', function() {
  console.log('Redis client connected')
})

client.on('error', function(err) {
  console.log('Something went wrong ' + err)
})

module.exports = client
