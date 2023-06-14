import React from 'react'

const DepartmentCard = (props) => {
  return (
<div className="bg-Department-card-bg p-4 h-full flex flex-col justify-center items-center">
  <div className="w-16 p-1">
    <img className="object-contain" src={props.cardData.img} alt={props.cardData.name} />
  </div>
  <div className="flex-1 w-full flex flex-col-reverse">
    <p className="w-full text-center ">{props.cardData.name}</p>
  </div>
</div>

  )
}

export default DepartmentCard