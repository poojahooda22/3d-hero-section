'use client'

import React, {useRef} from 'react'
import Button from './button/Button'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(useGSAP);  

const Hero: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP( () => {
      const ctx = gsap.context(() => {
        const lines = gsap.utils.toArray<HTMLHeadingElement>('.hero-line');
        const sub = gsap.utils.toArray<HTMLParagraphElement>('.hero-sub');
        const btn   = '.hero-btn';

        gsap.set([lines, sub, btn], { y: 100, opacity: 0 }); 

        gsap
          .timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
          .to(lines, { y: 0, opacity: 1, stagger: 0.4 })
            .to(sub, { y: 0, opacity: 1 })
          .to(btn,   { y: 0, opacity: 1 });     
        }, container);

      return () => ctx.revert();
    },
    { scope: container } 
  );


  return (
    <section className='container mx-auto w-full h-screen bg-gradient-to-violet-500 from-violet-800
        to-black flex items-center justify-between relative overflow-hidden'
    >
        {/* left side */}
       <div className='w-full  mt-[1vw]' ref={container} >
            <div className="overflow-hidden">
                <h1 className=' hero-line text-4xl md:text-7xl lg:text-7xl font-bold z-10 mb-2'>
                    Simplifying DeF&apos;s
                </h1>
            </div>
            <div className="overflow-hidden">
                <h1 className=' hero-line text-4xl md:text-7xl lg:text-7xl font-bold z-10 mb-2'>
                    Most Complex
                </h1>
            </div>
            <div className="overflow-hidden">
                <h1 className=' hero-line text-4xl md:text-7xl lg:text-7xl font-bold z-10 mb-2'>
                    Interactions
                </h1>
            </div>
            <div className='overflow-hidden'>
                <p className='hero-sub w-[60%] text-xl font-light'>
                    Powering seamless Zaps and Historical Data APIs, 
                </p>
           </div>
           <div className='overflow-hidden'>
                <p className='hero-sub w-[60%] text-xl font-light'>
                    and AI interactions tomake DeFi simpler and 
                </p>
           </div>
           <div className='overflow-hidden mb-4'>
                <p className='hero-sub w-[60%] text-xl font-light'>
                    enable builders to ship faster.
                </p>
           </div>
           <div className='overflow-hidden '>
                <div className='hero-btn'>
                    <Button/>
                </div>               
           </div>  
       </div>

         {/* right side */}
        <div className='w-full h-full z-0 -mr-[8vw]'>
            <Spline
                scene="https://prod.spline.design/iaU3GDpGxdZpXTtj/scene.splinecode" 
            />
       </div>
    </section>
  )
}

export default Hero
