import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation();

  return (
    <motion.div id='about' className='w-full md:h-screen p-2 flex items-center py-16' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.5}}}>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl px-3 tracking-widest text-[#5651e5]'>{t('About')}</p>
                <h2 className='py-4 px-3'>{t('Who_I_Am')}</h2>
                <p className='py-2 px-3'>
                    {t('About_First_Text')}
                </p>
                <p className='py-2 px-3'>
                    {t('About_Second_Text')}
                </p>
                    <p className='py-2 px-3 underline cursor-pointer'>
                        <Link to='/projects'>{t('Check_Projects')}</Link>
                    </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in-out duration-500 cursor-pointer'>
                <LazyLoad>
                    <img src="../assets/about.jpg" className='rounded-xl' alt="about" />
                </LazyLoad>
            </div>
        </div>
    </motion.div>
  )
}

export default About