import React from 'react'
import { NavLink } from 'react-router-dom'

const Message = (props) => {
    return (
        <>
            <div className='message-conatiner  w-1/2 max-w-[702px]'>
                <h3 className='heading-mssg'>{props.heading}</h3>
                <div className='message-box flex flex-col items-center'>
                    <div className='max-w-[350px] max-h-[250px] flex justify-center items-center rounded-lg overflow-hidden'>
                        <img className=' max-w-none  rounded-lg overflow-hidden' width={412} height={302} src={props.img} alt="" />
                    </div>
                    <div className='message-content p-12'>
                        <h4 className='message-by text-[22px] 3xl:text-[28px] font-bold text-center'>{props.by}</h4>
                        <p className=' text-sm sm:text-lg md:text-2xl text-justify'>{props?.short_mess}</p>
                        <NavLink to={`message/${props.target}`} className='text-PIC-heading font-bold'>{"Read more >>"}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message