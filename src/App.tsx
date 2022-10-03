import { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import ApiPractice from './pages/ApiPractice';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/apipractice" element={<ApiPractice />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App