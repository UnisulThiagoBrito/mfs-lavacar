import React, { useState } from 'react';
import { List, ListItem, ListItemText, Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);
  const [cpf, setCpf] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://seu-backend-url/consultar-horario?cpf=${cpf}`);
      setSchedules(response.data);
    } catch (error) {
      console.error("Erro ao consultar horários:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Typography variant="h6" gutterBottom>
        Preencha seu CPF para consultar os horários agendados.
      </Typography>
      <Box component="form" onSubmit={e => { e.preventDefault(); handleSearch(); }} sx={{ width: '100%', textAlign: 'center' }}>
        <TextField
          label="CPF"
          variant="outlined"
          fullWidth
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
          Consultar Horários
        </Button>
      </Box>
      <List sx={{ width: '100%', marginTop: 2 }}>
        {schedules.map((schedule, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${schedule.name}`}
              secondary={`Data: ${schedule.date} | Hora: ${schedule.time}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ScheduleList;
