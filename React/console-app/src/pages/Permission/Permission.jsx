import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Button, Table } from "antd";
import AddPermissionModal from "../../components/AddPermissonModal";
import axios from "axios";
import { EditOutlined } from "@ant-design/icons";

const Permission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [initialValues, setInitialValues] = useState([]);
  const [search, setSearch] = useState("");

  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    if (initialValues) {
      axios
        .put(`http://localhost:5000/permission/${initialValues.id}`, values)
        .then((res) => {
          setPermissions((prevState) => {
            return prevState.map((p) => {
              if (res.data.id === p.id) {
                return res.data;
              }
              return p;
            });
          });
        });
    } else {
      axios
        .post("http://localhost:5000/permission", values)
        .then((res) => setPermissions((prevstate) => [...prevstate, res.data]));
    }
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };
  const buttons = [
    {
      key: "addPermission",
      text: "Add Permission",
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
  const onSearch = (value) => {
    setSearch(value);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
    axios
      .get("http://localhost:5000/permission")
      .then((res) => setPermissions(res.data));
  }, []);

  return (
    <PageLayout buttons={buttons} onSearch={onSearch}>
      <Table
        dataSource={permissions.filter((permission) => {
          return permission.name.includes(search);
        })}
        columns={columns}
        rowKey="id"
      />
      {isModalOpen && (
        <AddPermissionModal
          isModalOpen={isModalOpen}
          onOk={onOkAddModal}
          onCancel={onCancelAddModal}
          initialValues={initialValues}
        />
      )}
    </PageLayout>
  );
};

export default Permission;
