const router = require("express-promise-router")();
const { getAllAppointments, getClientAppointments, createAppointment, completeAppointment } = require("../controllers/appointment");
const { createClient, getAllClients } = require("../controllers/client");

//GET ALL ROUTES
router.get('/appointments',getAllAppointments);
router.get('/clients',getAllClients);
//GET CLIENT APPOINTMENTS
router.get("/clientAppointments", getClientAppointments);
//CREATE ROUTES
router.post('/appointment',createAppointment);
router.post('/client',createClient);
//PUT ROUTES
router.put('/appointment',completeAppointment);

module.exports = router;
