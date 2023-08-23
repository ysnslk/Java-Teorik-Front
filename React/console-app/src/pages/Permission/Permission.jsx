import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddPermissionModal from "../../components/AddPermissonModal";
const dataSource = [
  {
    key: "1",
    name: "Full Acces",
  },
  {
    key: "2",
    name: "Only Read",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];
const Permission = () => {
  const buttons = [
    {
      key: "addPermission",
      text: "Add Permission",
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
      <AddPermissionModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
      />
    </PageLayout>
  );
};

export default Permission;
