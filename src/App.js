// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScheduleForm from './components/ScheduleForm';
import ScheduleList from './components/ScheduleList';
import Home from './components/Home';
import UserForm from './components/UserForm'; // Importe o componente
import { CssBaseline, Container, Box, Button, Typography } from '@mui/material';
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

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Lógica para autenticar o usuário
    setAuthenticated(true);
  };
  


  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container>
        <Box my={4} display="flex" justifyContent="flex-end">
        <Button
            variant="contained"
            color="primary"
            component={Link}
            to={authenticated ? "/agendar" : "/cadastrar"}
            disabled={!authenticated}
        >
            Agendar Lavagem
        </Button>

        </Box>
        {errorMessage && <Typography variant="body2" color="error">{errorMessage}</Typography>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/agendar"
            element={
              <Box my={4}>
                <ScheduleForm addSchedule={addSchedule} />
                <ScheduleList schedules={schedules} />
              </Box>
            }
          />
          <Route
            path="/cadastrar"
            element={
              <Box my={4}>
                <UserForm addUser={addUser} />
              </Box>
            }
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
