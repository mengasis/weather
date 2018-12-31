const socketio = require('socket.io')

const io = socketio()

const run = async () => {
  io.on('connection', async socket => {
    setInterval(
      () =>
        socket.emit('weather', {
          cl: new Date(),
          ch: new Date(),
          nz: new Date(),
          au: new Date(),
          uk: new Date(),
          usa: new Date()
        }),
      1000
    )
  })

  io.listen(1337)
  console.log(`App listening on port ${1337}`)
}

run()
