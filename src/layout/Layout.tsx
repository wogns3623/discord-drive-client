import { AppContext } from '@context/index'
import * as P from '@page/index'
import { Layout } from 'antd'
import React, { useContext } from 'react'
import LoadingOverlay from 'react-loading-overlay'
// components
import { Route, Routes } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout
export default (): React.ReactElement | null => {
  const { isLogin, isLoading } = useContext(AppContext)

  return (
    <Layout>
      {isLogin ? (
        <LoadingOverlay active={isLoading} spinner>
          <Layout>
            <Sider>Sider 계정정보 파일 progress가 들어갈 sidebar</Sider>
            <Content>
              <Routes>
                <Route index element={<P.Main />}></Route>
              </Routes>
            </Content>
          </Layout>
        </LoadingOverlay>
      ) : (
        <Routes>
          <Route index element={<P.Login />}></Route>
        </Routes>
      )}
    </Layout>
  )
}
