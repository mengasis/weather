import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconWeather from './IconWeather'

const Container = styled.div`
  display: grid;
  background-image: url(${({ background }) => background});
  grid-template: repeat(3, 134px) / repeat(2, 50%);
  grid-template-areas:
    'title weather '
    '. weather'
    'time .';
  justify-items: center;
  align-items: center;
`

const WeatherSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-conent: center;
  align-items: center;
  grid-area: ${({ area }) => area || ''};
`

const Text = styled.span`
  font-size: ${({ size }) => size || '15px'};
  font-weight: ${({ weight }) => weight || 500};
  grid-area: ${({ area }) => area || ''};
  color: #fff;
`

const CityView = ({ name, temperature, time, icon, image }) => {
  return (
    <Container background={image}>
      <Text area="title" size="42px" weight={100}>
        {name}
      </Text>
      <WeatherSection area="weather">
        <IconWeather name={icon} />
        <Text size="24px">{temperature}</Text>
      </WeatherSection>
      <Text area="time" size="72px" weight={100}>
        {time}
      </Text>
    </Container>
  )
}

CityView.deafultProps = {
  name: '',
  temperature: '',
  time: '',
  icon: '',
  image: ''
}

CityView.propTypes = {
  name: PropTypes.string,
  temperature: PropTypes.string,
  time: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string
}
export default CityView
