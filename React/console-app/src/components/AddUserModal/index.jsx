import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const AddUserModal = ({ isModalOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    onOk(values);
    form.resetFields();
  };
  return (
    <Modal
      title="Add User"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Form
        form={form}
        name="add-user"
        onFinish={onFinish}
        wrapperCol={{ span: 16 }}
        labelCol={{ span: 8 }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lanstName"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select placeholder="Select an option">
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary">Add User</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
