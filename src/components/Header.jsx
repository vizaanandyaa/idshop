import React from "react";
import { Select, Button, Input } from "antd";
import { GlobalOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { logo, cart, menu, prev } from "../assets";
import '../index.css'

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { Option } = Select;
  const items = [
    {
      label: "Bahasa Indonesia",
      value: "ind",
    },
    {
      label: "English",
      value: "en",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <header className=" w-full header bg-white fixed z-10">
      <div className="max-w-screen-xl mx-auto">

      <div className=" justify-end gap-4 h-[64px] p-4 hidden lg:flex">
        <Select
          style={{ width: 200, height: "100%" }}
          defaultValue="ind"
          onChange={handleChange}
        >
          {items.map((item, index) => {
            return (
              <Option key={index} value={item.value} className="font-work">
                <GlobalOutlined style={{ marginRight: 8 }} />
                {item.label}
              </Option>
            );
          })}
        </Select>
        <Button type="link" className="text-tosca px-3 py-4 h-full">
          Masuk
        </Button>
        <Button className="bg-tosca text-white px-3 py-4 text-sm h-full">
          Daftar
        </Button>
      </div>
      <div className="flex p-4 lg:justify-normal">
        <img
          className="w-[171px] h-[54px] mr-[10%] hidden lg:block"
          src={logo}
          alt="logo"
        />
        <div className="relative w-[735px] mr-[2%]">
          <Input
            className="h-[56px] lg:max-w-[735px]"
            placeholder="Cari di idshop"
          />
          <Button className="absolute left-[88%] top-[50%] translate-y-[-50%] bg-tosca text-white hidden lg:block">
            {" "}
            Cari
          </Button>
        </div>
        <Button className="border-0 p-0 md:px-3 md:py-4 w-[56px] h-[48px]">
          <img className="w-[24px] h-[24px]" src={cart} alt="cart" />
        </Button>
        <Button
          className="border-0 px-3 py-4 w-[56px] h-[48px] lg:hidden"
          onClick={() => setOpen(true)}
        >
          <img className="w-[24px] h-[24px]" src={menu} alt="menu" />
        </Button>
      </div>
      {open && (
        <div className="p-4 h-screen absolute top-0 bg-white w-full lg:hidden z-20">
          <div className="flex justify-between items-center mb-10">
            <img className="w-[200px] md:w-[35%]" src={logo} alt="logo" />
            <Button onClick={() => setOpen(false)} className="border-0">
              <img src={prev} alt="prev" className="w-[24px]" />
            </Button>
          </div>
          <div>
            <Select
                style={{ width: "100%", height: "100%" }}
                defaultValue="ind"
                onChange={handleChange}
            >
                {items.map((item, index) => {
                return (
                    <Option key={index} value={item.value} className="font-work">
                    <GlobalOutlined style={{ marginRight: 8 }} />
                    {item.label}
                    </Option>
                );
                })}
            </Select>
          </div>
          <div className="absolute bottom-3 flex flex-col w-[95%] gap-4">
            <Button className="bg-tosca text-white px-3 py-4 text-sm w-[95%] md:w-full h-[44px]">
            Daftar
            </Button>
            <Button type="link" className="text-tosca px-3 py-4 w-[95%] md:w-full h-[44px]">
            Masuk
            </Button>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
