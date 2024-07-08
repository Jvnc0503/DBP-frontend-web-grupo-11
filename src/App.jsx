import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Buses } from './pages/Buses';
import { Rutas } from './pages/Rutas';
import { Stations } from './pages/Stations';
import { RegisterBus } from './components/RegisterBus';
import { ListBuses } from './components/ListBuses';
import { AsignBus } from './components/AsignBus';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/routes" element={<Rutas />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/buses/register" element={<RegisterBus />} />
        <Route path="/buses/list" element={<ListBuses />} />
        <Route path="/buses/asign" element={<AsignBus />} />
      </Routes>
    </Router>
  );
}

export default App;