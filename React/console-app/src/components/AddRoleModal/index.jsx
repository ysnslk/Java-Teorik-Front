import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const AddRoleModal = ({ isModalOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onOk(values);
    form.resetFields();
  };
  return (
    <Modal
      title="Add Role"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Form
        form={form}
        name="add-role"
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
        <Form.Item name="permissions" label="Permissions" rules={[{ required: true }]}>
          <Select placeholder="Select an option" mode="multiple" >
            <Select.Option value="a">A</Select.Option>
            <Select.Option value="b">B</Select.Option>
            <Select.Option value="c">C</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">Add Role</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddRoleModal;
