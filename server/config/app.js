const apiKey = process.env.API_KEY
const port = process.env.PORT

module.exports = {
  API_HOST: 'https://api.darksky.net/forecast',
  API_KEY: apiKey,
  PORT: port || 1337
}
