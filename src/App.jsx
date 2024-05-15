
import { Route, Routes } from 'react-router-dom'
import Slider from './landing page/Slider'
import NavBar from './NavBar/NavBar'
import Home from './landing page/Home'

function App() {
 

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/slider' element={<Slider/>}/>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </>
  )
}

export default App
