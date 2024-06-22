import './App.css'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Items from './pages/Items'
import Cart from './pages/Cart'


function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
