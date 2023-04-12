import React from 'react'
import { Useglobalhooks } from './context'
const search = () => {
  const name=Useglobalhooks();

  return (
    <div>search {name}</div>
  )
}

export default search