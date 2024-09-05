import { useState } from 'react'
import { Header,Banner } from './components'
import { ConfigProvider } from 'antd'

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Work Sans"
        }
      }}
    >

    <div className='font-work'>
      <Header/>
      <Banner/>
    </div>
    </ConfigProvider>
  )
}

export default App
