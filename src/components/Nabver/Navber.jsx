import { Link } from "react-router-dom"

function Navber() {
  return (
    <div className='shadow flex justify-center gap-24 bg-blue-50 py-10 text-lg font-semibold'>

      <Link to={'/home'} className="hover:bg-blue-500 duration-500 hover:text-gray-200 py-2 px-4 rounded-sm" >Home</Link>


      <Link to={'/blog'} className="hover:bg-blue-500 duration-500 hover:text-gray-200 py-2 px-4 rounded-sm" >Blog</Link>

      <Link to={'/about'} className="hover:bg-blue-500 duration-500 hover:text-gray-200 py-2 px-4 rounded-sm" >About</Link>

      <Link to={'/service'} className="hover:bg-blue-500 duration-500 hover:text-gray-200 py-2 px-4 rounded-sm" >Service</Link>

      <Link to={'/contact'} className="hover:bg-blue-500 duration-500 hover:text-gray-200 py-2 px-4 rounded-sm" >Contact</Link>



      
    </div>
  )
}

export default Navber