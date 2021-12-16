import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/dist/css/adminlte.min.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Data_Barang from './pages/Data_Barang';
import Input_Barang from './pages/Input_Barang';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data_Akun from './pages/Data_Akun';
import Transaksi from './pages/Transaksi';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/data-barang" element={<Data_Barang/>} />
          <Route path="/input-barang" element={<Input_Barang/>} />
          <Route path="/data-akun" element={<Data_Akun/>} />
          <Route path="/tentang" element={<About/>} />
          <Route path="/transaksi" element={<Transaksi/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
