// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScheduleForm from './components/ScheduleForm';
import ScheduleList from './components/ScheduleList';
import Home from './components/Home';
import UserForm from './components/UserForm'; // Importe o componente
import ContateNos from './components/ContateNos'; // Importe o componente
import Sobre from './components/Sobre'; // Importe o componente
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import './App.css';

const App = () => {
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addSchedule = (schedule) => {
    const existingSchedule = schedules.find(s => s.date === schedule.date && s.time === schedule.time);

    if (existingSchedule) {
      setErrorMessage('Já existe um agendamento para este horário!');
      return;
    }

    setSchedules([...schedules, schedule]);
    setErrorMessage('');
  };

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container>
        {errorMessage && <Typography variant="body2" color="error">{errorMessage}</Typography>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/agendar"
            element={
              <Box my={4}>
                <UserForm addUser={addSchedule} />
                <ScheduleList schedules={schedules} />
              </Box>
            }
          />
          <Route
            path="/consultar"
            element={
              <Box my={4}>
                <ScheduleList schedules={schedules} />
              </Box>
            }
          />
          <Route
            path="/contate-nos"
            element={<ContateNos />}
          />
          <Route
            path="/sobre"
            element={<Sobre />}
          />
        </Routes>
        {/* Espaçamento extra para empurrar o footer para cima */}
        <Box height={100} />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
