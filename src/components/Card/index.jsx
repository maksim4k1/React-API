import React from "react";
import { NavLink } from "react-router-dom";

function Card ({id, name, author, isFavorite, deleteBook, updateFetch}) {
  return(
    <div className="card" style={{width: "400px"}}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{author}</p>
        <NavLink to={`/books/${id}`} className="btn btn-primary">Подробнее</NavLink>
        <button type="button" className="btn btn-danger" onClick={() => deleteBook(id)}>Delete</button>
        <button type="button" className="btn" onClick={() => updateFetch(id, !isFavorite)}><img src={isFavorite ? "https://cdn-icons-png.flaticon.com/512/833/833472.png" : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"} alt="" className="icon"/></button>
      </div>
    </div>
  );
}

export default Card;