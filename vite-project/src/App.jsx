import {Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './Component/Login'
import NavBar from './Component/NavBar'
import Home from './Component/Home'

function App() {
  

  return (
    <>
   <NavBar></NavBar>
   <search></search>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      </Routes>  
    </>
  )
}

export default App
