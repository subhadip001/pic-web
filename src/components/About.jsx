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
        <div className='about-disc'>
            <img className='lion' src={lionImg} alt="" />
            <p>Indian Institute of Technology Roorkee (IIT Roorkee) is India's leading institution of higher technical and management education with an excellent track record of it's performance over the last 175 years.</p>
            <img className='lion lion2' src={lionImg} alt="" />
        </div>
        <div className='rankings'>
        {Ranking.map((curr,index)=>{
            return <RankingCard key={index} heading={curr.heading} rank={curr.rank} />
        })}
        </div>
    </div>
    </>
  )
}

export default About