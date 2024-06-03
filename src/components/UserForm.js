import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState(''); // Novo estado para o modelo do carro
  const [placaCar, setplacaCar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, phone, carModel, placaCar }); // Incluindo o modelo do carro ao adicionar o usuário
    setName('');
    setEmail('');
    setPhone('');
    setCarModel('');
    setplacaCar('');
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
            onChange={(e) => setplacaCar(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;
