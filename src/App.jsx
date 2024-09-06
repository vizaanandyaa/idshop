import { useState } from 'react'
import { Header,Banner, CategoryCard } from './components'
import { ConfigProvider, Tabs, Input } from 'antd'
import { baby,bag,dress,fnd,hnl,hobby,laptop,makeup,manshoe,med,tshirt,womanshoe } from './assets'
import { TopUp } from './features'

function App() {
  const datas1 = [{border:'br',img:bag,name:'Tas'},{border:'br',img:dress,name:'Pakaian Wanita'},{border:'br',img:tshirt,name:'Pakaian Pria'},{border:'br',img:womanshoe,name:'Sepatu Wanita'},{border:'br',img:manshoe,name:'Sepatu Pria'},{border:'bo',img:hobby,name:'Hobi'}]
  const datas2 = [{border:'ri',img:fnd,name:'Makanan dan Minuman'},{border:'ri',img:hnl,name:'Perlengkapan Rumah'},{border:'ri',img:laptop,name:'Komputer dan Aksesoris'},{border:'ri',img:baby,name:'Ibu dan Anak'},{border:'ri',img:makeup,name:'Perawatan dan Kecantikan'},{border:'',img:med,name:'Kesehatan'}]
  const datasWeb = [datas1,datas2]
  const datas3 = [{border:'br',img:bag,name:'Tas'},{border:'br',img:dress,name:'Pakaian Wanita'},{border:'bo',img:tshirt,name:'Pakaian Pria'}]
  const datas4 = [{border:'br',img:womanshoe,name:'Sepatu Wanita'},{border:'br',img:manshoe,name:'Sepatu Pria'},{border:'bo',img:hobby,name:'Hobi'}]
  const datas5 = [{border:'br',img:fnd,name:'Makanan dan Minuman'},{border:'br',img:hnl,name:'Perlengkapan Rumah'},{border:'bo',img:laptop,name:'Komputer dan Aksesoris'}]
  const datas6 = [{border:'ri',img:baby,name:'Ibu dan Anak'},{border:'ri',img:makeup,name:'Perawatan dan Kecantikan'},{border:'',img:med,name:'Kesehatan'}]
  const datasPhone = [datas3,datas4,datas5,datas6]
  const items =[
    {
      key:'1',
      label:'Pulsa',
      children: <TopUp type='pulsa'/>
    },
    {
      key:'2',
      label:'Paket data',
      children: <TopUp type='pdata'/>
    },
    {
      key:'3',
      label:'Listrik PLN',
      children: '',
      disabled:true
    },
    {
      key:'4',
      label:'Uang Elektronik',
      children: '',
      disabled:true
    },
    {
      key:'5',
      label:'Air PDAM',
      children: '',
      disabled:true
    }
  ]
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Work Sans"
        }
      }}
    >

    <div className='font-work bg-[#F9F9F9]'>
      <Header/>
      <Banner/>
      <div className='max-w-[1048px] mx-auto p-4 bg-white rounded-lg mb-[40px]'>
        <p className='text-xl mb-4'>Kategori</p>
        <div className='hidden lg:block lg:max-w-[1048px] mx-auto'>
          {datasWeb.map((datas, index)=>{
            return(
            <div key={index} className='flex max-w-[900px] mx-auto'>
              <CategoryCard data={datas}/>
            </div>
            )
          })}
        </div>
        <div className='block lg:hidden lg:max-w-[1048px] mx-auto'>
          {datasPhone.map((datas,index)=>{
            return(
              <div key={index} className='flex max-w-[500px] mx-auto'>
                <CategoryCard data={datas}/>
              </div>
            )
          })}
        </div>
      </div>
      <div className='max-w-[1048px] mx-auto p-4 bg-white rounded-lg'>
        <p className='text-xl mb-4'>Top Up dan Tagihan</p>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
    </ConfigProvider>
  )
}

export default App
