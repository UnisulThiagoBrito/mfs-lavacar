
// src/components/ScheduleForm.js

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    carModel: '',
    placaCar: '',
    date: '',
    time: '',
    service: '',
    payment: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/agendar', formData)
      .then(response => {
        alert('Agendamento realizado com sucesso!');
        setFormData({
          name: '',
          cpf: '',
          email: '',
          phone: '',
          carModel: '',
          placaCar: '',
          date: '',
          time: '',
          service: '',
          payment: ''
        });
      })
      .catch(error => {
        alert('Ocorreu um erro ao realizar o agendamento.');
        console.error(error);
      });
  };

  return (
    <Container className="margin-top margin-bottom">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center my-4">Agende seu Horário</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mt-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Nome" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formCpf" className="mt-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="CPF" 
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Telefone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formCarModel" className="mt-3">
              <Form.Label>Modelo do Carro</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Modelo do Carro" 
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formPlacaCar" className="mt-3">
              <Form.Label>Placa do Carro</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Placa do Carro" 
                name="placaCar"
                value={formData.placaCar}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formDate" className="mt-3">
              <Form.Label>Data</Form.Label>
              <Form.Control 
                type="date" 
                placeholder="Data" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formTime" className="mt-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control 
                type="time" 
                placeholder="Hora" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formService" className="mt-3">
              <Form.Label>Serviço</Form.Label>
              <Form.Control 
                as="select" 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required 
              >
                <option value="">Selecione o Serviço</option>
                {services.map(service => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPayment" className="mt-3">
              <Form.Label>Forma de Pagamento</Form.Label>
              <Form.Control 
                as="select" 
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                required 
              >
                <option value="">Selecione a Forma de Pagamento</option>
                {paymentMethods.map(payment => (
                  <option key={payment.value} value={payment.value}>
                    {payment.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4" block>
              Agendar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ScheduleForm;


// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';

// const services = [
//   { value: 'lavagem-completa', label: 'Lavagem Completa' },
//   { value: 'higienizacao-interna', label: 'Higienização Interna' },
//   { value: 'polimento', label: 'Polimento' }
// ];

// const paymentMethods = [
//   { value: 'pix', label: 'Pix' },
//   { value: 'cartao', label: 'Cartão de Crédito' },
//   { value: 'dinheiro', label: 'Dinheiro' }
// ];

// const ScheduleForm = () => {
//   const [name, setName] = useState('');
//   const [cpf, setCpf] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [carModel, setCarModel] = useState('');
//   const [placaCar, setPlacaCar] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [service, setService] = useState('');
//   const [payment, setPayment] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/api/agendar', {
//       name,
//       cpf,
//       email,
//       phone,
//       carModel,
//       placaCar,
//       date,
//       time,
//       service,
//       payment,
//     })
//     .then(response => {
//       alert('Agendamento realizado com sucesso!');
//       setName('');
//       setCpf('');
//       setEmail('');
//       setPhone('');
//       setCarModel('');
//       setPlacaCar('');
//       setDate('');
//       setTime('');
//       setService('');
//       setPayment('');
//     })
//     .catch(error => {
//       alert('Ocorreu um erro ao realizar o agendamento.');
//       console.error(error);
//     });
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h2 className="text-center my-4">Agende seu Horário</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formName">
//               <Form.Label>Nome</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Nome" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formCpf" className="mt-3">
//               <Form.Label>CPF</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="CPF" 
//                 value={cpf} 
//                 onChange={(e) => setCpf(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formEmail" className="mt-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 placeholder="Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formPhone" className="mt-3">
//               <Form.Label>Telefone</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Telefone" 
//                 value={phone} 
//                 onChange={(e) => setPhone(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formCarModel" className="mt-3">
//               <Form.Label>Modelo do Automóvel</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Modelo do Automóvel" 
//                 value={carModel} 
//                 onChange={(e) => setCarModel(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formPlacaCar" className="mt-3">
//               <Form.Label>Placa do Automóvel</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Placa do Automóvel" 
//                 value={placaCar} 
//                 onChange={(e) => setPlacaCar(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formDate" className="mt-3">
//               <Form.Label>Data da Lavagem</Form.Label>
//               <Form.Control 
//                 type="date" 
//                 value={date} 
//                 onChange={(e) => setDate(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formTime" className="mt-3">
//               <Form.Label>Horário</Form.Label>
//               <Form.Control 
//                 type="time" 
//                 value={time} 
//                 onChange={(e) => setTime(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formService" className="mt-3">
//               <Form.Label>Serviço</Form.Label>
//               <Form.Control 
//                 as="select" 
//                 value={service} 
//                 onChange={(e) => setService(e.target.value)} 
//                 required
//               >
//                 {services.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formPayment" className="mt-3">
//               <Form.Label>Forma de Pagamento</Form.Label>
//               <Form.Control 
//                 as="select" 
//                 value={payment} 
//                 onChange={(e) => setPayment(e.target.value)} 
//                 required
//               >
//                 {paymentMethods.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Button className="mt-4" variant="primary" type="submit" block>
//               Agendar
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ScheduleForm;
