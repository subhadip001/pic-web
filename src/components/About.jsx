import React from 'react'
import '../styles/about.css'
import RankingCard from './RankingCard'
import Ranking from '../Apis/Ranking'
import lionImg from "../assets/images/about1.png"
const About = () => {
  return (
    <>
    <div className='conatiner about'>
        <h3 className='heading'>About us</h3>
        <div className='about-disc flex-wrap sm:flex-nowrap justify-center text-xl'>
            <img className='lion' src={lionImg} alt="" />
            <p className='text-[20px] 3xl:text-[28px]'>Indian Institute of Technology Roorkee (IIT Roorkee) is India's leading institution of higher technical and management education with an excellent track record of it's performance over the last <span className=' text-orange font-bold'>175</span>  years.</p>
            <img className='lion lion2' src={lionImg} alt="" />
        </div>
        <div className='rankings flex-wrap mt-[60px]'>
        {Ranking.map((curr,index)=>{
            return <RankingCard key={index} heading={curr.heading} rank={curr.rank} />
        })}
        </div>
    </div>
    </>
  )
}

export default About