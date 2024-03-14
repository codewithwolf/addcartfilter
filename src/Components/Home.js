import React from 'react'
import list from '../Data'
import { Link } from 'react-router-dom'

const Home = ({increment}) => {
   
  return (
    
    <div className=' grid grid-cols-3 items-center justify-center'>
    {
        list.map((item)=>(
            
            <div className='border-red-200 '>
              <div className=' border-red-200'>
                <img className=' w-[170px]' src={item.img} alt="" />
                <h1>{item.title} </h1>
                <h1>{item.price} </h1>
                
                <button onClick={increment} className=' ml-5 bg-black text-white h-8 w-40 rounded-sm hover:bg-pur'>Add to cart</button>
                

              </div>

            </div>
        ))
    }
      
    </div>
    
  )
}

export default Home
