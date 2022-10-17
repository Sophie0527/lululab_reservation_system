import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { Row } from 'antd';
import 'antd/dist/antd.css';
const FormBox = ({ setOnOff }) => {
  const onFinish = values => {
    values.password === '1234'
      ? setOnOff(prev => !prev)
      : alert('비밀번호를 확인하세요');
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Space>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Space>
      <h1>
        테스트용 비밀번호 <strong style={{ color: 'red' }}>1234</strong> 입니다.
      </h1>
    </>
  );
};

export default FormBox;
