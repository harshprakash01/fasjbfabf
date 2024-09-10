import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'
import { companies } from '@/data'
import { div } from 'framer-motion/client'

const Clients = () => {
  return (
    <div className='py-20' id="testimonials">
    <h1 className='heading'>
        Academic course work and testimonials
        <div className='text-purple'>  regarding devlopment</div>
    </h1>
    <div className='flex flex-col items-center'>
       <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
       <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'
        />
       </div>
       {/* <div>
        {companies.map(({id, img, name, nameImg})=>(
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                <img src={img} alt={name} className='md:w-10 w-5' />
                <img src={nameImg} alt={name} className='md:w-10 w-5' />
            </div>
        ))}
       </div> */}
        </div>
        </div>
  )
}

export default Clients