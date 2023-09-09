import React from 'react'
import Header from '../components/Header.jsx'
import ProgramContainer from '../components/ProgramContainer.jsx'
import faqApi from '../Apis/FaqApi.js'

const Faq = () => {
  return (
    <>
     <Header bgOn={true}/>
<h3 className='heading'>Frequently Asked Questions</h3>
<h3 className={`w-4/5 mx-auto  mb-10 text-sm text-justify sm:text-xl py-4 font-sans  `}>Below are the answers to some of the frequently asked questions:</h3>

<div className='mb-20 w-4/5 relative  mx-auto text-justify bg-PIC-light_gray px-5% pb-[2rem] pt-[1.5rem] rounded-lg'>
    <ProgramContainer program = {faqApi[0]}/>
</div>

    </>
  )
}

export default Faq