import { NavLink } from "react-router-dom"

 const Navber =()=>{
  return(
    <div>
      <div className="flex justify-between container m-auto mt-10 items-center">
        <div>
          <p className="text-3xl font-bold">Book Gallery</p>
        </div>
        <div className="flex gap-5">
          <NavLink to ='/'>Home</NavLink>
          <p>Listed Book</p>
          <p>page To Read</p>

        </div>
        <div className="flex gap-2">
          <button className="bg-green-600 px-5 py-3">Sign In</button>
          <button className="bg-green-300 px-5 py-3">Sign Up</button>
        </div>
      </div>
    </div>
  )
 }

 export default Navber