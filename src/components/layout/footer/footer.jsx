import logo from "../../../icons/Logo.svg"
import letter1 from "../../../icons/letter1.png"
import letter2 from "../../../icons/letter2.png"
import letter3 from "../../../icons/letter3.png"
import accept from "../../../icons/accept.png"

import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiCameraFill } from "react-icons/pi";
import { Button } from "../../common/button/button"

export const Footer = () => {
  return (
    <div className='dark:text-white'>
      <div className="container">
        <div className="dark:bg-slate-800 flex items-center justify-between pt-[37px] pb-[24px] px-[24px]">
          <div>
            <img src="https://i.ibb.co/VpWV0gw/Group-36212.png" alt="" />
            <b className="text-[18px]">Garden Care</b>
            <p className="text-[#bab8b8]">
              We are an online plant
              shop <br /> offering a
              wide range of cheap <br />
              and trendy plants.
            </p>
          </div>
          <div>
            <img src="https://i.ibb.co/mbr4PGj/Group-36213.png" alt="" />
            <b className="text-[18px]">Plant Renovation</b>
            <p className="text-[#bab8b8]">
              We are an online plant
              shop <br /> offering a
              wide range of cheap <br />
              and trendy plants.
            </p>
          </div>
          <div>
            <img src="https://i.ibb.co/ZhxqcB8/Group-36214.png" alt="" />
            <b className="text-[18px]">Watering Graden</b>
            <p className="text-[#bab8b8]">
              We are an online plant
              shop <br /> offering a
              wide range of cheap <br />
              and trendy plants.
            </p>
          </div>
          <div>
            <b className="text-[18px]">Would you like to join newsletters?</b>
            <div className="my-[17px] bg-white w-[354px] flex justify-between rounded border-2 pl-[5px]">
              <input className="w-100" type="text" placeholder='enter your email address...' />
             <Button customStyle="rounded-r-lg ">Join</Button>
            </div>
            <p className="text-[#bab8b8]">
              We usually post offers
              and challenges in newsletter.
              We’re <br /> your online houseplant
              destination. We offer a wide
              range <br /> of houseplants and
              accessories shipped directly
              from our <br /> (green)house to yours!
            </p>
          </div>
        </div>
        <div className="bg-[#48634d] flex items-center justify-between pt-[25px] pb-[19px] pl-[23px] pr-[40px] border-y-[0.3px] border-[#24532d]">
          <img src={logo} alt="" />
          <div className="flex items-center gap-[10px]">
            <CiLocationOn className="text-[22px]" />
            <p>70 West Buckingham Ave. <br />
              Farmingdale, NY 11735</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <MdOutlineEmail className="text-[22px]" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FiPhoneCall className="text-[22px]" />
            <p>+88 01911 717 490</p>
          </div>
        </div>
        <div className="dark:bg-slate-800 flex items-start gap-[160px] py-[33px] pl-[23px] border-b-[0.3px] border-[#24532d]">
          <div>
            <p className="mb-[20px]">My Account</p>
            <img src={letter1} alt="" />
          </div>
          <div>
            <p className="mb-[20px]">Help & Guide</p>
            <img src={letter2} alt="" />
          </div>
          <div>
            <p className="mb-[20px]">Categories</p>
            <img src={letter3} alt="" />
          </div>
          <div>
            <p className="mb-[20px]">Social Media</p>
            <div className="mt-[20px] mb-[33px] flex items-center gap-[10px]">
              <span className="flex justify-center items-center w-[30px] h-[30px] text-green border-[1px] border-green rounded">
                <FaFacebookF />
              </span>
              <span className="flex justify-center items-center w-[30px] h-[30px] text-green border-[1px] border-green rounded">
                <FaInstagram />
              </span>
              <span className="flex justify-center items-center w-[30px] h-[30px] text-green border-[1px] border-green rounded">
                <FaTwitter />
              </span>
              <span className="flex justify-center items-center w-[30px] h-[30px] text-green border-[1px] border-green rounded">
                <FaLinkedinIn />
              </span>
              <span className="flex justify-center items-center w-[30px] h-[30px] text-green border-[1px] border-green rounded">
                <PiCameraFill />
              </span>
            </div>
            <p className="mb-[15px]">We accept</p>
            <img src={accept} alt="" />
          </div>
        </div>
        <p className="text-center text-[#919090] py-[5px]">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </div>
  )
}
