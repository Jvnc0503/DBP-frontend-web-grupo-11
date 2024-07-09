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
import { DeleteBus } from './components/DeleteBus';
import { RegisterRoute } from './components/RegisterRoute';
import { ListRoutes } from './components/ListRoutes';
import { AsignRoute } from './components/AsignRoute';
import { DeleteRoute } from './components/DeleteRoute';
import { RegisterStation } from './components/RegisterStation';
import { ListStations } from './components/ListStations';
import { AsignStation } from './components/AsignStation';
import { DeleteStation } from './components/DeleteStation';
import { Logout } from './components/Logout';

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
        <Route path="/buses/delete" element={<DeleteBus />} />
        <Route path="/routes/register" element={<RegisterRoute />} />
        <Route path="/routes/list" element={<ListRoutes />} />
        <Route path="/routes/asign" element={<AsignRoute />} />
        <Route path="/routes/delete" element={<DeleteRoute />} />
        <Route path="/stations/register" element={<RegisterStation />} />
        <Route path="/stations/list" element={<ListStations />} />
        <Route path="/stations/asign" element={<AsignStation />} />
        <Route path="/stations/delete" element={<DeleteStation />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;