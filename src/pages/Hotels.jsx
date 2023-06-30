import React from 'react'
import hotel from '../assets/images/hotel.webp'
import Header from '../components/Header'
import Download from '../components/Download'

const Hotels = () => {
  return (
    <>
    <Header bgOn={true}/>
<h3 className='heading'>Hotels</h3>
<dir className="w-4/5 mx-auto  mb-10 max-w-screen-xl text-sm text-justify sm:text-xl py-4 font-sans">
<img src={hotel} alt="infrastructure image" className='object-contain mb-10' />
<Download  downloadLink={""} heading="List of Hotels in Roorkee and Haridwar" className="text-sm" />



</dir>
    </>
  )
}

export default Hotels