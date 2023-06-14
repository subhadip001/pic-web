import React from 'react'
import DepartmentsApi from '../Apis/DepartmentsApi'
import DepartmentCard from '../components/DepartmentCard'
import Header from '../components/Header'

const Departments = () => {
    return (
        <>
            <Header bgOn={true} />
            <h3 className='heading'>Departments</h3>
            <h3 className={`w-4/5 mx-auto  mb-10 text-sm text-justify sm:text-xl py-4 font-sans  `}>IIT Roorkee is one of the biggest technical institutions in the country having the largest number of academic units. It has 23 academic departments covering engineering, architecture and planning, humanities & social sciences, and management programmes, 1 school, 6 academic centres, 7 academic service centres and 6 supporting units.</h3>
            <div className=' w-4/5 mx-auto grid grid-cols-1  sm:grid-cols-5  gap-4 justify-center sm:justify-normal mb-20'>
                {DepartmentsApi.map((curr, index) => <DepartmentCard key={index} cardData={curr} />)}

            </div>
        </>
    )
}

export default Departments