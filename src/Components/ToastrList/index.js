import React from 'react'
import useToastr from '@/Hooks/useToastr'
import {
  ToastrClose,
  ToastrContainer,
  ToastrContent,
  ToastrDescription,
  ToastrItem,
  ToastrTitle
} from './styles'

const ToastrList = (props) => {
  const { toastrList, hideToastr } = useToastr()
  return (
    <ToastrContainer>
      {toastrList?.map((toastr) => (
        <ToastrItem key={toastr.id} type={toastr.type}>
          {toastr.close || (
            <ToastrClose onClick={() => hideToastr(toastr)}>X</ToastrClose>
          )}
          <ToastrContent>
            <ToastrTitle>{toastr.title}</ToastrTitle>
            <ToastrDescription>{toastr.description}</ToastrDescription>
          </ToastrContent>
        </ToastrItem>
      ))}
    </ToastrContainer>
  )
}

export default ToastrList
