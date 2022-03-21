import { AppContext } from '@context/index'
import { Button, Checkbox, Col, Form, Input, Row, Space } from 'antd'
import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'

export function Login(): React.ReactElement {
  const { setIsLogin } = useContext(AppContext)
  // TODO: 로그인 페이지 //TODO: 디스코드 API와 연결

  const onFinish = useCallback(
    (event: { remember: boolean; token: string }) => {
      // TODO: Remember Token

      console.log(event)

      if (setIsLogin) {
        setIsLogin(true)
        // setToken(token)
      }
    },
    []
  )

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Login onFinishFailed:', errorInfo)
  }, [])

  return (
    <Row align="middle" style={{ flex: 1 }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Row justify="center" align="top">
          <h1>Discord Drive</h1>
        </Row>

        <Form
          name="login"
          layout="vertical"
          labelCol={{ offset: 4 }}
          wrapperCol={{ span: 16, offset: 4 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Token"
            name="token"
            rules={[{ required: true, message: 'Please input your token!' }]}
          >
            <Input
              placeholder="type your bot/client token"
              onPressEnter={e => {
                console.log(e)
              }}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Row justify="space-between">
              <Col>
                <Checkbox>Remember token</Checkbox>
              </Col>

              <Col>
                <Link to="">How to find my token?</Link>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Row>
  )
}
