import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const style="text-1xl ml-10 cursor-pointer"

  return (
    <div className='navbar h-15 shadow-md relative z-10'>
        <div className="wrapper py-5 px-10 flex justify-between items-center">
            {/* Left DIV */}
            <div className='left flex flex-1 items-center'>
                <div className=' language cursor-pointer text-1xl'>EN </div>
                <div className="searchInput flex border-solid border-2 border-gray-300 rounded-md p-0.5 ml-2  focus-within:border-purple-700 transition-all ">
                    <input className=" input outline-none " type='text' />
                     <SearchRoundedIcon className= '' style={{fontSize:''}} />
                </div>
            </div>

            
            {/* LOGO */}
            <div className='center flex-1 text-center'>
              <div className='logo font-bold text-lg'>Sadman STORE</div>
            </div>

            
            {/* Right DIV */}
            <div className=' right flex flex-1 items-center justify-end'>
              <div className={style}>Register</div>
              <div className={style}>Sign-in</div>
              <div className={style}>
                  <Badge badgeContent={2} color='primary'>
                      <ShoppingCartIcon/>
                  </Badge>
              </div>
             
            </div>
        </div>
    </div>
  )
}

export default Navbar