import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddUserModal from "../../components/AddUserModal";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const User = () => {
  const buttons = [
    {
      key: "addUser",
      text: "Add User",
      type: "primary",
      onClick: () => setIsModalOpen(true),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    console.log(values);
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageLayout buttons={buttons}>
      <Table dataSource={dataSource} columns={columns} />
      <AddUserModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
      />
    </PageLayout>
  );
};

export default User;
