import Card from "../components/Card";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Books () {
  const [books, setBooks] = useState([]);
  
  const fetchData = async () => {
    const response = await fetch("http://localhost:1717/books");
    const data = await response.json();
    setBooks(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const deleteFetch = async (id) => {
    await fetch(`http://localhost:1717/books/delete/${id}`, {
      method: "DELETE"
    });
    fetchData();
  }
  const updateFetch = async (id, value) => {
    await fetch(`http://localhost:1717/books/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "isFavorite": value
      })
    });
    fetchData();
  }

  return(
    <div>
      <h1 className="title">Books</h1>
      <ul style={{display: "flex", flexFlow: "wrap", gap: "20px"}}>
        {
          books.map((book, index) => {
            return <Card key={index} {...book} deleteBook={deleteFetch} updateFetch={updateFetch}/>
          })
        }
      </ul>
    </div>
  );
}

export default Books;