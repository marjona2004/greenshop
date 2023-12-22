import { NavLink } from "react-router-dom";
import { Button } from '../../common/button/button'
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import logo from "../../../icons/Logo.svg"
import logout from "../../../icons/Logout.svg"

const pages = [
  {
    name: "Home",
    id: "1",
    adres: "/",
  },
  {
    name: "Shop",
    id: "2",
    adres: "/shop",
  },
  {
    name: "Plant Care",
    id: "3",
    adres: "/plantCare",
  },
  {
    name: "Blogs",
    id: "4",
    adres: "/blogs",
  },
];

export const Navbar = () => {

  return (
    <div className='dark:text-white max-mobile:fixed max-mobile:top-0 max-mobile:z-20 max-mobile:bg-white max-mobile:w-[100%] max-mobile:shadow-[0px_5px_28px_5px_#495567]'>
      <div className="container flex max-mobile:hidden items-center justify-between border-solid border-b-[0.3px] border-[#46A358] pt-[10px]">

        <img src={logo} alt="" />

        <ul className="flex items-center gap-8 py-[30px]">
          {
            pages.map((page) => {
              return (
                <li key={page.id}>
                  <NavLink to={page.adres} className="text-[16px] font-[700] mt-[30px] focus:font-[400] border-solid focus:border-b-green focus:border-b-[3px] py-[30px]" >
                      {(page.name)}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>

        <div className='flex gap-[25px] items-center'>
          <IoSearch className='text-[20px]' />
          <BsCart3 className='text-[20px]' />
          <Button><img src={logout} alt="" />Login</Button>
        </div>

      </div>
      
    </div>
  )
}
