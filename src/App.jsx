import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import AdminLayout from './components/layout'
import StatisticsPage from './pages/statistics'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>

           <Route path='/'  element={<LoginPage/>} />

           <Route element={<AdminLayout/>} >
              <Route path='statistics' element={<StatisticsPage/>} />
           </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App