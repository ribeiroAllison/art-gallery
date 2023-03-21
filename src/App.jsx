import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'

function App() {

  const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Header />}>
      
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
