import io from 'socket.io-client'

const { MODE, HOST, PORT = 1337 } = process.env

const baseUrl = MODE === 'production' ? `${HOST}:${PORT}` : `http://localhost:${PORT}`

const socket = io(baseUrl)

function subscribeToWeather(cb) {
  socket.on('weather', data => cb(null, data))
}

export default subscribeToWeather
