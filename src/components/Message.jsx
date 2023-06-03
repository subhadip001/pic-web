import React from 'react'

const Message = (props) => {
    return (
        <>
            <div className='message-conatiner'>
                <h3 className='message-heading'>{props.heading}</h3>
                <div className='message-box'>
                    <div className='message-img'>
                        <img src={props.img} alt="" />
                    </div>
                    <div className='message-content'>
                        <h4 className='message-by'>{props.by}</h4>
                        <p className='message'>{props.message}</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message