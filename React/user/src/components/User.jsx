import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const User = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [newUserId, setNewUserId] = useState();
  const onChange = (id) => {
    setNewUserId(id);
  };
  const onChangeCheckedBox = (element) => {
    setIsVisible(element.target.checked);
  };

  return (
    <div className="user">
      <Form onChange={onChange} />
      <label>
        <input
          type="checkbox"
          onChange={onChangeCheckedBox}
          defaultChecked={true}
        />
        User tablosu gözüksün mü ?
      </label>
      {isVisible && <Table newUserId={newUserId} />}
    </div>
  );
};

export default User;
