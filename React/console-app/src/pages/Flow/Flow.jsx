import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Button, Table, Tag } from "antd";
import AddFlowModal from "../../components/AddFlowModal";
import axios from "axios";
import { EditOutlined } from "@ant-design/icons";
const Flow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flows, setFlows] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [initialValues, setInitialValues] = useState([]);

  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    const flow = {
      fName: values.fName,
      tasks: values.tasks.join(","),
    };
    if (initialValues) {
      axios
        .put(`http://localhost:5000/flow/${initialValues.id}`, flow)
        .then((res) => {
          const updatedFlow = {
            ...res.data,
            tasks: values.tasks.map((tId) =>
              tasks.find((task) => task.id === tId)
            ),
          };
          setFlows((prevFlows) =>
            prevFlows.map((prevFlow) =>
              prevFlow.id === updatedFlow.id ? updatedFlow : prevFlow
            )
          );
        });
    } else {
      axios.post("http://localhost:5000/flow", flow).then((res) => {
        const newFlow = {
          ...res.data,
          tasks: values.tasks.map((tId) =>
            tasks.find((task) => task.id === tId)
          ),
        };
        setFlows((prevFlows) => [...prevFlows, newFlow]);
      });
    }
  };

  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };
  const buttons = [
    {
      key: "addflow",
      text: "Add Flow",
      type: "primary",
      onClick: () => {
        setIsModalOpen(true);
        setInitialValues(null);
      },
    },
  ];
  const onClickEdit = (row) => {
    console.log(row);
    setIsModalOpen(true);
    const taskIds = row.tasks.map((task) => task.id);
    setInitialValues({ ...row, tasks: taskIds });
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const columns = [
    {
      title: "Flow Name",
      dataIndex: "fName",
      key: "fName",
    },
    {
      title: "Tasks",
      dataIndex: "tasks",
      key: "tasks",
      render: (taskList) => (
        <>
          {taskList.map((task) => (
            <Tag color="blue" key={task.id}>
              {task.name}
            </Tag>
          ))}
        </>
      ),
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
    axios.get("http://localhost:5000/task").then((res) => {
      const fetchedTasks = res.data;
      setTasks(fetchedTasks);
      axios.get("http://localhost:5000/flow").then((resFlow) => {
        const flowsData = resFlow.data.map((flow) => {
          const taskIds = flow.tasks.split(",").map((id) => parseInt(id));

          const flowTasks = taskIds.map((id) => {
            return fetchedTasks.find((task) => task.id === id);
          });

          return {
            ...flow,
            tasks: flowTasks,
          };
        });
        setFlows(flowsData);
      });
    });
  }, []);

  return (
    <PageLayout buttons={buttons} onSearch={onSearch}>
      <Table
        dataSource={flows.filter((flow) => {
          return flow.fName.includes(search);
        })}
        columns={columns}
        rowKey="id"
      />
      {isModalOpen && (
        <AddFlowModal
          isModalOpen={isModalOpen}
          onOk={onOkAddModal}
          onCancel={onCancelAddModal}
          tasks={tasks}
          initialValues={initialValues}
        />
      )}
    </PageLayout>
  );
};

export default Flow;
