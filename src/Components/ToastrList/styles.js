import styled from 'styled-components'

const getColor = (type) => {
  switch (type) {
    case 'success':
      return 'green'

    case 'danger':
      return 'orange'

    case 'warning':
      return 'yellow'

    case 'error':
      return 'red'

    case 'info':
      return 'blue'

    default:
      return '#fff'
  }
}

export const ToastrContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1010;
`
export const ToastrItem = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgb(59 59 91 / 9%);
  /* border: 1px solid #bebebe; */
  padding: 15px;
  min-width: 300px;
  color: #fff;
  background: ${(props) => getColor(props.type)};
`

export const ToastrContent = styled.div`
  width: 100%;
`

export const ToastrTitle = styled.div`
  font-size: 18px;
  padding-right: 45px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ToastrDescription = styled.div`
  font-size: 16px;
`

export const ToastrClose = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
`
