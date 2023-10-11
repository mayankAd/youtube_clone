import React from 'react'
import { useContext } from 'react'
import { suggestionContext } from '../MainSection/MainSection'

const RecommendationCard = (props) => {
  const data = useContext(suggestionContext)
  return (
    <div onClick={()=>data.setSuggestionValue(props.content)} className='bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-700'>
        <p className='text-white text-[15px] p-1 pl-[10px] pr-[10px]'>{props.content}</p>
    </div>
  )
}

export default RecommendationCard