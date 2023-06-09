import React from 'react'

const DepartmentCard = (props) => {
    console.log(props.cardData.img)
  return (
    <div className=' bg-Department-card-bg p-4 w-56 h-40 flex flex-col justify-center items-center'>
        <div className=' w-16 h-16 p-1'>
        <img className=' object-contain' src={props.cardData.img} alt={props.cardData.name} />

        </div>
        <div className='flex-1 relative w-full'><p className=' w-full absolute bottom-0 text-center'>{props.cardData.name}</p> </div>
           
    </div>
  )
}

export default DepartmentCard