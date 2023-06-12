import React from 'react'
import Header from '../components/Header'
import map from '../assets/images/map.png'
import haridwar from '../assets/images/haridwar.png'
const howToContent = [
    {
        heading:"By Airways",
        text:"Nearest airport to Roorkee is Dehradun's Jolly Grant airport from where Roorkee can be reached by cab. But most preferable airport is the New Delhi International Airport which is about 180 kilometres away."
    },
    {
        heading:'By Railways',
        text:'Easiest way to get to Roorkee is by train. There are several trains serving Roorkee daily from various cities around. The high speed trains Shatabdi and Jan Shatabti also stop at Roorkee on their route Delhi - Dehradun. By train, it takes less than 3 hours and 30 minutes to reach Roorkee from Delhi, so it is the fastest and most economical way of travel.'
    },
    {
        heading:'By Roadways',
        text:`Travelling north from Delhi, Roorkee is around 170 km away. Take the NH58 highway, which runs through Roorkee. Haridwar is roughly 29 km from Roorkee on the same route. Roorkee's central bus terminal is located on NH58.`
    },
]

const HowToReach = () => {
  return (
    <>
     <Header bgOn={true}/>
<h3 className='heading'>How to Reach</h3>
<div className=' w-4/5 mx-auto'>
    <div className=' flex gap-4 flex-wrap md:flex-nowrap mb-10'>
        <div className=' object-contain flex-1 min-w-300px'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.9444276080676!2d77.89370827542852!3d29.865876475013955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe37a7%3A0xa9d19b15af050467!2sIndian%20Institute%20Of%20Technology%E2%80%93Roorkee%20(IIT%E2%80%93Roorkee)!5e0!3m2!1sen!2suk!4v1686592612448!5m2!1sen!2suk" width="100%" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
       
        <div className=' w-full md:w-1/2  min-w-300px'>
        {howToContent.map((curr,index)=>{
            return(
                <div key={index} className='mb-5'>
                    <h4 className=' text-PIC-heading font-bold'>{curr.heading}</h4>
                    <p className=' text-xs sm:text-base text-justify'>{curr.text}</p>
                </div>
            )
        })}
        </div>
    </div>
    <div className=' flex gap-4 flex-wrap md:flex-nowrap mb-10 rounded-xl bg-PIC-light_gray p-5'>
        <div className=' object-contain min-w-300px'>
           <img src={haridwar} alt='iitr location' />  
        </div>
       
        <div className=' w-full md:w-1/2 min-w-300px'>

     <h3 className=' text-2xl text-PIC-heading font-bold' >Roorkee</h3>
     <h4 className=' text-sm text-orange font-bold mb-5'>Uttarakhand</h4>
     <p className=' text-justify text-xs sm:text-base'>
     Roorkee, a charming town nestled in the foothills of the majestic Himalayas, is a historic and culturally rich destination in the northern state of Uttarakhand, India. Situated on the banks of the holy Ganges River, Roorkee is renowned for its contributions to engineering, education, and the development of the country's infrastructure. With a captivating blend of tradition and modernity, this vibrant town captivates visitors with its picturesque landscapes, architectural marvels, and a warm, welcoming atmosphere. Whether exploring its educational institutions, indulging in adventure sports, or simply basking in the serene natural beauty, Roorkee offers a delightful experience for all who visit.
     </p>
     <div className=' flex justify-between gap-4 pt-10 font-bold scale-70 sm:scale-100'>
        <p>Weather: Partly cloudy</p>
        <p className=' flex-1 border-PIC-Light-grey-Text border-x-2 text-center'>Min. Temp: 20°C</p>
        <p>Max. Temp: 23°C</p>
     </div>
        </div>
    </div>
</div>
    </>
  )
}

export default HowToReach