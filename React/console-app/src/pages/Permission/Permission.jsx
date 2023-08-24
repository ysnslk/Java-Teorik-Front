import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddPermissionModal from "../../components/AddPermissonModal";
import axios from "axios";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];
const Permission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    console.log(values);
    axios
      .post("http://localhost:5000/permission", values)
      .then((res) => setPermissions((prevstate) => [...prevstate, res.data]));
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };
  const buttons = [
    {
      key: "addPermission",
      text: "Add Permission",
      type: "primary",
      onClick: () => setIsModalOpen(true),
    },
  ];
  useEffect(() => {
    axios
      .get("http://localhost:5000/permission")
      .then((res) => setPermissions(res.data));
  }, []);

  return (
    <PageLayout buttons={buttons}>
      <Table dataSource={permissions} columns={columns} rowKey="id" />
      <AddPermissionModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
      />
    </PageLayout>
  );
};

export default Permission;
