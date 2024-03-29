
import React from 'react'

const ProgramContainer = (props) => {   
  return (
    <>
    <h3 className=" text-orange font-semibold mb-[20px]">{props.program.heading}</h3>
    <div className=' pb-5'>
      {props?.program?.disc?.split('\n\n')?.map((curr,index)=>{
       return(
        <> 
    <p className='' key={ index}>{curr}</p>
      
        </>
       ) 
    })} 
    </div>
   
    {props?.program?.content?.map((curr,index)=>{
       return(
        <>  
        <div key={index} className=' border-l-4 pl-4 relative -left-6 mb-8'>
            <h4 className=' font-bold mb-[6px]'>{curr.subHeading}</h4>
            {curr.subContent?.split('\n\n').map((curr,index)=><p key={index}>{curr}</p>)}
            { curr.listHeading && <br/>}
            { curr.listHeading && <h5 className='  mb-[6px]'>{curr.listHeading}</h5>}
            {curr.list?.split('\n\n').map((curr,index)=><li className=' list-inside list-disc' key={index}>{curr}</li>)}
            {curr?.bottomPara?.split('\n\n').map((curr,index)=><p key={index}>{curr}</p>)}
            {/* <p>{curr.bottomPara}</p> */}
        </div>
      
        </>
       ) 
    })}
    </>
  )
}

export default ProgramContainer