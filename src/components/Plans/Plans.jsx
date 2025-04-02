import React from 'react';
import './Plans.css';
import {motion} from 'framer-motion'
import PlanCard from './PlanCard';
import PlansItems from '../../assets/PlansItems';

function Plans() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='plans'>
        <div className='container'>
            <motion.h2 
            className='section-title text-capitalize fw-bold mb-4 mb-sm-5 '
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}>
                Our<span className='text-purple'> plans</span>
            </motion.h2>
            <div className='row d-flex align-items-center g-4'>
                {
                    PlansItems.map((item)=> <PlanCard key={item.id}
                    itemClasses={item.itemClasses} itemIcon={item.itemIcon} 
                    itemColor={item.itemColor} itemTitle={item.itemTitle} 
                    itemPrice={item.itemPrice} firstListItem={item.firstListItem} 
                    secondListItem={item.secondListItem} thirdListItem={item.thirdListItem}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Plans