import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
import Networks from './pages/Networks';
import NetworkAccessRequest from './pages/NetworkAccessRequest';
import Messages from './pages/Messages';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/networks" element={<Networks />} />
        <Route path="/networkAccess" element={<NetworkAccessRequest />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  )
}

export default App
