import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Users from './pages/Users';
import Networks from './pages/Networks';
import NetworkAccessRequest from './pages/NetworkAccessRequest';
import Messages from './pages/Messages';
import { AuthProvider } from './components/hooks/AuthProvider';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/users" element={<Users />} />
          <Route path="/networks" element={<Networks />} />
          <Route path="/networkAccess" element={<NetworkAccessRequest />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
