import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";

const AddFlowModal = ({
  isModalOpen,
  onOk,
  onCancel,
  tasks,
  initialValues,
}) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onOk(values);
    form.resetFields();
  };

  useEffect(() => {
    if (form) {
      form.setFieldsValue(initialValues);
    }
  }, [form]);

  return (
    <Modal
      title="Add Flow"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Form
        form={form}
        name="add-flow"
        onFinish={onFinish}
        wrapperCol={{ span: 16 }}
        labelCol={{ span: 8 }}
      >
        <Form.Item name="fName" label="Flow Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="tasks" label="Task" rules={[{ required: true }]}>
          <Select
            placeholder="Select an option"
            mode="multiple"
          >
            {tasks.map((task) => {
              return (
                <Select.Option key={task.id} value={task.id}>
                  {task.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Flow
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddFlowModal;
