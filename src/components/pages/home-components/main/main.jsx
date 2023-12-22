import superSale from "../../../../icons/Super Sale Banner.png"
import { FaAngleRight } from "react-icons/fa6";
import { Button } from "../../../common/button/button"

export const Main = () => {
    return (
        <div className='dark:text-white'>
            <div className="container flex flex-col gap-[90px]">
                <div className="flex gap-[50px]">
                    <div className="dark:bg-slate-800 bg-[#FBFBFB]">
                        <div className="pt-[14px] pr-[24px] pb-[0px] pl-[18px]">
                            <div className="mb-[36px]">
                                <b className="dark:text-white text-[#3D3D3D] text-[18px] font-[700]">Categories</b>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px] mt-[28px]">
                                    <p>House Plants</p>
                                    <p>(33)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Potter Plants</p>
                                    <p>(12)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Seeds</p>
                                    <p>(65)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Small Plants</p>
                                    <p>(39)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Big Plants</p>
                                    <p>(23)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Succulents</p>
                                    <p>(17)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Trerrariums</p>
                                    <p>(19)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Gardening</p>
                                    <p>(13)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Accessories</p>
                                    <p>(18)</p>
                                </div>
                            </div>
                            <div className="mb-[46px]">
                                <b className="dark:text-white text-[#3D3D3D] text-[18px] font-[700]">Price Range</b> <br />
                                <input className="ml-[18px]  mt-[28px] w-[209px]" type="range" />
                                <p className="ml-[18px] mt-[21px] mb-[16px]">Price: <span>$39 - $1230</span></p>
                                <Button className="ml-[18px]">Filter</Button>
                            </div>
                            <div>
                                <b className="dark:text-white text-[#3D3D3D] text-[18px] font-[700]">Size</b>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px] mt-[28px]">
                                    <p>Small</p>
                                    <p>(119)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Medium</p>
                                    <p>(86)</p>
                                </div>
                                <div className="flex items-center justify-between ml-[18px] dark:color-[#eee] mb-[25px]">
                                    <p>Large</p>
                                    <p>(78)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="w-[310px] h-[400px] bg-white" src={superSale} alt="" />
                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center justify-between mb-[60px]">
                            <div  className="flex items-center gap-[37px]">
                                <p>All Plants</p>
                                <p>New Arrivals</p>
                                <p>Sale</p>
                            </div>
                            <div className="flex items-center justify-end">
                                <b>Short by:</b>
                                <select className="">
                                    <option value="">Default sorting</option>
                                    <option value="">Default sorting2</option>
                                    <option value="">Default sorting3</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-x-[33px] gap-y-[74px]">
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/GR6BT8M/image-1.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/gS7sWT9/product-21-320x320-1.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/Msq64Zb/image-2.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/KXsmYW3/image-9.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/Y3BMNXm/image-7.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/RhWF32b/image-8.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/KXsmYW3/image-9.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/9GGfXX7/product-20-320x320-1.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                            <div className="dark:bg-slate-800">
                                <div>
                                    <img className="w-[258px] h-[300px]" src="https://i.ibb.co/vHt9Lrk/image-10.png" alt="" />
                                </div>
                                <div className="py-[12px]">
                                    <p>Barberton Daisy</p>
                                    <span className="text-green">$119.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex items-center justify-end gap-[10px]">
                    <span className="border-[#eee] border-[1px] flex justify-center items-center w-[35px] h-[35px] cursor-pointer">1</span>
                    <span className="border-[#eee] border-[1px] flex justify-center items-center w-[35px] h-[35px] cursor-pointer">2</span>
                    <span className="border-[#eee] border-[1px] flex justify-center items-center w-[35px] h-[35px] cursor-pointer">3</span>
                    <span className="border-[#eee] border-[1px] flex justify-center items-center w-[35px] h-[35px] cursor-pointer">4</span>
                    <span className="border-[#eee] border-[1px] flex justify-center items-center w-[35px] h-[35px] cursor-pointer">
                        <FaAngleRight />
                    </span>
                </div>

            </div>
        </div>
    )
}
