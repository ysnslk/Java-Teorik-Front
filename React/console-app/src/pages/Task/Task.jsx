import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Button, Table } from "antd";
import AddTaskModal from "../../components/AddTaskModal";
import axios from "axios";
import { EditOutlined } from "@ant-design/icons";

const Task = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [initialValues, setInitialValues] = useState([]);
  const [search, setSearch] = useState("");

  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    if (initialValues) {
      axios
        .put(`http://localhost:5000/task/${initialValues.id}`, values)
        .then((res) => {
          setTasks((prevState) => {
            return prevState.map((t) => {
              if (res.data.id === t.id) {
                return res.data;
              }
              return t;
            });
          });
        });
    } else {
      axios
        .post("http://localhost:5000/task", values)
        .then((res) => setTasks((prevstate) => [...prevstate, res.data]));
    }
  };
  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };
  const buttons = [
    {
      key: "addTask",
      text: "Add Task",
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
      width: 100,
    },
  ];
  useEffect(() => {
    axios.get("http://localhost:5000/task").then((res) => setTasks(res.data));
  }, []);

  return (
    <PageLayout buttons={buttons} onSearch={onSearch}>
      <Table
        dataSource={tasks.filter((task) => {
          return task.name.includes(search);
        })}
        columns={columns}
        rowKey="id"
      />
      {isModalOpen && (
        <AddTaskModal
          isModalOpen={isModalOpen}
          onOk={onOkAddModal}
          onCancel={onCancelAddModal}
          initialValues={initialValues}
        />
      )}
    </PageLayout>
  );
};

export default Task;
