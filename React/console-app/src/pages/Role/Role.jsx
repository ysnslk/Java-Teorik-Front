import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Button, Table, Tag } from "antd";
import AddRoleModal from "../../components/AddRoleModal";
import axios from "axios";
import { EditOutlined } from "@ant-design/icons";

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


const Role = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);
  const [search, setSearch] = useState("");
  const [initialValues, setInitialValues] = useState([]);

  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    const role = {
      name: values.name,
      permissions: values.permissions.join(","),
    };
    if (initialValues) {
      axios
        .put(`http://localhost:5000/role/${initialValues.id}`, role)
        .then((res) => {
          const updatedRow = {
            ...res.data,
            permissions: values.permissions.map((pId) =>
              permissions.find((permission) => permission.id === pId)
            ),
          };
          setRoles((prevRoles) =>
            prevRoles.map((prevRole) =>
              prevRole.id === updatedRow.id ? updatedRow : prevRole
            )
          );
        });
    } else {
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
    }
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };
 const onClickEdit = (row) => {
  setIsModalOpen(true);
  const permissionIds = row.permissions.map((permission) => permission.id);
  setInitialValues({ ...row, permissions: permissionIds });
};

  const onSearch = (value) => {
    setSearch(value);
  };

  const buttons = [
    {
      key: "addRole",
      text: "Add Role",
      type: "primary",
      onClick: () => {
        setIsModalOpen(true);
        setInitialValues(null);
      },
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
    <PageLayout buttons={buttons} onSearch={onSearch}>
      <Table
        dataSource={roles.filter((role) => {
          return role.name.includes(search);
        })}
        columns={columns}
        rowKey="id"
      />
      {isModalOpen && (
        <AddRoleModal
          isModalOpen={isModalOpen}
          onOk={onOkAddModal}
          onCancel={onCancelAddModal}
          permissions={permissions}
          initialValues={initialValues}
        />
      )}
    </PageLayout>
  );
};

export default Role;
