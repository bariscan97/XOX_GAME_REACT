import React from 'react'
import "./Header.css"
const Header = (props) => {
  return (
    <>
      <h1 className='title'>XOX GAME</h1>
      <h1 className='header'>{props.win}</h1>
    </>
  )
}

export default Header