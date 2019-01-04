import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  background: #46a6c9;
  grid-template: repeat(3, 1fr) / repeat(2, 50%);
  grid-template-areas:
    'title title '
    'time image'
    'temperature image';
  justify-items: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 110px;
`

const Text = styled.span`
  font-size: ${({ size }) => size || '15px'};
  font-weight: ${({ weight }) => weight || 100};
  grid-area: ${({ area }) => area || ''};
  color: #fff;
`

const CityView = ({ name, temperature, time }) => {
  return (
    <Container>
      <Text area="title" size="36px">
        {name}
      </Text>
      <Text area="time" size="18px">
        {temperature}
      </Text>
      <Text area="temperature" size="42px" weight={900}>
        {time}
      </Text>
      <Image
        area="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Comunas_de_Santiago.svg/350px-Comunas_de_Santiago.svg.png"
      />
    </Container>
  )
}

CityView.deafultProps = {
  name: '',
  temperature: '',
  time: ''
}

CityView.propTypes = {
  name: PropTypes.string,
  temperature: PropTypes.string,
  time: PropTypes.string
}
export default CityView
