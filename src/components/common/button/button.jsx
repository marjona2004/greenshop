export const Button = ({ children,customStyle }) => {
  return (
    <button className={`${customStyle} flex gap-[5px] items-center bg-[green]  text-white text-[15px] font-[500] py-[8px] px-[17px] rounded `}>{(children)}</button>
  )
}
