import React from 'react'
import Header from '../components/Header'
import gh1 from '../assets/images/gh1.webp'
import gh2 from '../assets/images/gh2.webp'
import gh3 from '../assets/images/gh3.webp'
import gh4 from '../assets/images/gh4.webp'
import Carousel from '../components/Carousel'

const GuestHouseCard = [
    {
        text:"N.C. Nigam Visitor`s Hostel"
    },
    {
        text:"Khosla International House (KIH)"
    },
    {
        text:"Trainee Officers Hostel (TOH)"
    },
    {
        text:"Community Center `(CC)"
    },
 

 
]
const images = [ gh1,gh2,gh3,gh4]

const GuestHouse = () => {
  return (
    <>
    <Header bgOn={true}/>
<h3 className='heading'>Institute Guest House</h3>
<dir className="w-4/5 mx-auto  mb-10 text-sm text-justify sm:text-xl py-4 font-sans">
{/* <img src={guestHouse} alt="infrastructure image" className='object-contain mb-10' /> */}
<div className=' sm:mb-5'>
  <Carousel images={images} interval={3000} />  
</div>


<div className=' flex gap-4 justify-center flex-wrap sm:flex-nowrap'>
   {GuestHouseCard.map((curr,index)=>{
 return<div key={index} className=' bg-Department-card-bg rounded-xl p-4 flex-1 sm:w-56 h-40 flex flex-col justify-center items-center'>
<p className=' text-sm text-center'>{curr.text}</p>
</div>
})} 
</div>
<p className='w-full mt-3 font-semibold' >For further details, kindly visit <a href="https://ghbooking.iitr.ac.in/">https://ghbooking.iitr.ac.in/</a> .</p>


</dir>
    </>
  )
}

export default GuestHouse