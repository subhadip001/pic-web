import React from 'react'
import MessageApi from '../Apis/MessageApi'
import Message from '../components/Message'
import About from '../components/About'
import '../styles/message.css'
import Recruiters from '../components/Recruiters'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
const Home = () => {
    return (
        <>
            <div className='header  relative mb-20'>
                
                <div className=' w-full h-h-screen+80px top-0 bgeffect z-0 '>
                    <Header bgOn = {false} />
                    <div className='absolute bottom-0 flex justify-center flex-col items-center w-full text-white font-bold tracking-wider'>
                        <p className=' text-3xl' >श्रमं विना न किमपि साध्यम्</p>
                        <div className=' h-10 rotate-180'>
                          <hr className='  block  w-1 bg-orange animate-reverse-height ' />  
                        </div>
                        

                    </div>
                </div>

            </div>

            <About />
            <Gallery />
            {MessageApi.map((curr, index) => {
                return <Message key={index} heading={curr.heading} img={curr.img} by={curr.by} message={curr.message} target={curr.id} />
            })}
            <Recruiters />
        </>
    )
}

export default Home