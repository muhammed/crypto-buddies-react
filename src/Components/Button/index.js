import React from 'react'
import { ButtonContainer, Title } from './styles'

const Button = (props) => {
  return (
    <ButtonContainer {...props}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  )
}

export default Button
