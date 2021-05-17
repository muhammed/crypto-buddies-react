import { ToastrContext } from '@/Context/ToastrProvider'
import React, { useContext, useEffect } from 'react'

const DEFAULT_OPTIONS = {
  id: Math.random(),
  title: 'Uyarı!',
  description: null,
  type: 'success',
  timeOut: 5000,
  close: null, //<div>close</div>
  icon: null, //<div>icon</div>
  onClick: () => {},
  onClose: () => {},
  hideAutomatically: true
}

const useToastr = () => {
  const { toastrList, setToastrList } = useContext(ToastrContext)
  const showToastr = (options) => {
    const optionsFinal = {
      ...DEFAULT_OPTIONS,
      ...options,
      id: Math.random()
    }
    console.log({ optionsFinal })
    setToastrList([...toastrList, optionsFinal])
    if (optionsFinal.hideAutomatically) {
      setTimeout(() => {
        hideToastr(optionsFinal)
      }, optionsFinal.timeOut)
    }
  }

  const hideToastr = (toastr) => {
    const tempList = toastrList.filter((item) => item.id !== toastr.id)
    setToastrList(tempList)
  }

  return { toastrList, showToastr, hideToastr }
}

export default useToastr
