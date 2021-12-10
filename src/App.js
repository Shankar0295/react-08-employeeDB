import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import CreateData from './components/CreateData/CreateData';
import Dashboard from './components/Dashboard/Dashboard';
import Login from "./components/Login/Login";
import ProtectedRoute from "./auth/protected-routes";
import './App.css';
import JsonData from './data.json'


function App() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(JsonData))
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route exact path='/create' element={<CreateData />} ></Route>
        {/* <Route exact path='/create' element={<ProtectedRoute />}>
          <Route exact path='/create' element={<CreateData />} ></Route>
        </Route> */}
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
