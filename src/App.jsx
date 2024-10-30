
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/Nabver/Navber'

function App() {

  return (
    <>
      <div>
        <Navber></Navber>
 
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
