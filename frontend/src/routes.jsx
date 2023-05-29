import Home from './pages/home/Home';
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Rotas = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);

export default Rotas;