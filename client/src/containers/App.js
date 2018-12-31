import React, { Component } from 'react'

import { cities, subscribeToWeather } from '../api'

class App extends Component {
  state = { weather: {} }

  componentDidMount() {
    subscribeToWeather((err, data) => this.setState({ weather: data }))
  }

  render() {
    return (
      <div>
        <span>Weather</span>
        {cities.map(city => (
          <p key={city.id}>
            {city.name}: {this.state.weather[city.id]}
          </p>
        ))}
      </div>
    )
  }
}

export default App
