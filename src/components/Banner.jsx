import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { banner1, banner2, banner3 } from "../assets";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import '../index.css'

export default function Banner() {
  const banners = [banner1, banner2, banner3];
  return (
    <div className="lg:max-w-[1248px] mx-auto">
      <Splide aria-label="My Favorite Images">
        {banners.map((ban,index)=>{
            return(

            <SplideSlide>
            <img src={ban} alt={`ban-${index + 1}`} />
            </SplideSlide>
            )
        })}
      </Splide>
    </div>
  );
}
