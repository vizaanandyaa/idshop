import React from 'react'

export default function Product(props) {
  const {product} = props 
  const formattedString = (product.price / 1000).toFixed(3).replace('.', '.'); 
  return (
    <div className='p-4 relative w-fit'>
        {product.disc && 
        <div className='absolute right-0 bg-tosca top-1 w-[55px] h-[20px]'>
            <p className='text-center text-white text-sm'>{product.disc}</p>
        </div>}
        <img src={product.img} alt='prodimg' className='mb-4'/>
        <p className='text-xs font-nomral'>Nama Produk</p>
        <p className='text-sm font-medium'>{`Rp${formattedString}`}</p>
    </div>
  )
}
