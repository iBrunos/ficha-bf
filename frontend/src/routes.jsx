import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignIn from './components/signIn/signIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
const Rotas = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<PrivateRoute />}>
        <Route path="/user/home" element={<Home />} />
      </Route>
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  </Router>
);

export default Rotas;