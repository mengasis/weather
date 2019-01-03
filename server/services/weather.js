const { getCurrentData } = require('./darkSkyApi')

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

module.exports = { getWeather }
