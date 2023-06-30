import React from 'react'
import { NavLink } from 'react-router-dom'

const Message = (props) => {
    return (
        <>
            <div className='message-conatiner'>
                <h3 className='heading'>{props.heading}</h3>
                <div className='message-box mx-auto'>
                    <div className='message-img object-cover'>
                        <img className=' max-w-none w-full h-full' src={props.img} alt="" />
                    </div>
                    <div className='message-content p-12  '>
                        <h4 className='message-by text-xl font-extrabold'>{props.by}</h4>
                        <p className=' text-sm sm:text-lg md:xl lg:text-2xl text-justify'>{props.message}</p>
                        <NavLink to={`message/${props.target}`} className='text-PIC-heading font-bold'>{"Read more >>"}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message