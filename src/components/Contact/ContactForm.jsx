import React from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import {motion} from 'framer-motion';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function ContactForm() {
  return (
    <motion.form 
    className='contact-form '
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1}}>
        <Form.Group className='mb-3'>
            <Form.Label className='text-capitalize '>
                Full Name
            </Form.Label>
            <Form.Control type='text' className='rounded-0' />

        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label className='text-capitalize '>
                Email Address
            </Form.Label>
            <Form.Control type='email' className='rounded-0' />

        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label className='text-capitalize '>
                Your Message
            </Form.Label>
            <Form.Control className='rounded-0' as='textarea' rows={3} />

        </Form.Group>
        <PurpleBtn btnTitle='submit' />
    </motion.form>
  )
}

export default ContactForm