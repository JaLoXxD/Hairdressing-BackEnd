const router = require("express-promise-router")();
const { getAllAppointments, createAppointment, completeAppointment } = require("../controllers/appointment");
const { createClient, getAllClients } = require("../controllers/client");

//GET ALL ROUTES
router.get('/appointments',getAllAppointments);
router.get('/clients',getAllClients);
//CREATE ROUTES
router.post('/appointment',createAppointment);
router.post('/client',createClient);
//PUT ROUTES
router.put('/appointment',completeAppointment);

module.exports = router;
