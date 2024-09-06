import React from 'react'
import { Button, InputNumber, Select } from 'antd'
import { phone } from '../assets'

export default function TopUp(props) {
    const {type} = props
    const pulsa = [
        {
          label: "10.000",
          value: "p10000",
        },
        {
            label: "20.000",
            value: "p20000",
        },
        {
            label: "50.000",
            value: "p50000",
          },
          {
            label: "100.000",
            value: "p100000",
          }
      ];
      const pdata = [
        {
          label: "Paket Seminggu - 20.000",
          value: "d20000",
        },
        {
            label: "Paket Bulanan - 50.000",
            value: "d50000",
        },
        {
            label: "Paket Bulanan OMG - 78.000",
            value: "d78000",
          },
          {
            label: "Paket Berkah - 54.000",
            value: "d54000",
          }
      ]
      const items = type === 'pulsa'? pulsa : pdata
      const { Option } = Select;
  return (
    <div className='flex flex-col lg:flex-row gap-4'>
        <InputNumber placeholder='Nomor Telpon' className='p-3 w-full lg:w-[452px] h-[44px]' prefix={<img src={phone} className='w-[24px] h-[24px]'/>}/>
        <Select
          className='w-full h-[44px] lg:w-[452px]'
          defaultValue={type === 'pulsa' ? 'p10000' :'d20000'}
        >
          {items.map((item, index) => {
            return (
              <Option key={index} value={item.value} className="font-work p-3">
                {item.label}
              </Option>
            );
          })}
        </Select>
        <Button className='h-[44px] border-tosca text-tosca border-2'>Beli</Button>
    </div>
  )
}
