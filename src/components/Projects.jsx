import React from 'react';
// import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Projects = () => {

  const { t } = useTranslation();

  return (
    <motion.div id='projects' className='w-full' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.5}}}>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl px-3 tracking-widest text-[#5651e5]'>{t('Projects')}</p>
            <h2 className='py-4 px-3'>{t('What_Ive_Built')}</h2>
            <h2 className='text-center pt-20'>
                    {t('Soon')}
                </h2>
           {/* <div className='grid md:grid-cols-2 gap-8 dark:opacity-80'>

                
                 <ProjectItem 
                    title='Property Finder' 
                    backgroundImg='../assets/projects/property.jpg' 
                    alt='Property Finder'
                    projectUrl='/property'
                    tech='React JS'
                />
                <ProjectItem 
                    title='Crypto App' 
                    backgroundImg='../assets/projects/crypto.jpg'
                    alt='Crypto App'
                    projectUrl='/crypto'
                    tech='React JS'
                />
                <ProjectItem 
                    title='Netflix App' 
                    backgroundImg='../assets/projects/netflix.jpg' 
                    alt='Netflix App'
                    projectUrl='/netflix'
                    tech='React JS'
                />
                <ProjectItem 
                    title='Twitch UI' 
                    backgroundImg='../assets/projects/twitch.jpg'
                    alt='Twitch UI'
                    projectUrl='/twitch'
                    tech='Next JS'
                /> 

            </div>*/}

        </div>
    </motion.div>
  )
}

export default Projects