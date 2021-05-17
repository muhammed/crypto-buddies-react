import React from 'react'
import { Avatar, Card, Name } from './styles'
import Link from '@/Components/Link'

const BuddyCard = ({ buddy }) => {
  return (
    <Card as={Link}>
      <Avatar src={buddy.image} />
      <Name>{buddy.name}</Name>
    </Card>
  )
}

export default BuddyCard
