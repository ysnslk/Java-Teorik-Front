import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Table = ({ newBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/book")
      .then((response) => setBooks(response.data));
  }, [newBookId]);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Release Date</th>
          <th>Author</th>
          <th>Page Count</th>
          <th>ISBN</th>
          <th>Gender</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          return (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.relaseDate}</td>
              <td>{book.author}</td>
              <td>{book.pageCount}</td>
              <td>{book.isbn}</td>
              <td>{book.gender}</td>
              <td>{book.publisher}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
