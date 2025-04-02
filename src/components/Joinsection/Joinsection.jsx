import React from 'react';
import './Joinsection.css';
import {motion} from 'framer-motion'
import { Container } from 'react-bootstrap';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function Joinsection() {
  return (
    <div className='join-section py-5 text-light'>
        <Container className ='h-100'>
            <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
                <motion.h2 
                className=' section-title text-capitalize fw-bold  sm:text-[10px]'
                initial={{opacity:0,x:-300}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1}}> 
                    <span className='text-purple'>Shape</span>your body
                </motion.h2>
                <motion.p 
                 className='text-center w-75 '
                 initial={{opacity:0,x:300}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi et quis iste nisi dolore harum soluta consequatur tenetur suscipit. Veniam repellendus est eos cupiditate odio!
                </motion.p>
                <motion.div 
                initial={{opacity:0,x:-200}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1}}
                >
                    <PurpleBtn btnTitle='Join Now'/>
                </motion.div>
            </div>
        </Container>
    </div>
  )
}

export default Joinsection;