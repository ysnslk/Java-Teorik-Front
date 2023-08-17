import React, { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";

const Books = () => {
  const [newBookId, setNewBookId] = useState();
  const onChange = (id) => {
    console.log(id);
    setNewBookId(id);
  };

  return (
    <>
      <Form onChange={onChange} />
      <Table newBookId={newBookId} />
    </>
  );
};

export default Books;
