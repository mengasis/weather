const { getCurrentData } = require('./darkSkyApi')
const cities = require('../config/cities')
const retry = require('../utils/retry')

async function getWeather(city = {}) {
  const { currently = {} } = await getCurrentData(city.latitude, city.longitude)
  const { time, temperature } = currently

  return {
    ...city,
    time,
    temperature
  }
}

function getAllWeather() {
  return Promise.all(
    cities.map(async city =>
      retry(
        () => getWeather(city),
        err => {
          console.error('Error -> ', err)
        }
      )
    )
  ).then(results =>
    results.reduce((acc, current) => {
      acc[current.id] = current
      return acc
    }, {})
  )
}

module.exports = { getWeather, getAllWeather }
