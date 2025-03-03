import { useLoaderData, useParams } from "react-router-dom"

 const Moreinfo =()=>{
  const {bookId}=useParams()
  const data =useLoaderData()
  
  const id= parseInt(bookId)

  const book= data.find(book=> book.bookId === id)
  console.log(book)

  const{ bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing}= book ;
  return(
    <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
 }

 export default Moreinfo


