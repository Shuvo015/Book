import { useEffect, useState } from "react"
import Book from "../Book/Book"

const Books =()=>{
  const [books, setBooks]=useState([])
  useEffect(()=>{
   fetch('/booksData.json')
   .then(res=>res.json())
   .then(data=> setBooks(data))

  },[])
  
  return(
    <div >
       <h2 className="text-4xl text-center my-10 font-bold">Books</h2>
      <div className="container m-auto grid grid-cols-3 gap-10">
      {
       
       books.map(book=> <Book
       book={book}
       ></Book>)
       
       }
      
      </div> 
       
    </div>
  )
}
export default Books