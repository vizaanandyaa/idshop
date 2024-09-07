import React from "react";
import {
  goplay,
  appst,
  pay1,
  pay2,
  pay3,
  pay4,
  pay5,
  pay6,
  pay7,
  pay8,
  pay9,
  ship1,ship2,ship3,ship4,sp1,sp2,sos1,sos2,sos3,sos4
} from "../assets";
import '../index.css'

export default function Footer() {
  const pays = [pay1, pay2, pay3, pay4, pay5, pay6, pay7, pay8, pay9];
  const ships = [ship1,ship2,ship3,ship4];
  const sps = [sp1,sp2]
  const sosmeds = [sos1,sos2,sos3,sos4]
  return (
    <div className="px-4 lg:max-w-[1048px] lg:mx-auto">
      <div className="py-6 lg:py-0 lg:flex lg:gap-8">
        <div className="mb-8">
          <p className="mb-4 font-medium text-base">Layanan Pelanggan</p>
          <ul className="flex flex-col gap-2 text-black">
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Pusat Bantuan
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Cara Pembelian
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Pengiriman
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Pengembalian Barang dan Dana
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Metode Pembayaran
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-[40px] lg:w-[200px] lg:mr-[40px]">
          <p className="mb-4 font-medium text-base">Jelajahi idshop</p>
          <ul className="flex flex-col gap-2 text-black">
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Karir
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                idshop Security
              </a>
            </li>
            <li>
              <a className="text-xs font-normal bo block" href="#">
                id Mall
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-medium text-base">Unduh Aplikasi</p>
          <div className="flex justify-between lg:flex-col">
            <button className="lg:w-[210px]">
              <img src={goplay} alt="goplay" />
            </button>
            <button className="lg:w-[210px]">
              <img src={appst} alt="appst" />
            </button>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="mb-4">
          <p className="mb-2 lg:mb-4 font-medium text-base">
            Metode Pembayaran
          </p>
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-9 ">
            {pays.map((pay, index) => {
              return <img src={pay} key={index} alt={`pay${index}`} />;
            })}
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2 lg:mb-4 font-medium text-base">
            Jasa Pengiriman
          </p>
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-9 ">
            {ships.map((ship, index) => {
              return <img src={ship} key={index} alt={`pay${index}`} />;
            })}
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2 lg:mb-4 font-medium text-base">
            Keamanan dan Privasi
          </p>
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-9 ">
            {sps.map((sp, index) => {
              return <img src={sp} key={index} alt={`pay${index}`} />;
            })}
          </div>
        </div>
      </div>
      <div className="py-4 to">
        <div className="lg:flex lg:justify-between lg:items-center">
            <p className="mb-6 lg:mb-0">© idshop 2024. Hak Cipta Dilindungi</p>
            <div className="w-[156px]">
            <p className="mb-2 lg:mb-4 font-medium text-base">
            Ikuti Kami
          </p>
            <div className="flex gap-2 ">
                {sosmeds.map((sos, index) => {
                return (
                    <button key={index}>
                        <img src={sos}  alt={`pay${index}`} />
                    </button>
                );
                })}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
