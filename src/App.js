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


function App() {
  return (
    <div className="App">
      <Input_Barang/>
    </div>
  );
}

export default App;
