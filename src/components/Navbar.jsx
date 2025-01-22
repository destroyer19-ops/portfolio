import React, { useState } from 'react'
import logo from '../assets/kevinRushLogo.png'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5';
import {FaSquareXTwitter} from 'react-icons/fa6'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom';
const Navbar = () => {

  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    { name: 'Home', link: '/', category: 'normal' },
    { name: 'About', link: '/about', category: 'normal' },
    { name: 'Projects', link: '/projects', category: 'active' },
    { name: 'Experience', link: '/experience', category: 'normal' },
    { name: 'Contact', link: '/contact', category: 'normal' },
  ];
  const slideInVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };
  return (
    <nav className=' mb-5 flex justify-between py-6 items-center'>
        <div className="flex flex-shrink-0 items-center">
          
          {/* <AiOutlineMenu onClick={() => setMenu(true)}  size={20} className='fill-white text-3xl cursor-pointer md:hidden'/> */}
            {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
        </div>
        <div className='m-8 flex items-center gap-4 justify-center text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>


         {/* Mobile Side Menu */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={slideInVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.section
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className=" bg-black absolute top-0 left-0 w-3/4 h-full p-8 flex flex-col gap-8 z-50"
            >
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="text-white text-3xl cursor-pointer mb-8 self-end"
              />
              {navlinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.link}
                    onClick={() => setMenu(false)}
                    className="font-semibold  px-10  transition"
                  > <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent'>

                    {link.name}
                  </span>
                  </NavLink>
                </motion.div>
              ))}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar