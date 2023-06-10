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
            <div className='header h-screen relative mb-20'>
                
                <div className=' w-full h-screen top-0 bgeffect z-0 '>
                    <Header bgOn = {false} />
                    <div className='absolute bottom-0 flex justify-center flex-col items-center w-full text-white font-bold tracking-wider'>
                        <p className=' text-3xl' >श्रमं विना न किमपि साध्यम्</p>
                        <hr className='  block h-8 w-1 bg-orange' />

                    </div>
                </div>

            </div>

            <About />
            <Gallery />
            {MessageApi.map((curr, index) => {
                console.log(curr.id)
                return <Message key={index} heading={curr.heading} img={curr.img} by={curr.by} message={curr.message} target={curr.id} />
            })}
            <Recruiters />
        </>
    )
}

export default Home