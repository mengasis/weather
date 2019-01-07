import io from 'socket.io-client'

const { REACT_APP_MODE, REACT_APP_API_HOST, REACT_APP_API_PORT = 1337 } = process.env

const baseUrl =
  REACT_APP_MODE === 'production'
    ? `${REACT_APP_API_HOST}:${REACT_APP_API_PORT}`
    : `http://localhost:${REACT_APP_API_PORT}`

const socket = io(baseUrl)

function subscribeToWeather(cb) {
  socket.on('weather', data => cb(null, data))
}

export default subscribeToWeather
