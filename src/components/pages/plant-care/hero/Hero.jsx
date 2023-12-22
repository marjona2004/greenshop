import React from 'react'

export const Hero = () => {
  return (
    <div className='container'>
    <h2 className='mt-[36px] mb-[51px]'><span>Home</span>  / Shop / Shopping Cart </h2>
    <div className='flex justify-between'>
      <p>Products</p>
      <div className='flex gap-[100px]'>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <b>Cart Totals</b>
    </div>
    </div>
  )
}
