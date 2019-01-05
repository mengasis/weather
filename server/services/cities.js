const citiesData = require('../config/cities')
const redis = require('./redis')
const toHash = require('../utils/toHash')

function loadCities() {
  return Promise.all(
    citiesData.map(async city => await redis.setAsync(city.id, JSON.stringify(city)))
  )
}

function getWeatherByCities() {
  return Promise.all(
    citiesData.map(async city => JSON.parse(await redis.getAsync(city.id)))
  ).then(results => toHash(results, 'id'))
}

module.exports = { loadCities, getWeatherByCities }
