import React from 'react'
import Header from '../components/Header'
import AdminComponent from '../components/AdminComponent'
import arrows from '../assets/arrows.svg'

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
       {/* <div className='w-full mx-auto  py-2 lg:pt-12 overflow-hidden mb-20'>
       <div className='flex flex-wrap'>
       <div className='w-full flex justify-center '>
       <AdminComponent name={admins[0][0].name} position={admins[0][0].position} institute={admins[0][0].institute}/>
       </div>
        <div className='w-full flex justify-center '>
 

        </div>
       </div>
       </div> */}
       <div className=' flex justify-center w-4/5 m-auto'>
       <div className=" w-full max-w-[1150px] flex-col justify-start items-center inline-flex">
  <div className=" w-1/3 h-[180px] p-5 bg-neutral-100 rounded-[10px] flex-col justify-center items-center flex">
    <div className=" text-orange text-[20px] 3xl:text-[24px]  font-bold">Prof. Kamal Kishore Pant</div>
    <div className="text-center text-neutral-800 text-xl font-normal">Director<br/>IIT Roorkee</div>
  </div>
  <div className=" object-fill h-[100px] relative" style={{width:'calc(66.666% + 80px)'}}>
  <img src={arrows} className=' w-full h-full' alt='arrow'/>
  </div>
  <div className=" w-full justify-start items-center inline-flex">
    <div className=" w-1/3 p-5 h-[180px] bg-neutral-100 rounded-[10px] flex-col justify-center items-center inline-flex">
      <div className=" text-orange text-[20px] 3xl:text-[24px]  font-bold">Prof. M. K. Barua</div>
      <div className="text-center text-neutral-800 text-xl font-normal">Dean of Student Welfare<br/>IIT Roorkee</div>
    </div>
    <svg width="40" height="12"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM40 6L30 0.226497V11.7735L40 6ZM9 7H31V5H9V7Z" fill="#203A73"/>
</svg>

    <div className=" w-1/3 p-5 h-[180px] bg-neutral-100 rounded-[10px] flex-col justify-center items-center inline-flex">
      <div className=" text-orange text-[20px] 3xl:text-[24px]  font-bold">Prof. Kaushik Pal</div>
      <div className="text-center text-neutral-800 text-xl font-normal">Professor-in-charge<br/>Placement and Internship Cell</div>
    </div>
    <svg width="40" height="12"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM40 6L30 0.226497V11.7735L40 6ZM9 7H31V5H9V7Z" fill="#203A73"/>
</svg>

    <div className=" w-1/3 p-5 h-[180px] bg-neutral-100 rounded-[10px] flex-col justify-center items-center inline-flex">
      <div className=" text-orange text-[20px] 3xl:text-[24px]  font-bold">Prof. A. K. Sharma</div>
      <div className="text-center text-neutral-800 text-xl font-normal">Dean of Academic Affairs<br/>IIT Roorkee</div>
    </div>
  </div>
  <div className=" object-fill  h-[100px] relative"  style={{width:'calc(66.666% + 80px)'}}>
  <img src={arrows} className=' w-full h-full' alt='arrow'/>
  </div>
  <div className=" w-full justify-start items-center inline-flex">
    <div className=" w-1/3 p-5 h-[180px] bg-neutral-100 rounded-[10px] flex-col justify-center items-center inline-flex">
      <div className=" text-orange text-[20px] 3xl:text-[24px]  font-bold">Faculty-in-charge</div>
      <div className="text-center text-neutral-800 text-xl font-normal">Departments and Centers<br/>IIT Roorkee</div>
    </div>
    <svg width="40" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM40 6L30 0.226497V11.7735L40 6ZM9 7H31V5H9V7Z" fill="#203A73"/>
</svg>

    <div className=" w-1/3 p-5 h-[180px] bg-neutral-100 rounded-[10px] flex-col justify-center items-center inline-flex">
      <div className=" text-orange text-[20px] 3xl:text-[24px]  font-bold">Placement Cell Staff and<br/>Central Placement Team</div>
      <div className="text-center text-neutral-800 text-xl font-normal">Placement and Internship Cell</div>
    </div>
    <svg width="40" height="12"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM40 6L30 0.226497V11.7735L40 6ZM9 7H31V5H9V7Z" fill="#203A73"/>
</svg>

    <div className=" w-1/3 p-5 h-[180px] bg-neutral-100 rounded-[10px] flex-col justify-center items-center inline-flex">
      <div className=" text-orange text-[20px] 3xl:text-[24px]  font-bold text-center">Student Placement Representatives</div>
      <div className="text-center text-neutral-800 text-xl font-normal">Departments and Centers<br/>IIT Roorkee</div>
    </div>
  </div>
</div>
    </div>
    </div>
     </>

  )
}

export default Administration