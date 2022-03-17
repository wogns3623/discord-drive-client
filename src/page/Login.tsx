import { AppContext } from '@context/index'
import { Button } from 'antd'
import React, { useContext } from 'react'
export function Login(): React.ReactElement {
  const { setIsLogin } = useContext(AppContext)

  return (
    <>
      //TODO: 로그인 페이지 //TODO: 디스코드 API와 연결
      <div>Login</div>
      <div>
        <Button
          onClick={() => {
            if (setIsLogin) setIsLogin(true)
          }}
        >
          로그인2
        </Button>
      </div>
    </>
  )
}
