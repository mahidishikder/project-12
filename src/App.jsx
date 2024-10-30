
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import './App.css'
import Navber from './components/Nabver/Navber'

function App() {

  return (
    <>
      <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Home></Home>

          
          
        
      </div>
    </>
  )
}

export default App
