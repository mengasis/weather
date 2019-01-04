const socketio = require('socket.io')
const weather = require('./services/weather')

const io = socketio()

const init = async () => {
  io.on('connection', async socket =>
    socket.emit('weather', await weather.getAllWeather())
  )

  setInterval(async () => io.emit('weather', await weather.getAllWeather()), 10000)

  io.listen(1337)
  console.log(`App listening on port ${1337}`)
}

init()
