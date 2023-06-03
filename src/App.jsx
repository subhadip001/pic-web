import React from 'react'
import Footer from './components/Footer'
import MessageApi from './Apis/MessageApi'
import Message from './components/Message'
import './styles/message.css'
const App = () => {
  return (
    <>
    {MessageApi.map((curr,index)=>{
      return <Message key={index} heading={curr.heading} img = {curr.img} by={curr.by} message={curr.message} />
    })}
    <Footer/>
    </>
  )
}

export default App