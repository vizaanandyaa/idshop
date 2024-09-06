import React from 'react'
import { Button, InputNumber, Select } from 'antd'
import { phone } from '../assets'

export default function Pulsa() {
    const items = [
        {
          label: "10.000",
          value: "10000",
        },
        {
            label: "20.000",
            value: "20000",
        },
        {
            label: "50.000",
            value: "50000",
          },
          {
            label: "100.000",
            value: "100000",
          }
      ];
      const { Option } = Select;
  return (
    <div className='flex flex-col lg:flex-row lg:gap-4'>
        <InputNumber placeholder='Nomor Telpon' className='p-3 w-full lg:w-[452px]' prefix={<img src={phone} className='w-[24px] h-[24px]'/>}/>
        <Select
          className='w-full h-[55px] lg:w-[452px]'
          defaultValue="10000"
        >
          {items.map((item, index) => {
            return (
              <Option key={index} value={item.value} className="font-work p-3">
                {item.label}
              </Option>
            );
          })}
        </Select>
        <Button>Beli</Button>
    </div>
  )
}
