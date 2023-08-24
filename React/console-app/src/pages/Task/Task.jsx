import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table } from "antd";
import AddTaskModal from "../../components/AddTaskModal";
import axios from "axios";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];
const Task = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const buttons = [
    {
      key: "addTask",
      text: "Add Task",
      type: "primary",
      onClick: () => setIsModalOpen(true),
    },
  ];

  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    axios
      .post("http://localhost:5000/task", values)
      .then((res) => setTasks((prevstate) => [...prevstate, res.data]));
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios.get("http://localhost:5000/task").then((res) => setTasks(res.data));
  }, []);

  return (
    <PageLayout buttons={buttons}>
      <Table dataSource={tasks} columns={columns} rowKey="id" />
      <AddTaskModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
      />
    </PageLayout>
  );
};

export default Task;
