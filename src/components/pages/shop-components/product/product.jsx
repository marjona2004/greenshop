import React from 'react'
import flowers from '../../../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const Product = () => {
  return (
    <div>
      <div className="container mb-[128px] ">
        <p className='text-green font-bold text-[17px] border-b'>
          Releted Products
        </p>
        <ul className='flex mt-[44px] '>
        <Swiper
             slidesPerView={1}
             spaceBetween={10}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
               '@0.00': {
                 slidesPerView: 1,
                 spaceBetween: 10,
               },
               '@0.75': {
                 slidesPerView: 2,
                 spaceBetween: 20,
               },
               '@1.00': {
                 slidesPerView: 3,
                 spaceBetween: 40,
               },
               '@1.50': {
                 slidesPerView: 4,
                 spaceBetween: 50,
               },
             }}
             modules={[Pagination]}
             className="mySwiper"
           >
          {
           
           
            flowers.map(item=>{
              return(
                <SwiperSlide>
                <li key={item.id} >
                    <img src={item.imgUrl} alt={item.title} />
                    <h3>{item.type}</h3>
                    <p className='text-green'>${item.price}</p>
                </li>
                </SwiperSlide>
              )
              
            })
             
          }
          </Swiper>
        </ul>

      </div>
    </div>
  )
}
