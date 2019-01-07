import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinner-material'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Loading = () => {
  return (
    <Container>
      <Spinner size={120} spinnerColor="#009688" spinnerWidth={2} visible={true} />
    </Container>
  )
}

Loading.propTypes = {}

export default Loading
