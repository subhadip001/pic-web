import React from 'react'


const RankingCard = (props) => {
  return (
    <div className='ranking-card'>
      
        <div className='Ranks'>
        <h4 className=' font-bold'>Rank</h4>
        <p className='Rank'>{props.rank}</p>
        </div>
        <div className='card-headings'>
            <img src={props.heading} alt={props.name} />
        </div>
    </div>
  )
}

export default RankingCard