import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Auth/Dashboard';

export default function App() {
  return (
    <div className='bg-primary min-h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Chat />
      </Router>
    </div>
  );
}
