import React, { Component } from 'react'
import styled from 'styled-components'
import { cities, subscribeToWeather } from '../api'

import ListCity from '../components/ListCity'
import CityRow from '../components/CityRow'
import CityView from '../components/CityView'

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: 100vh;
`

class App extends Component {
  state = { weather: {} }

  componentDidMount() {
    subscribeToWeather((err, data) => this.setState({ weather: data }))
  }

  render() {
    return (
      <Container>
        <CityView {...this.state.currentCity} />
        <ListCity>
          {cities.map(city => (
            <CityRow key={city.id} {...this.state.weather[city.id]} />
          ))}
        </ListCity>
      </Container>
    )
  }
}

export default App
