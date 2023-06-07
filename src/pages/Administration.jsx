import React from 'react'
import Header from '../components/Header'
import AdminComponent from '../components/adminComponent'

const admins = [
 [{
  name:"Prof. Kamal Kishore Pant",
  position:"Director",
  institute:"IIT Roorkee"
 }],
 [
  {
    name:"Prof. M. K. Barua",
    position:"Dean of Student Welfare",
    institute:"IIT Roorkee"
  },
  {
    name:"Prof. Kaushik Pal",
    position:"Professor-in-charge",
    institute :"Placement and Internship Cell"
  },
  {
    name:"Prof. A. K. Sharma",
    position:"Dean of Academic Affairs",
    institute :"IIT Roorkee"
  },
 ],
 [
  {
    name:"Placement Staff",
    position:"",
    institute :"Placement and Internship Cell"
  }, {
    name:"Placement Team",
    position:"",
    institute :"Placement and Internship Cell"
  }, {
    name:"Faculty-in-charge",
    position:"Departments",
    institute :"IIT Roorkee"
  }, {
    name:"Placement Representatives",
    position:"Departments",
    institute :"IIT Roorkee"
  },
 ]
]
const Administration = () => {
  return (
    <>
    <Header bgOn={true}/>
    <div className=' mb-20'>
       <h3 className='heading'>Administration</h3>
    {admins.map((curr,index)=>{
      return <AdminComponent key={index} data = {curr}/>
    })}
    </div>
   
     </>

  )
}

export default Administration