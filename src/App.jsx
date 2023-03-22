import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import Header from './Components/Header/Header'
import data from "../src/data.json"
import Gallery from './Components/Gallery/Gallery'
import ArtDetail from './Components/ArtDetail/ArtDetail'
import './App.css'

function App() {

  const art = useState(data)
  
  const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Gallery art={art}/>} />
      <Route path="art" element={<ArtDetail />}/>
      
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
