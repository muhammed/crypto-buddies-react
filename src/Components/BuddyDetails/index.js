import React from 'react'
import { Avatar, Button, Container, Title } from './styles'

const BuddyDetails = ({ details }) => {
  return (
    <Container>
      <Avatar src={details.image} />
      <div>
        <Title>{details.name}</Title>
        <Button>Add Buddy</Button>
      </div>
    </Container>
  )
}

export default BuddyDetails
