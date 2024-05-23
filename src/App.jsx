import { useState } from 'react'
// import './App.css'
import './style.css'
import Homepage from './pages/Homepage'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import DiscoverPage from './pages/DiscoverPage'
import SinglePokemon from './pages/SinglePokemon'
import ImageLoading from './pages/ImageLoading'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
   
        <Route path='/' element={ <Homepage/>}/>
        <Route path='/signup' element={ <SignupPage/>}/>
        <Route path='/discover' element={ <DiscoverPage/>}/>
        <Route path='/pokemon/:pokid' element={ <SinglePokemon/>}/>
        <Route path='/image' element={ <ImageLoading/>}/>



      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
