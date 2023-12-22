import React from 'react'
import { CiHeart } from "react-icons/ci";
import { Button } from '../../../common/button/button'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Buy = () => {
  return (
    <div className=''>
      <div className="container mb-[94px] ">
      
        <div>
          <p> <span className='font-bold'>Home </span>/ Shop</p>
        </div>
        <div className='flex gap-[52px] mt-[23px]'>
          <div className='flex justify-between'>
            <div>
              <img src="https://i.ibb.co/9GGfXX7/product-20-320x320-1.png" alt="" />
              <img src="https://i.ibb.co/GR6BT8M/image-1.png" alt="" />
              <img src="https://i.ibb.co/9GGfXX7/product-20-320x320-1.png" alt="" />
              <img src="https://i.ibb.co/GR6BT8M/image-1.png" alt="" />
            </div>
            <div className='w-[404px] h-[404px] pt-[150px] text-center  rounded'>
              <img src="https://i.ibb.co/GR6BT8M/image-1.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className='text-[28px] font-bold'>Barberton Daisy</h2>
            <div className='flex justify-between border-b-2 mt-[21px]  mb-[15px]'>
              <span className='text-green font-bold'>$119.00</span>
              <div>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <p className='text-[15px] font-normal'>19 Customer Review</p>
              </div>
            </div>
            <b>Short Description:</b>
            <p className='text-[14px] font-normal text-[#727272] leading-6 mt-[10px] mb-[24px]'>
              The ceramic cylinder
              planters come with a
              wooden stand to help
              elevate your plants off
              the ground. The ceramic
              cylinder planters come
              with a wooden stand to
              help elevate your plants
              off the ground.
            </p>
            <b>Size:</b>
            <div className='flex gap-[10px] mt-[11px] mb-[23px]'>
              <p className='w-[30px] h-[30px] rounded-[50%] border-2 border-green-600 text-[18px] font-bold text-green-500 text-center'>S</p>
              <p className='w-[30px] h-[30px] rounded-[50%] border-2  text-[18px]   text-center'>M</p>
              <p className='w-[30px] h-[30px] rounded-[50%] border-2 text-[18px]   text-center'>L</p>
              <p className='w-[30px] h-[30px] rounded-[50%] border-2 text-[18px]  text-center'>XL</p>
            </div>
            <div className='flex mb-[26px]'>
              <span className='rounded-[29px] w-[33px] h-[38px] bg-green-700  text-center text-[25px]  text-white'>-</span>
              <span className='   text-center text-[25px]  text-black mx-[23px]'>1</span>
              <span className='rounded-[29px] mr-[26px] w-[33px] h-[38px] bg-green-700  text-center text-[25px]  text-white'>+</span>
              <Button customStyle="w-[130px] pl-[32px]">BUY NOW</Button>
              <Button customStyle="border-2 border-green-500 mx-[10px]">ADD TO CART</Button>
              <Button customStyle="text-green-700 border-2 border-green-500 "><CiHeart size={35}/></Button>
            </div>
            <p  className='text-[15px] text-[#727272]'> <span className='text-[#A5A5A5;]'>  SKU: </span>1995751877966</p>
            <p  className='text-[15px] text-[#727272] my-[10px]'> <span  className='text-[#A5A5A5;]'>Categories:</span> Potter Plants</p>
            <p  className='text-[15px] text-[#727272]'><span  className='text-[#A5A5A5;]'> Tags:</span> Home, Garden, Plants</p>
            <div className='mt-[18px] flex gap-[16px]'>
              <b >Share this products:</b>
              <FaFacebookF size={25}/>
              <FaTwitter size={25}/>
              <FaLinkedinIn size={25}/>
              <MdOutlineEmail size={25}/>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  )
}

