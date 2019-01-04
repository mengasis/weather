const socketio = require('socket.io')
const weather = require('./services/weather')

const io = socketio()

const init = async () => {
  const cities = await weather.getAllWeather()
  io.on('connection', socket => {
    setInterval(() => socket.emit('weather', cities), 1000)
  })

  io.listen(1337)
  console.log(`App listening on port ${1337}`)
}

init()
