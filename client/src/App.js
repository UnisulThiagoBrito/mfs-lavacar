// client/src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ContateNos from './components/ContateNos';
import ScheduleForm from './components/ScheduleForm';
import ScheduleList from './components/ScheduleList';
import Footer from './components/Footer';
import Sobre from './components/Sobre'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<ScheduleForm />} />
        <Route path="/consultar-horario" element={<ScheduleList />} />
        <Route path="/contate-nos" element={<ContateNos />} />
        <Route path="/sobre" element={<div><Sobre/></div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
