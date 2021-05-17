import React from 'react'
import BuddyCard from '@/Components/BuddyCard'
import { List, Item } from './styles'
import Link from '../Link'
import { DETAILS_PATH } from '@/Constants/routeNames'

const BuddiesList = ({ list, showAnimation }) => {
  return (
    <List>
      {list?.map((buddy, index) => (
        <Item
          key={buddy.id}
          to={{
            pathname: `${DETAILS_PATH}/${buddy.id}`,
            state: { initialItem: buddy }
          }}
          params={{ id: buddy.id }}
          state={{ item: buddy }}
          as={Link}>
          <BuddyCard index={index} showAnimation={showAnimation} buddy={buddy} />
        </Item>
      ))}
    </List>
  )
}

export default BuddiesList
