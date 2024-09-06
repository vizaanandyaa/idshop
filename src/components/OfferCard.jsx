import React from 'react'
import { Button } from 'antd'

export default function OfferCard(props) {
  const {data, dkey} = props  
  const bg = data.type === 'event'? 'bg-yello' : 'bg-tosca'
  const textHead = data.type === 'event' ? 'text-black' : 'text-yello'
  const textSub = data.type === 'event' ? 'text-[#61646B]' : 'text-white'
  const btnText = data.type === 'event' ? 'Ikuti Event' : 'Klaim Voucher'
  const btnBg = data.type === 'event' ? 'bg-tosca' : 'bg-yello'
  console.log(data)
  return (
    <div key={dkey} className={`${bg} px-6 py-4 block lg:flex lg:gap-[40px] lg:rounded-lg`}>
        <img src={data.img} alt="banner" className='mb-[40px] lg:mb-0 lg:max-w-[383px]'/>
        <div>
            <p className={`${textHead} text-5xl mb-6 leading-[56px]`}>{data.headline}</p>
            <p className={`${textSub} text-xl leading-7 mb-8`}>{data.subline}</p>
            <Button className={`w-full border-0 h-[56px] py-4 text-white ${btnBg}`}>{btnText}</Button>
        </div>
    </div>
  )
}
