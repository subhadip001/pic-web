import React from 'react'
import { useParams } from 'react-router-dom'
import message from '../Apis/MessageApi';
import Header from './Header';
const Messagefull = () => {
    const {by} = useParams();
    const data = message.filter(obj=>{
        return obj.id == by
    })
  return (
    <>
    <Header bgOn={true}/>
    <div className=' m-auto w-4/5 mb-14 '>
        <h3 className='heading '>{data[0].heading}</h3>
        <div className='flex flex-wrap pb-14' style={{background:"#F4F8F6"}}>
            <div className='flex flex-col sm:flex-row'>
                    <div className=' object-center'  >
                        <img className=' max-w-sm' width={"558px"} height={"410px"} src={data[0].img} alt="" />
                    </div>
                    <div className=' flex flex-col'>
                        <div className=' h-36 font-bold bg-white pt-14 pl-14'>
                            <h4 className='message-by mb-0 text-xl font-bold'>{data[0].by}</h4>
                            <p className=' text-gray-400 text-xl'>{data[0].position}</p>
                            <p className=' text-gray-400 text-xl'>{data[0].institute}</p>
                        </div>
                        <div className=' px-14 text-justify pt-8 mt-3'>
                           <p className='message block mb-1'>{data[0].message} </p> 
                           <p className=' block font-bold mb-1'>{`"${data[0].thought}"`}</p>
                        </div>
                        
                    </div>
                    </div>
                    {/* <div className='block w-full text-justify px-14'>{data[0].messageFull}</div> */}

                    {data[0].messageFull.split('\n').map((para,index)=>(<p key={index} className='block w-full text-justify px-14 mb-1'>{para}</p>))}
                </div>
    </div>
    </>
    
  )
}

export default Messagefull