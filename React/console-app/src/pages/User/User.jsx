import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddUserModal from "../../components/AddUserModal";
import axios from "axios";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];

const User = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    axios.get("http://localhost:5000/role").then((res) => setRoles(res.data));
    axios.get("http://localhost:5000/user").then((res) => setUsers(res.data));
  }, [count]);

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
    axios
      .post("http://localhost:5000/user", values)
      .then((res) => setCount(res.data.id));
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageLayout buttons={buttons}>
      <Table dataSource={users} columns={columns} rowKey="id" />
      <AddUserModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
        roles={roles}
      />
    </PageLayout>
  );
};

export default User;
