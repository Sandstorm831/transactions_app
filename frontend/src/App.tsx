import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Dashboard from './pages/dashboard'
import Send from './pages/send'
import RootPage from './pages/root'
import PageNotFound from './pages/404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/send' element={<Send />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
