import React from 'react'
import Download from './Download'
import { NavLink, useParams } from 'react-router-dom'
import FormsApi from '../Apis/FormsApi'
import Header from './Header'
const FormComponent = () => {
    const {id} = useParams()
    const data = FormsApi.filter(form=>{
        return form.id == id
    })
  return (
    <>
    <Header bgOn={true}/>
    <div className=' w-4/5 mx-auto mb-20 text-justify'>
        
    <h3 className='heading'>{data[0].heading}</h3>
    <div>
        <p className=' text-xs sm:text-2xl font-extralight'>{data[0].content}</p>
        <Download heading={data[0].heading} downloadLink = {data[0].downloadLink}/>
        <p className=' text-xs sm:text-2xl font-medium'>Kindly go through the <NavLink to="/placement" className=" underline underline-offset-2">Placement Procedure</NavLink> for further process or query</p>

    </div>
    </div>  
    </>
  )
}

export default FormComponent