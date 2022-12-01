import React from 'react';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';

const Skills = () => {

  const { t } = useTranslation();

  return (
    <motion.div id='skills' className='w-full h-screen p-2 py-16' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.5}}}>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest px-3 uppercase text-[#5651e5]'>
          {t('Skills')}
        </p>
        <h2 className='py-4 px-3'>{t('What_I_Can_Do')}</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <LazyLoad>
                  <img src='../assets/skills/html.png' width='64px' height='64px' alt='/' />
                </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <LazyLoad>
                  <img src='../assets/skills/css.png' width='64px' height='64px' alt='/' />
                </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <LazyLoad>
                <img src='../assets/skills/sass.png' width='64px' height='64px' alt='/' />
              </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SASS (SCSS)</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <LazyLoad>
                 <img src='../assets/skills/javascript.png' width='64px' height='64px' alt='/' />
              </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <LazyLoad>
                <img src='../assets/skills/react.png' width='64px' height='64px' alt='/' />
              </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <LazyLoad>
                <img src='../assets/skills/tailwind.png' width='64px' height='64px' alt='/' />
              </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <LazyLoad>
                <img src='../assets/skills/github1.png' width='64px' height='64px' alt='/' />
              </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <LazyLoad>
                <img src='../assets/skills/nextjs.png' width='64px' height='64px' alt='/' />
              </LazyLoad>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills