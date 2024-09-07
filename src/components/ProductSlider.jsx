import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Product} from './'
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import '../index.css'

export default function ProductSlider(props) {
  const {products} = props
  return (
    <div className="lg:max-w-[1248px] mx-auto">
      <Splide aria-label="product" options={{arrows:false,pagination:false,perPage:2, mediaQuery: 'min',breakpoints: {
		640: {
			perPage: 4,
		},
    1024: {
			perPage: 6,
		},
  }}}>
        {products.map((pro,index)=>{
            return(
            <SplideSlide key={index} style={{padding:'0%'}}>
                <Product product={pro}/>
            </SplideSlide>
            )
        })}
      </Splide>
    </div>
  )
}
