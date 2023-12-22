import React from 'react'
import { Button } from '../../../common/button/button'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';    

export const Hero = () => {
    return (
        <div className='dark:text-white'>
            <div className="container flex items-center justify-between mt-[12px] mb-[46px] pl-[43px] dark:bg-slate-800 bg-[#F5F5F5]">
            <Swiper  modules={[Pagination]} spaceBetween={30}   pagination={{  clickable: true, }} className="mySwiper ">

            <SwiperSlide className='flex'>
                <div className='py-[80px]'>
                <b className=' dark:text-[#eee] text-[14px] font-[500] mb-[7px] text-[#3D3D3D]'>Welcome to GreenShop</b>
                    <h1 className='dark:text-white font-cera-pro text-[#3D3D3D] text-[70px] font-black uppercase '>
                        Let’s Make a <br />
                        Better <span className='text-[#46A358] font-[900]'>Planet</span>
                    </h1>
                    <p className='dark:color-[#eee] color-[#727272] mt-[5px] mb-[44px]'>
                        We are an online plant
                        shop offering a wide range
                        of cheap and trendy plants.
                        Use <br /> our plants to
                        create an unique Urban
                        Jungle. Order your favorite
                        plants!
                    </p>
                    <Button>SHOP NOW</Button>
                </div>
                <div>
                    <img src="https://i.ibb.co/SBQ3Skk/Group-36211.png" alt="" />
                </div>
             </SwiperSlide>
             <SwiperSlide className='flex'>
                <div className='py-[80px]'>
                <b className=' dark:text-[#eee] text-[14px] font-[500] mb-[7px] text-[#3D3D3D]'>Welcome to GreenShop</b>
                    <h1 className='dark:text-white font-cera-pro text-[#3D3D3D] text-[70px] font-black uppercase '>
                        Let’s Make a <br />
                        Better <span className='text-[#46A358] font-[900]'>Planet</span>
                    </h1>
                    <p className='dark:color-[#eee] color-[#727272] mt-[5px] mb-[44px]'>
                        We are an online plant
                        shop offering a wide range
                        of cheap and trendy plants.
                        Use <br /> our plants to
                        create an unique Urban
                        Jungle. Order your favorite
                        plants!
                    </p>
                    <Button>SHOP NOW</Button>
                </div>
                <div>
                    <img src="https://i.ibb.co/SBQ3Skk/Group-36211.png" alt="" />
                </div>
             </SwiperSlide>
             <SwiperSlide className='flex'>
                <div className='py-[80px]'>
                <b className=' dark:text-[#eee] text-[14px] font-[500] mb-[7px] text-[#3D3D3D]'>Welcome to GreenShop</b>
                    <h1 className='dark:text-white font-cera-pro text-[#3D3D3D] text-[70px] font-black uppercase '>
                        Let’s Make a <br />
                        Better <span className='text-[#46A358] font-[900]'>Planet</span>
                    </h1>
                    <p className='dark:color-[#eee] color-[#727272] mt-[5px] mb-[44px]'>
                        We are an online plant
                        shop offering a wide range
                        of cheap and trendy plants.
                        Use <br /> our plants to
                        create an unique Urban
                        Jungle. Order your favorite
                        plants!
                    </p>
                    <Button>SHOP NOW</Button>
                </div>
                <div>
                    <img src="https://i.ibb.co/SBQ3Skk/Group-36211.png" alt="" />
                </div>
             </SwiperSlide>

            </Swiper>
            </div>
        </div>
    )
}
