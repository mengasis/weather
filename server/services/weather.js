const { getCurrentData } = require('./darkSkyApi')
const cities = require('../config/cities')
const retry = require('../utils/retry')

async function getWeather(city = {}) {
  try {
    const { currently } = await getCurrentData(city.latitude, city.longitude)
    return {
      ...city,
      time: currently.time,
      temperature: currently.temperature
    }
  } catch (error) {
    throw new Error(`ERROR!: ${error} in the ${city.name} request`)
  }
}

function getAllWeather() {
  return Promise.all(
    cities.map(async city =>
      retry(
        () => getWeather(city),
        err => {
          console.error('Error: ' + err)
        }
      )
    )
  )
}

module.exports = { getWeather, getAllWeather }
