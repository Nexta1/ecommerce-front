import { Button, Form, Input } from 'antd'
import Layout from './Layout'

const SignIn = () => {
  return (
    <Layout title="登陆">
      <Form>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}
export default SignIn
