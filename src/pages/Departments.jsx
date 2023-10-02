import React,{useEffect} from 'react'
import  { DepartmentsApi, CentresApi, SchoolsApi} from '../Apis/DepartmentsApi.js'
import DepartmentCard from '../components/DepartmentCard.jsx'
import Header from '../components/Header.jsx'

const Departments = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <>
            <Header bgOn={true} />
            <h3 className='heading'>Departments, Centres and School</h3>
            <h3 className={`w-4/5 mx-auto  mb-10 red_hat_text text-justify text-[22px] 3xl:text-[28px] py-4 font-sans  `}>IIT Roorkee is one of the biggest technical institutions in the country having the largest number of academic units. It has 23 academic departments, 7 academic centres and 1 school.</h3>
            <h4 className='  text-[22px] 3xl:text-[28px] text-PIC-heading font-bold w-4/5 m-auto pb-5'>Departments</h4>
            <div className=' w-4/5 mx-auto grid grid-cols-1  sm:grid-cols-5  gap-4 justify-center sm:justify-normal mb-20'>
                {DepartmentsApi.map((curr, index) => <DepartmentCard key={index} cardData={curr} />)}

            </div>
            <h4 className='  text-[22px] 3xl:text-[28px] text-PIC-heading font-bold w-4/5 m-auto pb-5'>Academic Centres</h4>
            <div className=' w-4/5 mx-auto grid grid-cols-1  sm:grid-cols-5  gap-4 justify-center sm:justify-normal mb-20'>
                {CentresApi.map((curr, index) => <DepartmentCard key={index} cardData={curr} />)}
            </div>
            <h4 className='  text-[22px] 3xl:text-[28px] text-PIC-heading font-bold w-4/5 m-auto pb-5'>Schools</h4>
            <div className=' w-4/5 mx-auto grid grid-cols-1  sm:grid-cols-5  gap-4 justify-center sm:justify-normal mb-20'>
                {SchoolsApi.map((curr, index) => <DepartmentCard key={index} cardData={curr} />)}
            </div>
        </>
    )
}

export default Departments