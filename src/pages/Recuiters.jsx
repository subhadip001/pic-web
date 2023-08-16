import React from 'react'
import RecuitersApi from '../Apis/RecuitersApi'
import Header from '../components/Header'
import Recruiters from '../components/Recruiters'

const RecuitersPage= () => {
  return (
    <>
    <Header bgOn={true}/>
    {/* <h3 className="heading">Our Recruiters</h3>
 
  <div className=" w-4/5 mx-auto  mb-20 text-xs  sm:text-sm py-4 font-sans ">
    
      {RecuitersApi.map((curr, index) => {
        return <div key={index} className={`column-content pb-5 mb-5  ${RecuitersApi.length !== index+1 ? 'border-b-2 border-dashed':'' }`}>
       {  curr.map((company, i) => ( <div key={i}> {company}</div>))}
    </div>

      })}
  </div> */}
  <div className=' mb-20'>
      <Recruiters/>
  </div>

    </>
  )
}

export default RecuitersPage