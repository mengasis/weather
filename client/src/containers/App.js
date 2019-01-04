import React, { Component } from 'react'
import styled from 'styled-components'
import { cities, subscribeToWeather } from '../api'

import ListCity from '../components/ListCity'
import CityRow from '../components/CityRow'
import CityView from '../components/CityView'

const Container = styled.div`
  display: grid;
  grid-template: 400px 1fr / minmax(300px, 1024px);
  height: 100vh;
  justify-content: center;
  align-content: center;
`

class App extends Component {
  state = { weather: {} }

  async componentDidMount() {
    subscribeToWeather((err, data) => this.setState({ weather: data }))
    this.onSelectCity('cl')
  }

  onSelectCity = id =>
    this.setState({
      currentCity: {
        ...this.state.weather[id],
        image: cities[id].image(document.getElementById('root').offsetWidth)
      }
    })

  render() {
    return (
      <Container>
        <CityView {...this.state.currentCity} />
        <ListCity>
          {Object.keys(cities).map(keyCity => (
            <CityRow
              key={keyCity}
              onSelect={() => this.onSelectCity(keyCity)}
              name={cities[keyCity].name}
              {...this.state.weather[keyCity]}
            />
          ))}
        </ListCity>
      </Container>
    )
  }
}

export default App
