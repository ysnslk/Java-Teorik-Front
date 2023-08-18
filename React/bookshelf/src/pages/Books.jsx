import React, { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";

const Books = () => {
  const [newBookId, setNewBookId] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const onChange = (id) => {
    console.log(id);
    setNewBookId(id);
  };

  const onChangeCheckBox = (e) => {
    const value = e.target.checked;
    setIsVisible(value);
  };

  return (
    <>
      <Form onChange={onChange} />
      <label>
        <input
          type="checkbox"
          onChange={onChangeCheckBox}
          defaultChecked={true}
        />
        Table Gözüksün mü ?
      </label>

      {isVisible && <Table newBookId={newBookId} />}
    </>
  );
};

export default Books;
