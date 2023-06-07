import React from 'react'

const AdminComponent = (props) => {
  return (
    <>
      <div className=' w-4/5 px-8 py-10  mb-6 flex flex-wrap justify-between bg-bg-gray mx-auto'>
        {
          props.data.map((curr,index)=>{
            return(
              <div key={index} className=' my-3 mx-3 w-80 '>
                <div>
              <h4 className=' text-orange  mb-0 text-xl font-bold'>{curr.name}</h4>
              <p className='  text-sm'>{curr.position}</p>
              <p className='  text-sm'>{curr.institute}</p>
                </div>

            </div>
            )
          })
        }
       
      </div>
    </>
  )
}

export default AdminComponent