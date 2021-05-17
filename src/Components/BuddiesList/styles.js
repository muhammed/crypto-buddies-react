import styled from 'styled-components'

export const Item = styled.div`
  transition: all 0.25s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 32px 56px;

  &:hover ${Item} {
    opacity: 0.5;
  }
`
