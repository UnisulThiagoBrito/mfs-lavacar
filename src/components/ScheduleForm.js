// src/components/ScheduleForm.js
import React, { useState } from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';

const ScheduleForm = ({ addSchedule }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSchedule({ name, date, time });
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Data"
              type="date"
              variant="outlined"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Hora"
              type="time"
              variant="outlined"
              fullWidth
              value={time}
              onChange={(e) => setTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Agendar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ScheduleForm;
