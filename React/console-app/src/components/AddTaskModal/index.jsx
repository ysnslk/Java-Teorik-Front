import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const AddTaskModal = ({ isModalOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onOk(values);
    form.resetFields();
  };
  return (
    <Modal
      title="Add Task"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Form
        form={form}
        name="add-task"
        onFinish={onFinish}
        wrapperCol={{ span: 16 }}
        labelCol={{ span: 8 }}
      >
        <Form.Item
          name="name"
          label="Role Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">Add Task</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
