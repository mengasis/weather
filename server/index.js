const socketio = require('socket.io')
const weather = require('./services/weather')
const cities = require('./services/cities')

const io = socketio()

const init = async () => {
  //Load the coordinates of the cities
  await cities.loadCities()
  await weather.refreshWeather()

  io.on('connection', async socket =>
    socket.emit('weather', await weather.getAllWeather())
  )

  setInterval(async () => io.emit('weather', await weather.getAllWeather()), 10000)

  io.listen(1337)
  console.log(`App listening on port ${1337}`)
}

init()
