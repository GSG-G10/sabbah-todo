import { Form, Input, Button } from 'antd';

const AddForm = () => {

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
      required: '${label} is required!'
    };
    const onFinish = (val) => console.log(val);
    
      return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['title']} label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['Description']} label="Description">
        <Input.TextArea />
      </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add Todo
            </Button>
          </Form.Item>
        </Form>
      );
};
export default AddForm;
