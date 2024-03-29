import React, { useState , useEffect} from 'react'
import programsApi from '../Apis/programsApi.js';
import ProgramContainer from '../components/ProgramContainer.jsx';
import Header from '../components/Header.jsx';

const Programs = () => {
    const [activeStep, setActiveStep] = useState(0);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const programs = ["Undergraduate programmes", "Post graduate programmes", "PhD"];
  return (
    <>
    <Header bgOn={true}/>
    <div className=" mb-10">

<h3 className='heading'>Programmes</h3>
<h3 className={`w-4/5 mx-auto text-pic-dark-gray-text mb-10 text-[22px] 3xl:text-[28px] text-justify  px-4   font-sans p-2  `}>We at IIT Roorkee, undertake three programmes - Undergraduate programme, Post graduate programme and PhD.
For more details about academic programmes, kindly visit <a href='https://iitr.ac.in/Academics/Academic%20Programmes.html' target='_blank' className=' font-medium underline '> Academics Programmes IIT Roorkee </a>.
</h3>

<div className="flex justify-center relative">
  <div className="  w-4/5 mx-auto flex justify-between mb-[20px]">

    {programs?.map((program, index) => (
      <div
        key={index}
        className={`flex flex-col flex-1 items-center cursor-pointer  ${index===1 ?' border-l-2 border-r-2 border-PIC-Light-grey-Text':""}`}
        onClick={() => setActiveStep(index)}
      >
        <h3 className={` text-xs sm:text-2xl px-4  font-bold ${activeStep === index ? 'text-PIC-heading' : ' text-PIC-Light-grey-Text'} font-sans p-2  `}>{program}</h3>
        {/* <div className={`w-6 h-6 flex items-center justify-center bg-white relative rounded-full border-2 ${activeStep === index ? 'border-orange' : 'border-PIC-heading'} `}>
          <span className={` w-3 h-3 ${activeStep === index ? 'bg-orange' : 'bg-PIC-heading'}  rounded-full `} />
        </div> */}

      </div>

    ))}
  </div>

</div>
<div className="mt-4 w-4/5 mx-auto">
  <div className=' relative  mx-auto text-[18px] text-justify bg-PIC-light_gray px-10% py-5 rounded-lg pt-[32px] pb-[32px]'>
    { programsApi.map((program, index) => {
      return activeStep === index && <ProgramContainer key={index} program = {program}/>
    })}

 
  </div>
</div>
</div>
    </>
  )
}

export default Programs