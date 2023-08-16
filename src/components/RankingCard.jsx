import React from 'react'


const RankingCard = (props) => {
  return (
    <div className='ranking-card rounded-md px-10'>
      
        <div className='Ranks'>
        <h4 className=' font-bold text-2xl'>Rank</h4>
        <p className='Rank'>{props.rank}</p>
        </div>
        <div className='card-headings'>
            <img src={props.heading} alt={props.name} />
        </div>
    </div>
  )
}

export default RankingCard