import React from 'react';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';

const ProjectItem = ({ title, backgroundImg, alt, tech, projectUrl }) => {
  
  const { t } = useTranslation();

  return (
    <div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400/60 dark:shadow-[#131313]/60 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] dark:hover:bg-gradient-to-r dark:from-[#131313] dark:to-[#131313]'>
          <LazyLoad>
            <img className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt={alt} />
          </LazyLoad>
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white dark:text-[#98b2d3] trackinh-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white dark:text-[#98b2d3] text-center'>{tech}</p>
                    <p className='text-center p-3 rounded-lg bg-white dark:bg-black/80 dark:text-[#98b2d3] text-gray-700 font-bold text-lg cursor-pointer w-[150px]'>
                        <Link to={projectUrl}>{t('More_Info')}</Link>
                    </p>
                </div>
        </div>
    </div>
  )
}

export default ProjectItem