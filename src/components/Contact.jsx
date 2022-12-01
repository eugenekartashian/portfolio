import React from 'react';
import { AiOutlineMail} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Contact = () => {

  const { t } = useTranslation();

  return (
    <motion.div id='contact' className='w-full lg:h-screen' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.5}}}>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full h-auto'>
        <p className='text-xl px-3 tracking-widest uppercase text-[#5651e5]'>{t('Contact')}</p>
        <h2 className='py-4 px-3'>{t('Get_In_Touch')}</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left side */}
          <div className='col-span-3 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl p-4'>
            <div className='lg:p-4 h-auto'>
              <div className='dark:opacity-80'>
                <LazyLoad>
                  <img width='100%' className='roundex-xl ' src='../assets/contact.jpg' alt="contact" />
                </LazyLoad>
              </div>
              <div>
                <h2 className='py-2'>{t('EK')}</h2>
                <p>{t('Frontend')}</p>
                <p className='py-4 max-w-sm'>{t('Contact_Text')}</p> 
              </div>
            <div>
              <p className='uppercase pt-8 text-[#5651e5]'>{t('Connect_With_Me')}</p>
              <div className='flex items-center justify-between py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out'>
                  <FaLinkedinIn />
                </div>
                <a href="https://github.com/eugenekartashian" target="_blank" rel="noreferrer">
                  <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out'>
                    <FaGithub />
                  </div>
                </a>
                <a href="https://t.me/eugenekartashian" target="_blank" rel="noreferrer">
                  <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out'>
                    <FaTelegramPlane />
                  </div>
                </a>
                <a href="mailto:e.kartashian@gmail.com">
                  <div className='rounded-full shadow-lg shadow-gray-400/60 dark:shadow-[#131313]/60 p-3 cursor-pointer hover:scale-110 ease-in-out'>
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
          
          {/* right side */}
          <div className='col-span-3 w-full h-auto rounded-lg shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 roundex-xl lg:p-4'>
            <div className='p-4'>

              <form action='https://getform.io/f/d0671ae2-b472-48a8-93e3-6cadb07483e3' method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>{t('Form_Name')}</label>
                    <input className='border-2 rounded-lg p-2 flex border-none dark:opacity-90 focus:outline-none focus:ring focus:border-[#131313]' type='text' name='name' placeholder={t('Form_Name')} autoComplete='off' required />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>{t('Form_Phone')}</label>
                    <input className='border-2 rounded-lg p-2 flex border-none dark:opacity-90 focus:outline-none focus:ring focus:border-[#131313]' pattern="[0-9]{10}" maxLength="10" type='text' name='phone' placeholder={t('Form_Phone')} autoComplete='off' required />
                  </div>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>{t('Form_Email')}</label>
                  <input className='border-2 rounded-lg p-2 flex border-none dark:opacity-90 focus:outline-none focus:ring focus:border-[#131313]' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" name='email' placeholder={t('Form_Email')} autoComplete='off' required />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>{t('Form_Message')}</label>
                  <textarea className='border-2 rounded-lg p-3 border-none dark:opacity-90 focus:outline-none focus:ring focus:border-[#131313]' name='message' rows='6' required></textarea>
                </div>
                <button className='w-full p-4 mt-4'>{t('Form_Button')}</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact