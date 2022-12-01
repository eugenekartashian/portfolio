import React, { useState, useEffect } from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn, FaTelegramPlane} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Header = () => {
    
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    // THEME CHANGER START
    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }, []);
  
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme])

    const themeSwitcher = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    // THEME CHANGER END

    const toggleNav = () => {
        setNav(!nav);
    }

    // NAV BORDER WHEN SCROLL START
    useEffect(() => {
        const handleShadow = () => setShadow(window.scrollY >= 80);
        // const handleShadow = () => {
        //     if ( window.scrollY >= 80) {
        //         setShadow(true);
        //     } else {
        //         setShadow(false);
        //     }
        // }
        window.addEventListener('scroll', handleShadow);
        return () => window.removeEventListener('scroll', handleShadow);
    },[])
    // NAV BORDER WHEN SCROLL END

    // LANGUAGE CHANGER START
    const [language, setLanguage] = useState('id');
    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        const lng = e.target.value;
        setLanguage(lng);
        i18n.changeLanguage(lng);
    };
    // LANGUAGE CHANGER END


  return (
    <div className={shadow ? 'fixed w-full h-[60px] bg-[#ecf0f3] dark:bg-[#1f2937] shadow-lg z-[1000]' : 'fixed w-full h-[60px] z-[1000]'} >
        <div className='md:justify-center flex justify-end items-center w-full h-full px-2 2xl:px-16 relative right-3'>
            <div>
                <ul className='hidden md:flex font-medium'>

                        <Link to='/main'>
                            <li className='ml-10 text-sm uppercase hover:underline duration-500'>{t('Home')}</li>
                        </Link>
                        <Link to='/about'>
                            <li className='ml-10 text-sm uppercase hover:underline duration-500'>{t('About')}</li>
                        </Link>
                        <Link to='/skills'>
                            <li className='ml-10 text-sm uppercase hover:underline duration-500'>{t('Skills')}</li>
                        </Link>
                        <Link to='/projects'>
                            <li className='ml-10 text-sm uppercase hover:underline duration-500'>{t('Projects')}</li>
                        </Link>
                        <Link to='/contact'>
                            <li className='ml-10 text-sm uppercase hover:underline duration-500'>{t('Contact')}</li>
                        </Link>
                        <li className='ml-10 text-sm uppercase duration-500' onClick={themeSwitcher}>{theme === 'dark' ? '🌙' : '🌞'}</li>
                        <li className='ml-10 text-sm uppercase duration-500'>
                            <select onChange={changeLanguage} value={language}>
                                <option className='ml-2' value='en'>EN</option>
                                <option className='ml-2' value='ua'>UA</option>
                            </select>
                        </li>

                </ul>
                <div onClick={toggleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} >
            <div className={
                nav 
                ? 'fixed right-0 top-0 w-[60%] sm:w-[45%] md:w-[30%] h-screen bg-[#ecf0f3] dark:bg-[#0e0e0e] p-5 ease-in-out duration-500' 
                : 'fixed right-[-120%] top-0 p-5 ease-in duration-500'
                }
            >
                <div>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={toggleNav} className='absolute top-3 right-3 p-2 cursor-pointer color:#1f2937'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>
                            {t('Mob_Menu_Text')}
                        </p>
                        <div className='flex justify-start p-2'>
                        <div onClick={themeSwitcher}>{theme === 'dark' ? '🌙' : '🌞'}</div>
                        <select className='ml-4' onChange={changeLanguage} value={language}>
                            <option className='ml-2' value='en'>EN</option>
                            <option className='ml-2' value='ua'>UA</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        
                        <Link to='/main'>
                            <li className='py-4 text-sm hover:underline duration-500' onClick={toggleNav}>{t('Home')}</li>
                        </Link>
                        <Link to='/about'>
                            <li className='py-4 text-sm hover:underline duration-500' onClick={toggleNav}>{t('About')}</li>
                        </Link>
                        <Link to='/skills'>
                            <li className='py-4 text-sm hover:underline duration-500' onClick={toggleNav}>{t('Skills')}</li>
                        </Link>
                            <Link to='/projects'>
                            <li className='py-4 text-sm hover:underline duration-500' onClick={toggleNav}>{t('Projects')}</li>
                        </Link>
                        <Link to='/contact'>
                            <li className='py-4 text-sm hover:underline duration-500' onClick={toggleNav}>{t('Contact')}</li>
                        </Link>
                        
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>{t('Find_Me_Here')}</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#181818]'>
                                <FaLinkedinIn />
                            </div>
                            <a href="https://github.com/eugenekartashian" target="_blank" rel="noreferrer">
                                <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#181818]'>
                                    <FaGithub />
                                </div>
                            </a>
                            <a href="https://t.me/eugenekartashian" target="_blank" rel="noreferrer">
                                <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#181818]'>
                                    <FaTelegramPlane />
                                </div>
                            </a>
                            <a href="mailto:e.kartashian@gmail.com">
                                <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-110 ease-in-out dark:bg-[#181818]'>
                                    <AiOutlineMail />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header