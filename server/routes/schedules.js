// // routes/schedules.js
// const express = require('express');
// const router = express.Router();
// const scheduleController = require('../controllers/ScheduleController');

// router.post('../agendar', scheduleController.createSchedule);
// router.get('../consultar-horario', scheduleController.getSchedulesByCPF);

// module.exports = router;
// routes/schedules.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.post('/agendar', scheduleController.createSchedule);
router.get('/consultar-horario', scheduleController.getSchedulesByCPF);

module.exports = router;
