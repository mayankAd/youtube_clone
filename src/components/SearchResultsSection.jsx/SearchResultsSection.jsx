import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SearchResultsSection = () => {
  return (
    <>
    <div className='bg-blue-900'>SearchResultsSection</div>
    <Outlet/>
    </>
  )
}

export default SearchResultsSection