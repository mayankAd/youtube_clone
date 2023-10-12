import React, { useContext, useEffect, useState } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import { suggestionContext } from '../MainSection/MainSection'







const LandingVideosSection = () => {

  const val = useContext(suggestionContext)

  const [data, setData] = useState()

  async function fetchData(){
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${val.suggestionValue}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      const filteredData = result.items.filter(item=>{
        return item.snippet.thumbnails.high.url!= null
      })
      setData(filteredData)
      
      
    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(()=>{
    fetchData();
    console.log()
  },[val.suggestionValue])

  useEffect(()=>{
    fetchData();
  },[])

  return (
    
    <div className='bg-black flex flex-wrap gap-5 pl-6 pt-9 justify-center'>
      {
        data?.map((dat)=>{
          {
            return(
              <div key={dat.id.videoId}>
              <VideoCard image = {dat.snippet.thumbnails.high.url} title = {dat.snippet.title} channelTitle = {dat.snippet.channelTitle} videoLinkId = {dat.id.videoId}/>
              </div>
            )
          }
        })
      }
    
    </div>
    
  )
}

export default LandingVideosSection