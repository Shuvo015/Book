import { Link } from "react-router-dom";

const Book =({book})=>{
  const{bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing}= book ;
  return(
    <Link to={`/Books/${bookId}`}>
     <div className="">
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure >
    <img className="h-[166px]"
      src= {image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By: {author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    
    </Link>
  )
}

export  default Book