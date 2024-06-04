// src/components/ScheduleForm.js

import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem } from '@mui/material';

const services = [
  { value: 'lavagem-completa', label: 'Lavagem Completa' },
  { value: 'higienizacao-interna', label: 'Higienização Interna' },
  { value: 'polimento', label: 'Polimento' }
];

const paymentMethods = [
  { value: 'pix', label: 'Pix' },
  { value: 'cartao', label: 'Cartão de Crédito' },
  { value: 'dinheiro', label: 'Dinheiro' }
];

const ScheduleForm = ({ addSchedule }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [placaCar, setPlacaCar] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [payment, setPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSchedule({ name, cpf, email, phone, carModel, placaCar, date, time, service, payment });
    setName('');
    setCpf('');
    setEmail('');
    setPhone('');
    setCarModel('');
    setPlacaCar('');
    setDate('');
    setTime('');
    setService('');
    setPayment('');
  };

  return (
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
            label="CPF"
            variant="outlined"
            fullWidth
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Telefone"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Modelo do Automóvel"
            variant="outlined"
            fullWidth
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Placa do Automóvel"
            variant="outlined"
            fullWidth
            value={placaCar}
            onChange={(e) => setPlacaCar(e.target.value)}
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
          <TextField
            label="Serviço"
            select
            variant="outlined"
            fullWidth
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            {services.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Forma de Pagamento"
            select
            variant="outlined"
            fullWidth
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
          >
            {paymentMethods.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Agendar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ScheduleForm;
