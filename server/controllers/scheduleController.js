// // controllers/scheduleController.js
// const Schedule = require('../models/Schedule');

// exports.createSchedule = async (req, res) => {
//   try {
//     const schedule = await Schedule.create(req.body);
//     res.status(201).json({ message: 'Agendamento criado com sucesso!', schedule });
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao criar agendamento', error });
//   }
// };

// exports.getSchedulesByCPF = async (req, res) => {
//   try {
//     const schedules = await Schedule.findByCPF(req.query.cpf);
//     res.status(200).json(schedules);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao consultar agendamentos', error });
//   }
// };
const Schedule = require('../models/Schedule');

exports.createSchedule = async (req, res) => {
  try {
    console.log('Dados recebidos para agendamento:', req.body); // Adicionando log dos dados recebidos
    const schedule = await Schedule.create(req.body);
    res.status(201).json({ message: 'Agendamento criado com sucesso!', schedule });
  } catch (error) {
    console.error('Erro ao criar agendamento:', error); // Adicionando log de erro
    res.status(500).json({ message: 'Erro ao criar agendamento', error });
  }
};

exports.getSchedulesByCPF = async (req, res) => {
  try {
    const schedules = await Schedule.findByCPF(req.query.cpf);
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Erro ao consultar agendamentos:', error); // Adicionando log de erro
    res.status(500).json({ message: 'Erro ao consultar agendamentos', error });
  }
};
