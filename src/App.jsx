import { useState } from 'react'
import { Header,Banner, CategoryCard, OfferCard, ProductSlider, Product,Footer } from './components'
import { ConfigProvider, Tabs, Input } from 'antd'
import { baby,bag,dress,fnd,hnl,hobby,laptop,makeup,manshoe,med,tshirt,womanshoe, event1,voucher1,pro1,pro2,pro3,pro4,pro5,pro6,pro7,pro8,pro9,pro10,pro11,pro12,pro13,pro14,pro15,pro16,pro17,pro18} from './assets'
import { TopUp } from './features'

function App() {
  const datas1 = [{border:'br',img:bag,name:'Tas'},{border:'br',img:dress,name:'Pakaian Wanita'},{border:'br',img:tshirt,name:'Pakaian Pria'},{border:'br',img:womanshoe,name:'Sepatu Wanita'},{border:'br',img:manshoe,name:'Sepatu Pria'},{border:'bo',img:hobby,name:'Hobi'}]
  const datas2 = [{border:'ri',img:fnd,name:'Makanan dan Minuman'},{border:'ri',img:hnl,name:'Perlengkapan Rumah'},{border:'ri',img:laptop,name:'Komputer dan Aksesoris'},{border:'ri',img:baby,name:'Ibu dan Anak'},{border:'ri',img:makeup,name:'Perawatan dan Kecantikan'},{border:'',img:med,name:'Kesehatan'}]
  const datasWeb = [datas1,datas2]
  const datas3 = [{border:'br',img:bag,name:'Tas'},{border:'br',img:dress,name:'Pakaian Wanita'},{border:'bo',img:tshirt,name:'Pakaian Pria'}]
  const datas4 = [{border:'br',img:womanshoe,name:'Sepatu Wanita'},{border:'br',img:manshoe,name:'Sepatu Pria'},{border:'bo',img:hobby,name:'Hobi'}]
  const datas5 = [{border:'br',img:fnd,name:'Makanan dan Minuman'},{border:'br',img:hnl,name:'Perlengkapan Rumah'},{border:'bo',img:laptop,name:'Komputer dan Aksesoris'}]
  const datas6 = [{border:'ri',img:baby,name:'Ibu dan Anak'},{border:'ri',img:makeup,name:'Perawatan dan Kecantikan'},{border:'',img:med,name:'Kesehatan'}]
  const eventD1 = {type:'event',img:event1,headline:'PAY DAY SALE!!',subline:`Nikmati promo spektakuler idshop setiap tanggal 25!`}
  const voucherD1 = {type:'voucher',img:voucher1,headline:'GRATIS ONGKIR 50%',subline:'Klaim voucher gratis ongkos kirim Kamu.'}
  const datasPhone = [datas3,datas4,datas5,datas6]
  const datasOffer = [eventD1,voucherD1]
  const discPro = [{img:pro1,disc:'-50%',price:10900,sold:null, name:null},{img:pro2,disc:'-20%',price:120899,sold:null,name:null},{img:pro3,disc:'-70%',price:67402,sold:null,name:null},{img:pro4,disc:'-10%',price:49909,sold:null,name:null},{img:pro5,disc:'-60%',price:80128,sold:null,name:null},{img:pro6,disc:'-70%',price:59093,sold:null,name:null}]
  const recPro = [{img:pro7,disc:null,price:120683,sold:1500, name:'Pinka Lipstick - Red Cheery Bloom'},{img:pro8,disc:'-20%',price:80837,sold:1000,name:'Eye Shadow Mulan - Cold Tone'},{img:pro9,disc:'-50%',price:54829,sold:456,name:'Almond Milk - FreshkyMilk'},{img:pro10,disc:'-20%',price:83092,sold:1000,name:'Kaos Hitam Bulop - Size M'},{img:pro11,disc:'-10%',price:50568,sold:10000,name:'Reed Diffuser Aromaterapi'},{img:pro12,disc:'-50%',price:93002,sold:1000,name:'Alexa Ring - Titanium Silver Gold'},{img:pro13,disc:'-25%',price:45903,sold:5000, name:'kacamata Baca murah'},{img:pro14,disc:null,price:110938,sold:2100,name:'Sepatu kerja wanita - Putih'},{img:pro15,disc:'-10%',price:39748,sold:6200,name:'Baju wanita - Hijau Army'},{img:pro16,disc:'-50%',price:320739,sold:1500,name:'Levis wanita premium'},{img:pro17,disc:'-80%',price:29478,sold:5000,name:'Wadah kaca estetik'},{img:pro18,disc:'-10%',price:490379,sold:9400,name:'Mechanical Wireless Keyboard - Visky'}]
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
      <div className='max-w-[1048px] mx-auto pt-4 px-4 pb-6 bg-white rounded-lg mb-[40px]'>
        <p className='text-xl mb-4'>Top Up dan Tagihan</p>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      <div className='flex flex-col gap-4 max-w-[1048px] mx-auto lg:px-4 mb-[40px]'>
          {datasOffer.map((offer,index)=>{
            return(
              <OfferCard dkey={index} data={offer}/>
            )
          })}
      </div>
      <div className='max-w-[1048px] mx-auto p-6 bg-white rounded-lg mb-[40px]'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-xl'>Diskon Hari Ini</p>
          <a href='#' className='text-xs block px-3 py-4 text-tosca'>Lihat Semua</a>
        </div>
        <ProductSlider products={discPro}/>
      </div>
      <div className='max-w-[1048px] mx-auto p-6 mb-[40px]'>
        <p className='text-xl'>Rekomendasi untuk Kamu</p>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-6 md:grid-cols-4'>
          {recPro.map((pro,index)=>{
            return(
              <Product product={pro} recKey={index}/>
            )
          })}
        </div>
      </div>
      <Footer/>
    </div>
    </ConfigProvider>
  )
}

export default App
