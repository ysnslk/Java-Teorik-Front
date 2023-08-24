import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table, Tag } from "antd";
import AddRoleModal from "../../components/AddRoleModal";
import axios from "axios";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    permissions: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    permissions: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Permissions",
    dataIndex: "permissions",
    key: "permissions",
    render: (cell, row) => {
      return cell.map((item) => (
        <Tag color="green" key={item.id}>
          {item.name}
        </Tag>
      ));
    },
  },
];
const Role = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);
  const buttons = [
    {
      key: "addRole",
      text: "Add Role",
      type: "primary",
      onClick: () => setIsModalOpen(true),
    },
  ];

  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    const role = {
      name: values.name,
      permissions: values.permissions.join(","),
    };
    axios.post("http://localhost:5000/role", role).then((res) => {
      setRoles((prevstate) => [
        ...prevstate,
        {
          ...res.data,
          permissions: values.permissions.map(
            (pId) => permissions.filter((per) => per.id === parseInt(pId))[0]
          ),
        },
      ]);
    });
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios.get("http://localhost:5000/permission").then((res) => {
      setPermissions(res.data);

      axios.get("http://localhost:5000/role").then((resRole) => {
        const rolesData = resRole.data.map((role) => {
          return {
            ...role,
            permissions: role.permissions.split(",").map((id) => {
              return res.data.filter((p) => p.id === parseInt(id))[0];
            }),
          };
        });
        setRoles(rolesData);
      });
    });
  }, []);
  return (
    <PageLayout buttons={buttons}>
      <Table dataSource={roles} columns={columns} rowKey="id" />
      <AddRoleModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
        permissions={permissions}
      />
    </PageLayout>
  );
};

export default Role;
