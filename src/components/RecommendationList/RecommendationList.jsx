import React from 'react'
import RecommendationCard from '../RecommendationCard/RecommendationCard'
import { useContext } from 'react'
import { suggestionContext } from '../MainSection/MainSection'

const RecommendationList = () => {

  const data = useContext(suggestionContext)

  return (
    <div className='flex gap-3 pl-7'>
        <RecommendationCard content = "All"/>
        <RecommendationCard content = "JavaScript"/>
        <RecommendationCard content = "Live"/>
        <RecommendationCard content = "Data Structures"/>
        <RecommendationCard content = "Gaming"/>
        <RecommendationCard content = "AI"/>
        <RecommendationCard content = "Thoughts"/>
        <RecommendationCard content = "Sales"/>
        <RecommendationCard content = "Gadgets"/>
        <RecommendationCard content = "Laptops"/>
        <RecommendationCard content = "Recently uploaded"/>
        <RecommendationCard content = "Watched"/>
        <RecommendationCard content = "New to you"/>

    </div>
  )
}

export default RecommendationList