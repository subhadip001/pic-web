import React from 'react'

const AdminComponent = (props) => {
  return (
    <>
      <div className=' w-4/5 px-8 py-10  mb-6 grid grid-cols-1 sm:grid-cols-3  bg-bg-gray mx-auto'>
        {
          props.data.map((curr,index)=>{
            let i = (index+1)%3
            console.log(i)
            return(
              <div key={index} className={` my-3 ${(i===1)?'sm:mr-auto':(i===2)?'sm:mx-auto':'sm:ml-auto'}`}>
              <h4 className=' text-orange  mb-0 text-xl font-bold w-fit'>{curr.name}</h4>
              <p className='  text-sm w-fit'>{curr.position}</p>
              <p className='  text-sm w-fit'>{curr.institute}</p>
                

            </div>
            )
          })
        }
       
      </div>
    </>
  )
}

export default AdminComponent