import React from 'react';
import './Trainsection.css';
import Container from 'react-bootstrap/Container';
import {motion} from 'framer-motion';

function Trainsection() {
  return (
    <div className='train-section position-relative py-5 '>
        <motion.div
         className='bg-shape position-absolute'
         initial={{opacity:0,x:-300}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:1}}
        >
            
        </motion.div>
        <Container>
            <div className='row'>
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-capitalize fw-bold abc'>
                        Let's train together
                    </h2>
                    <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde maxime error repudiandae distinctio perspiciatis non voluptatem, cupiditate vitae fugit architecto pariatur laborum debitis eaque ab.</p>
                    <div className='d-flex'>
                    <h5 className='text-capitalize fw-semibold text-nowrap gh'>Call us:</h5>
                    <a href='./' className='mx-2 text-decoration-none h5' ></a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Trainsection;