import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Button, Table } from "antd";
import AddUserModal from "../../components/AddUserModal";
import axios from "axios";
import { EditOutlined } from "@ant-design/icons";

const User = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [count, setCount] = useState(0);
  const [initialValues, setInitialValues] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOkAddModal = (values) => {
    setIsModalOpen(false);

    console.log(values);
    if (initialValues) {
      axios
        .put(`http://localhost:5000/user/${initialValues.id}`, values)
        .then((res) => {
          setUsers((prevState) => {
            return prevState.map((u) => {
              if (res.data.id === u.id) {
                return res.data;
              }
              return u;
            });
          });
        });
    } else {
      axios
        .post("http://localhost:5000/user", values)
        .then((res) => setCount(res.data.id));
    }
  };

  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };

  const buttons = [
    {
      key: "addUser",
      text: "Add User",
      type: "primary",
      onClick: () => {
        setIsModalOpen(true);
        setInitialValues(null);
      },
    },
  ];

  const onClickEdit = (row) => {
    setIsModalOpen(true);
    setInitialValues(row);
  };
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
    {
      dataIndex: "id",
      key: "id",
      render: (cell, row) => {
        return (
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => onClickEdit(row)}
          />
        );
      },
      width: 50,
    },
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/role").then((res) => setRoles(res.data));
    axios.get("http://localhost:5000/user").then((res) => setUsers(res.data));
  }, [count]);

  return (
    <PageLayout buttons={buttons}>
      <Table dataSource={users} columns={columns} rowKey="id" />
      {isModalOpen && (
        <AddUserModal
          isModalOpen={isModalOpen}
          onOk={onOkAddModal}
          onCancel={onCancelAddModal}
          roles={roles}
          initialValues={initialValues}
        />
      )}
    </PageLayout>
  );
};

export default User;
