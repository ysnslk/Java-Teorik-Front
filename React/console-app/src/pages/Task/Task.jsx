import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddTaskModal from "../../components/AddTaskModal";
const dataSource = [
  {
    key: "1",
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, at.",
  },
  {
    key: "2",
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, at.",
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
      key: "addTask",
      text: "Add Task",
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
      <AddTaskModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
      />
    </PageLayout>
  );
};

export default Permission;
