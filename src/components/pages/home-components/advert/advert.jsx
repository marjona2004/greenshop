import { Button } from "../../../common/button/button"


export const Advert = () => {
  return (
    <div className='dark:text-white mt-[146px] mb-[138px]'>
      <div className="container flex items-center gap-[28px]">
        
        <div className="dark:bg-slate-800 bg-[#FBFBFB] flex gap-[5px] items-center">
          <div>
            <img className="w-[260px] h-[280px]" src="https://i.ibb.co/Y3BMNXm/image-7.png" alt="" />
          </div>
          <div className="text-end pr-[10px]">
            <h2 className="text-[20px] mb-[8px]">SUMMER CACTUS <br /> & SUCCULENTS</h2>
            <p className="dark:text-[#a9a7a7]">We are an online plant shop offering a wide <br /> range of cheap and trendy plants.</p>
            {/* <Button>Find More</Button> */}
          </div>
        </div>

        <div className="dark:bg-slate-800 bg-[#FBFBFB] flex gap-[5px] items-center">
          <div>
            <img className="w-[260px] h-[280px]" src="https://i.ibb.co/Msq64Zb/image-2.png" alt="" />
          </div>
          <div className="text-end pr-[10px]">
            <h2 className="text-[20px] mb-[8px]">STYLING TRENDS <br /> & MUCH MORE</h2>
            <p className="dark:text-[#a9a7a7]">We are an online plant shop offering a wide <br /> range of cheap and trendy plants.</p>
            {/* <Button>Find More</Button> */}
          </div>
        </div>

      </div>
    </div>
  )
}
