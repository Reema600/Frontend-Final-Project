import {Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './Component/Login'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
// import SearchBar from "./Component/SearchBar";

function App() {
  

  return (
    <>
   <NavBar></NavBar>
   
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      {/* <Route path='/SearchBar' element={<SearchBar></SearchBar>}></Route> */}
      </Routes>  
    </>
  )
}

export default App
