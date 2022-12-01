import React from 'react'
import { AiOutlineMail} from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';

const Main = () => {

  const { t } = useTranslation();

  return (
    <motion.div id='main' className='w-full h-screen text-center' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.5}}}>
        <div className='max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center'>
            <div>
                <LazyLoad>
                    <img className='rounded-full w-[220px] md:w-[280px] m-auto' src="../assets/46853653.jfif" alt="avatar" />
                </LazyLoad>
                {/* <p className='uppercase text-sm tracking-widest'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p> */}
                <h1 className='py-4'>{t('Hey_Im_Eugene')}</h1>
                <h2 className='py-1'>{t('Frontend')}</h2>
                <p className='py-4 max-w-[70%] m-auto'>
                    {t(
                        'Main_First_Text'
                    )}
                </p>
                {/* <p className='max-w-[70%] m-auto'>
                    {t(
                        'Main_Second_Text'
                    )}
                </p> */}
                <p className='max-w-[70%] m-auto text-sm'>
                    {t('Site')}
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 px-3'>
                    <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#232f41]'>
                        <FaLinkedinIn />
                    </div>
                    <a href="https://github.com/eugenekartashian" target="_blank" rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#232f41]'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href="https://t.me/eugenekartashian" target="_blank" rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#232f41]'>
                            <FaTelegramPlane />
                        </div>
                    </a>
                    <a href="mailto:e.kartashian@gmail.com">
                        <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#232f41]'>
                            <AiOutlineMail />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Main
