import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import MainSection from './components/MainSection/MainSection'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex bg-black'>
        <SideBar/>
        <MainSection/>
      </div>
    </>
  )
}

export default App
