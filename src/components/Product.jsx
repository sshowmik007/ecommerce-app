import React, {useState} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Product = ({item}) => {

    const [hoverEffects , setHoverEffects]=useState(' opacity-0')

    function handleHoverExit(){
        setHoverEffects(' opacity-0')
        }
  function handleHoverEnter() {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

    const iconStyle='h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white m-3 cursor-pointer '
   

  return (
    <div className='flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
        <img src={item.src} alt="product_image" />
        <div className={` flex items-center justify-center w-full h-full absolute ` + hoverEffects}>
            <div className={iconStyle}>
                <ShoppingCartOutlinedIcon />
            </div>
            <div className={iconStyle}>
                <FavoriteBorderOutlinedIcon />
            </div>
            <div className={iconStyle}>
                <SearchOutlinedIcon />
            </div>
        </div>
    </div>
  );
};

export default Product