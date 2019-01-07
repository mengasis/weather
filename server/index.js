const socketio = require('socket.io')
const weather = require('./services/weather')
const cities = require('./services/cities')

const appConfig = require('./config/app')

const io = socketio()

const init = async () => {
  //Load the coordinates of the cities
  await cities.loadCities()
  await weather.refreshWeather()

  io.on('connection', async socket =>
    socket.emit('weather', await cities.getWeatherByCities())
  )

  setInterval(async () => {
    await weather.refreshWeather()
    io.emit('weather', await cities.getWeatherByCities())
  }, 10000)

  io.listen(appConfig.PORT)
  console.log(`App listening on port ${appConfig.PORT}`)
}

init()
