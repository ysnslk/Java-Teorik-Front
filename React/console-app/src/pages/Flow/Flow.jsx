import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddFlowModal from "../../components/AddFlowModal";
const dataSource = [
  {
    key: "1",
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, at.",
    tasks: " Lorem, ipsum dolor.",
  },
  {
    key: "2",
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, at.",
    tasks: " Lorem, ipsum dolor.",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tasks",
    dataIndex: "tasks",
    key: "tasks",
  },
];
const Permission = () => {
  const buttons = [
    {
      key: "addflow",
      text: "Add Flow",
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
      <AddFlowModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
      />
    </PageLayout>
  );
};

export default Permission;
