import React from 'react'
import { Avatar, Card, Name } from './styles'
import Link from '@/Components/Link'

const BuddyCard = ({ buddy, index, showAnimation }) => {
  return (
    <Card index={index} animate={showAnimation ? 1 : 0}>
      <Avatar src={buddy.image} />
      <Name>{buddy.name}</Name>
    </Card>
  )
}

export default BuddyCard
