import React from 'react';
import {motion } from 'framer-motion';
import PurpleBtn from '../PurpleBtn/PurpleBtn';
import AboutImg from '../../assets/images/about.jpg';

function About() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='about'>
        <div className='container'>
            <div className='flex-column-reverse flex-lg-row row'>
                <motion.div
                className='col-lg-6 d-flex justify-content-center'
                initial={{opacity:0,x:-300}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1}}
                >
                    <img src={AboutImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='about us img' /> 
                </motion.div>

                <motion.div
                className='col-lg-6 d-flex flex-column justify-content-center align-items-start'
                initial={{opacity:0,x:350}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1}}
                >
                   <h2 className='section-title text-capitalize fw-bold'>About <span className='text-purple'>us</span></h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis tempore perspiciatis quibusdam dolor quaerat. Eligendi blanditiis enim earum quam.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis tempore perspiciatis quibusdam dolor quaerat. Eligendi blanditiis enim earum quam</p>
                   <PurpleBtn btnTitle='More about us' />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About;