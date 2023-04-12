// import React, { useContext } from 'react'
import Search from './Search'
import Stories from './Stories'
import Pagination from './Pagination'
// import { useContext } from 'react'
// import { Appcontext } from './context'
import { Useglobalhooks } from './context'

const App = () => {
  const data=Useglobalhooks();
  return (
    <>
    <div>Api implementation {data}</div>
    <Stories/>
    <Search/>
    <Pagination/>
    </>
    
  )
}

export default App;