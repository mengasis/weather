const { getCurrentData } = require('./darksky')

const moment = require('moment-timezone')
const cities = require('../config/cities')
const retry = require('../utils/retry')
const customError = require('../utils/customError')
const redis = require('./redis')

async function getWeather(city = {}) {
  //Intentional error with 10% probability
  if (Math.random() < 0.1) throw customError.UNFORTUNATE

  const { currently = {}, timezone = '' } = await getCurrentData(
    city.latitude,
    city.longitude
  )

  const { temperature, icon } = currently

  const data = {
    ...city,
    icon,
    time: moment()
      .tz(timezone)
      .format('HH:mm'),
    temperature: `${parseInt(temperature)} °C`
  }

  await redis.setAsync(city.id, JSON.stringify(data))

  return data
}

function refreshWeather() {
  console.log('Refreshing!...')
  return Promise.all(
    cities.map(async city =>
      retry(
        () => getWeather(city),
        err => {
          console.error(err)
          if (!!err && err.name === 'UNFORTUNATE')
            redis.hsetAsync(
              'api.errors',
              Date.now(),
              JSON.stringify({
                type: err.name,
                message: err.message,
                stack: err.toString()
              })
            )
        }
      )
    )
  )
}

module.exports = { getWeather, refreshWeather }
