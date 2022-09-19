import React from 'react'

const Category = ({item}) => {
  return (
    <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>  
    {/* Flex-1 means each of the phootos fgonna be similar Size */}
    {/* Absolute means each of the photos h2 tags gona be center Allign */}
        <img src={item.src} alt="category_images" className='w-full' />
        <div  className='flex absolute w-full h-full left-0 top-0 items-center justify-center flex-col'>
            <h2 className='text-white font-medium text-3xl'> {item.title} </h2>
        </div>
        <button className='btn'>See More</button>
    </div>
  )
}

export default Category