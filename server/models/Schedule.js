// models/Schedule.js
const db = require('../config/db');

class Schedule {
  static async create(schedule) {
    const [result] = await db.execute(
      'INSERT INTO schedules (name, cpf, email, phone, carModel, placaCar, date, time, service, payment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [schedule.name, schedule.cpf, schedule.email, schedule.phone, schedule.carModel, schedule.placaCar, schedule.date, schedule.time, schedule.service, schedule.payment]
    );
    return result;
  }

  static async findByCPF(cpf) {
    const [rows] = await db.execute('SELECT * FROM schedules WHERE cpf = ?', [cpf]);
    return rows;
  }
}

module.exports = Schedule;
