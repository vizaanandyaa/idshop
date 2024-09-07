import React from 'react'

export default function Product(props) {
  const {product, recKey} = props 
  const formattedString = (product.price / 1000).toFixed(3).replace('.', '.');
  const soldProFun =(e)=>{
      let soldPro = '' 
      if(e >=10000){
        soldPro = `${e / 1000} RB+`
      }else if(e > 1000){
        soldPro = `${(e / 1000).toFixed(1)} RB`
      }else if(e < 1000){
        soldPro = `${e}`
      }else{
        soldPro =`${(e / 1000)} RB`
      }
      return soldPro
  }

  return (
    <div className='p-4 relative w-[152px]' key={recKey}>
        {product.disc && 
        <div className='absolute right-0 bg-tosca top-1 w-[55px] h-[20px]'>
            <p className='text-center text-white text-sm'>{product.disc}</p>
        </div>}
        <img src={product.img} alt='prodimg' className='mb-4 w-[120px] h-[120px] mx-auto'/>
        <p className='text-xs font-normal truncate'>{product.name ? product.name : 'Nama Produk'}</p>
        <p className='text-sm font-medium'>{`Rp${formattedString}`}</p>
        {product.sold &&
            <p className='text-right text-xs font-medium mt-4'>{`${soldProFun(product.sold)} Terjual`}</p>
        }
    </div>
  )
}
