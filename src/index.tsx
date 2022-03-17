import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="main_window" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
