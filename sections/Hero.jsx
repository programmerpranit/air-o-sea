import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <>
   
    <div className=" flex flex-col my-10  gap-10 p-5">

      <h2 className='text-center font-bold'>A <span className='text-primary'>dynamic organization </span> with High Value and Integrity.</h2>

      <Image src={'/demo.png'} width={300} height={250} alt={'demo'} className={'mx-auto'} />
    </div>
   
   </>
  )
}

export default Hero