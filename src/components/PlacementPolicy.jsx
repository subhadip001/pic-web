import React from 'react'
import Download from './Download.jsx'
import { NavLink, useParams } from 'react-router-dom'
import FormsApi from '../Apis/FormsApi.js'
import Header from './Header.jsx'
const PlacementPolicy = () => {
  const id = "placement-policy";
  const data = FormsApi.filter(form=>{
    return form.id == id
})
  return (
    <>
    <Header bgOn={true}/>
    <div className=' w-4/5 mx-auto mb-20 text-justify'>
        
    <h3 className='heading'>{data[0].heading}</h3>
    <div>
        <p className=' text-[22px] 3xl:text-[28px] '>{data[0].content}</p>
        <Download heading={'Placement Policy format for Companies'} downloadLink = {data[0].downloadLink}/>
        <p className=' text-[22px] 3xl:text-[28px] font-medium  red_hat_text  '>Kindly go through the <NavLink to="/placement" className=" underline underline-offset-2">Placement Procedure</NavLink> for further process or query</p>

    </div>
    </div>  
    </>
  )
}

export default PlacementPolicy