import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export const Blog = () => {
  return (
    <div className="dark:text-white">
      <div className="container mb-[100px]">
        <h2 className="text-[30px] text-center">Our Blog Posts</h2>
        <p className="text-[15px] text-[#a9a7a7] text-center mb-[35px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.{" "}
        </p>
        <div className="flex items-start justify-between">
          <Swiper 
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {" "}

            <SwiperSlide>
            <div className="dark:bg-slate-800">
            <img src="https://i.ibb.co/ZdMpf0H/01.png" alt="" />
            <div className="py-[10px] pl-[15px]">
              <p className="text-green">September 12 I Read in 6 minutes</p>
              <h3 className="text-[20px]">
                Cactus & Succulent <br />
                Care Tips
              </h3>
              <p className="text-[#a9a7a7]">
                Cacti are succulents are easy care <br /> plants for any home or
                patio.{" "}
              </p>
              <a className="flex items-center gap-1" href="">
                Read More <FaArrowRight />
              </a>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="dark:bg-slate-800">
            <img src="https://i.ibb.co/MgHgt2d/02.png" alt="" />
            <div className="py-[10px] pl-[15px]">
              <p className="text-green">September 13 I Read in 2 minutes</p>
              <h3 className="text-[20px]">
                Top 10 Succulents for <br />
                Your Home
              </h3>
              <p className="text-[#a9a7a7]">
                Best in hanging baskets. Prefers <br /> medium to high light.
              </p>
              <a className="flex items-center gap-1" href="">
                Read More <FaArrowRight />
              </a>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="dark:bg-slate-800">
            <img src="https://i.ibb.co/FHwVZvy/03.png" alt="" />
            <div className="py-[10px] pl-[15px]">
              <p className="text-green">September 15 I Read in 3 minutes</p>
              <h3 className="text-[20px]">
                Cacti & Succulent <br />
                Care Tips
              </h3>
              <p className="text-[#a9a7a7]">
                Cacti and succulents thrive in <br /> containers and because
                most are..
              </p>
              <a className="flex items-center gap-1" href="">
                Read More <FaArrowRight />
              </a>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
  <div className="dark:bg-slate-800">
            <img src="https://i.ibb.co/QYzs7qv/04.png" alt="" />
            <div className="py-[10px] pl-[15px]">
              <p className="text-green">September 15 I Read in 2 minutes</p>
              <h3 className="text-[20px]">
                Best Houseplants <br />
                Room by Room
              </h3>
              <p className="text-[#a9a7a7]">
                The benefits of houseplants are <br /> endless. In addition to..
              </p>
              <a className="flex items-center gap-1" href="">
                Read More <FaArrowRight />
              </a>
            </div>
          </div>
            </SwiperSlide>
          </Swiper>
          

         
        
        </div>
      </div>
    </div>
  );
};
