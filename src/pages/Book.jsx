import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";

function Book () {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBook = async (id) => {
    const response = await fetch(`http://localhost:1717/books/detail/${id}`);
    const data = await response.json();
    setBook(data);
  }

  useEffect(() => {
    fetchBook(id);
  }, [id]);

  return(
    <div>
      <h1 className="title">{book.name}</h1>
      <div>{book.author}</div>
      <div>Favorite: {book.isFavorite ? "Favorite" : "Not favorite"}</div>
      <div>Publish year: {book.publishYear}</div>
      <div>Pages: {book.pagesNumber} стр</div>
      <div>Original language: {book.originalLanguage}</div>
      <div>Publish house: {book.publishHouse}</div>
    </div>
  );
}

export default Book;