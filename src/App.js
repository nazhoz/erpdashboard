import React from 'react'
import CreateJob from './pages/CreateJob'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddClient from './pages/AddClient'


const App = () => {
  return (
    <div className='bg-background w-full h-screen'>
      
      <BrowserRouter>
      <Routes>
        <Route index element={<CreateJob/>}/>
        <Route path='/addclient' element={<AddClient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App