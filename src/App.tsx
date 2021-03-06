import { ContextWrapper } from '@context/index'
import 'antd/dist/antd.css'

import Layout from './layout/Layout'

export function App() {
  return (
      <ContextWrapper>
        <Layout />
      </ContextWrapper>
  )
}
