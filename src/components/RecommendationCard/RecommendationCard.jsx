import React from 'react'

const RecommendationCard = (props) => {
  return (
    <div className='bg-gray-800 rounded-lg flex items-center justify-center'>
        <p className='text-white text-[15px] p-1 pl-[10px] pr-[10px]'>{props.content}</p>
    </div>
  )
}

export default RecommendationCard