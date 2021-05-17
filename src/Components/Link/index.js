import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Link = (props) => {
  const { to, params } = props
  const [url, setUrl] = useState(to || '')

  useEffect(() => {
    if (params) {
      let tempUrl = to
      Object.keys(params).forEach((item) => {
        const value = params[item]
        const regex = new RegExp(`\\s*:${item}\\s*`, 'g')
        tempUrl = tempUrl.replace(regex, value)
      })
      setUrl(tempUrl)
    }
  }, [params])

  return (
    <NavLink {...props} to={url}>
      {props.children}
    </NavLink>
  )
}

export default Link
