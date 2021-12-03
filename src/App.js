import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import CreateData from './components/CreateData/CreateData';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import JsonData from './data.json'


function App() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(JsonData))
  }, [])
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/create" element={<CreateData />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
