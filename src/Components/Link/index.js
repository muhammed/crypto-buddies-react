import React, { useEffect, useState } from 'react'
import { Link as NativeLink } from 'react-router-dom'

const Link = (props) => {
  return <NativeLink {...props}>{props.children}</NativeLink>
}

export default Link
