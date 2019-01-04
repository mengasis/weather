import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.li`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  padding: 10px;
`

const Text = styled.span`
  font-weight: ${({ bold }) => (bold ? 900 : 100)};
`

const CityRow = ({ name, temperature, time }) => {
  return (
    <Container>
      <Text>{name}</Text>
      <Text bold>{temperature}</Text>
      <Text bold>{time}</Text>
    </Container>
  )
}

CityRow.deafultProps = {
  name: '',
  temperature: '',
  time: ''
}

CityRow.propTypes = {
  name: PropTypes.string,
  temperature: PropTypes.string,
  time: PropTypes.string
}

export default CityRow
