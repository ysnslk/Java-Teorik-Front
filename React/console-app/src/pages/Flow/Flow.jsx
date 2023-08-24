import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Table, Tag } from "antd";
import AddFlowModal from "../../components/AddFlowModal";
import axios from "axios";

const Flow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flows, setFlows] = useState([]);
  const [tasks, setTasks] = useState([]);
  const buttons = [
    {
      key: "addflow",
      text: "Add Flow",
      type: "primary",
      onClick: () => setIsModalOpen(true),
    },
  ];

  const onOkAddModal = (values) => {
    setIsModalOpen(false);
    const flow = {
      fName: values.fName,
      tasks: values.tasks.join(","),
    };
    axios.post("http://localhost:5000/flow", flow).then((res) => {
      const newFlow = {
        ...res.data,
        tasks: values.tasks.map(
          (tId) => tasks.find((task) => task.id === parseInt(tId))
        ),
      };
      setFlows((prevFlows) => [...prevFlows, newFlow]);
    });
  };

  const onCancelAddModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/task").then((res) => {
      const fetchedTasks = res.data;
      setTasks(fetchedTasks);
      axios.get("http://localhost:5000/flow").then((resFlow) => {
        const flowsData = resFlow.data.map((flow) => {
          const taskIds = flow.tasks.split(",");
          const flowTasks = taskIds.map((id) =>
            fetchedTasks.find((task) => task.id === parseInt(id))
          );
          return {
            ...flow,
            tasks: flowTasks,
          };
        });

        
        setFlows(flowsData);
      });
    });
  }, []);

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
      // render: (taskList) => (
      //   <>
      //     {taskList.map((task) => (
      //       <Tag color="blue" key={task.id}>
      //         {task.fName}
      //       </Tag>
      //     ))}
      //   </>
      // ),
    },
  ];

  return (
    <PageLayout buttons={buttons}>
      <Table dataSource={flows} columns={columns} rowKey="id" />
      <AddFlowModal
        isModalOpen={isModalOpen}
        onOk={onOkAddModal}
        onCancel={onCancelAddModal}
        tasks={tasks}
      />
    </PageLayout>
  );
};

export default Flow;
