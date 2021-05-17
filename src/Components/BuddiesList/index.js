import React from 'react'
import BuddyCard from '@/Components/BuddyCard'
import { List, Item } from './styles'
import Link from '../Link'

const BuddiesList = ({ list, showAnimation }) => {
  return (
    <List>
      {list?.map((buddy, index) => (
        <Item key={buddy.id} as={Link}>
          <BuddyCard index={index} showAnimation={showAnimation} buddy={buddy} />
        </Item>
      ))}
    </List>
  )
}

export default BuddiesList
