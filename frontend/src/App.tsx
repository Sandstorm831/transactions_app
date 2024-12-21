import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Signup from './pages/signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
