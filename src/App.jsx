import { useState } from 'react'
// import './App.css'
import './style.css'
import Homepage from './pages/Homepage'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import DiscoverPage from './pages/DiscoverPage'
import SinglePokemon from './pages/SinglePokemon'
import ImageLoading from './pages/ImageLoading'
import FlyoutMenu from './context/contextComponent/FlyoutMenu'
import Bear from './zustand/Bear'
import ProductCard from './context/ProductCard'
import Product from './context/Product'
import Autocomplete from './pages/Autocomplete'
import AutoMenu from './context/contextComponent/AutoComponent/AutoMenu'
import InputPage from './pages/InputPage'
import Ref from './pages/Ref'
import AutocompleteMenu from './pages/MyAutocomplete/AutocompleteMenu'
import { useForm } from 'react-hook-form'
import Board from './pages/Tictactoe/Board'

function App() {
  const {control,name}=useForm();

  return (
    <>
    <BrowserRouter>
      <Routes>
   
        <Route path='/' element={ <Homepage/>}/>
        <Route path='/signup' element={ <SignupPage/>}/>
        <Route path='/discover' element={ <DiscoverPage/>}/>
        <Route path='/pokemon/:pokid' element={ <SinglePokemon/>}/>
        <Route path='/image' element={ <ImageLoading/>}/>
        <Route path='/flyout' element={ <FlyoutMenu/>}/>
        <Route path='/autocomplete' element={ <Autocomplete/>}/>
        <Route path='/bear' element={ <Bear/>}/>
        <Route path='/product' element={ <Product/>}/>
        <Route path='/automenu' element={ <AutoMenu/>}/>
        <Route path='/inputpage' element={ <InputPage/>}/>
        <Route path='/ref' element={ <Ref/>}/>
        <Route path='/myauto' element={ <AutocompleteMenu name='autocomplete' control={control}/>}/>
        <Route path='/tictac' element={ <Board/>}/>



      </Routes>
    </BrowserRouter>




    </>
  )
}

export default App
