import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddRoleModal from '../../components/AddRoleModal';

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
  },
];
const Role = () => {
  const buttons = [
    {
      key: "addRole",
      text: "Add Role",
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
      <AddRoleModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
      />
    </PageLayout>
  );
}

export default Role