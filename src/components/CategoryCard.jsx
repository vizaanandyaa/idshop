import { Button } from "antd";
import React from "react";

export default function CategoryCard(props) {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className={`${item.border} px-3 py-6 w-[166px]`}>
            <img src={item.img} alt="catelogo" className="mx-auto mb-2"/>
            <a href='#' className="text-center block">{item.name}</a>
          </div>
        );
      })}
    </>
  );
}
