import React from 'react'
import Footer from '../components/Footer'
import MessageApi from '../Apis/MessageApi'
import Message from '../components/Message'
import About from '../components/About'
import '../styles/message.css'
import Recruiters from '../components/Recruiters'
import Header from '../components/Header'
import Gallery from '../components/gallery'
const Home = () => {
    return (
        <>
            <div className='header h-screen relative mb-20'>
                <div className=' w-screen h-screen top-0 bgeffect z-0 '>
                    <Header bgOn = {false} />
                    <div className='absolute bottom-0 flex justify-center flex-col items-center w-full text-white font-bold tracking-wider'>
                        <p  >श्रमं विना न किमपि साध्यम्</p>
                        <hr className='  block h-5 w-0.5 bg-orange-600' />

                    </div>
                </div>

            </div>

            <About />
            <Gallery />
            {MessageApi.map((curr, index) => {
                return <Message key={index} heading={curr.heading} img={curr.img} by={curr.by} message={curr.message} />
            })}
            <Recruiters />
            <Footer />
        </>
    )
}

export default Home