import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import App from './App.jsx';
import Layout from './layout.jsx';
import Introduction from './introduction.jsx';
import Contract from './contract.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<App/>}></Route>
          <Route path='/introduction' element={<Introduction/>}></Route>
          <Route path='/contract' element={<Contract/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
