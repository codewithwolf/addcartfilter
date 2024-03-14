import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({size,count}) => {
  return (
    <div className='  flex justify-around bg-black text-white h-24 items-center  text-2xl drop-shadow-2xl'>
      <div>Home</div>
<div><i className="fa-duotone fa-cart-shopping"></i>
      {size}
      </div>
    

    </div>
  )
}

export default Navbar
