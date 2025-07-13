'use client'

import Image from 'next/image'
import { navData } from './data'
import { motion } from 'framer-motion'
import { TfiAlignLeft } from "react-icons/tfi";

const Header = () => {
  return (
    <header className='absolute w-full z-50 transition-all duration-300 py-4 coursor-pointer'>
      <div className='container mx-auto flex items-center justify-between h-16 md:h-20'>

        {/* Logo Name */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.3 }}
            className='flex items-center gap-2'
        >
            <Image
                src={"/logo 1.png"}
                alt="Logo"
                width={80}
                height={30}
            />
            <h2 className='text-2xl'>Portals</h2>
        </motion.div>

        <nav  
            className='hidden lg:flex space-x-8 text-[0.8vw]'
        >
            {navData.map((item, index) => (
                <motion.a key={item.id} href="#" 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
                    className='relative font-normal hover:text-violet-600 transition-colors duration-300 group'
                >
                    {item.title}
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 
                    bg-violet-600 group-hover:w-full transition-all duration-300'></span>
                </motion.a>
            ))}
        </nav>

        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1.6 }}
        >
           <TfiAlignLeft 
            className='text-3xl' 
           />
        </motion.div>
      </div>
    </header>
  )
}

export default Header
