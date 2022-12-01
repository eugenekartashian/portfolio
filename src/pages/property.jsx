import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Property = () => {

  const { t } = useTranslation();

  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/30 z-10' />
            {/* <img className='absolute z-1' layout='fill' src='../assets/projects/property.jpg' alt='/' /> */}
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]z-10 p-2'>
               <h2 className='py-2'>Property Finder</h2> 
               <h3>React JS / Tailwind / Firebase</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>{t('Project')}</p>
                <h2>{t('Overview')}</h2>
                <p className='p-2'>
                  {t('Property_Project_Text')}
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>{t('Demo')}</button>
                <button className='px-8 py-2 mt-4'>{t('Code')}</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-[#131313] rounded-xl p-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>{t('Technologies')}</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> React</p>
                  <p className='py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Tailwind</p>
                  <p className='py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Javascript</p>
                  <p className='py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Firebase</p>
                  <p className='py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Google API</p>
                  <p className='py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Zillow API</p>
                </div>
              </div>
            </div>
            <Link to='/projects'>
              <p className='underline cursor-pointer'>{t('Back')}</p>
            </Link>
        </div>

    </div>
  )
}

export default Property