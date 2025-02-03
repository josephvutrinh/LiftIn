import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Progress from './pages/Progress/Progress';
import Split from './pages/Split/Split';
import Search from './pages/Search/Search';
import FollowRequests from './pages/FollowRequests/FollowRequests';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';

function App() {
  return (
    <main className='min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/requests" element={<FollowRequests />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/split" element={<Split />} />
        </Routes>
    </main>
  );
}

export default App;
