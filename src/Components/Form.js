import { Form, Input, Button, DatePicker } from "antd";
import {PlusOutlined} from '@ant-design/icons'

const AddForm = (props) => {
  const {  setTasks } = props;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
  };
  const onFinish = (val) => {
    setTasks((prevTask) => [
      ...prevTask,
      {
        id: prevTask.length ? Number(prevTask[prevTask.length - 1].id) + 1 : 1, // set id
        title: val.title,
        description: val.description,
        date: val.date.format().split("T")[0],
      },
    ]);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={["title"]} label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={["description"]} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="date" label="Ends at:">
        <DatePicker picker="day" />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
         <PlusOutlined /> Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddForm;
