const appointment = require("../models/appointment");
const path = require("path");

module.exports = {
	createAppointment: (req, res) => {
		const body = req.body;
		const newAppointment = new appointment({
			clientId: body.clientId,
			type: body.type,
			created: Date.now(),
            date: body.date,
			finished: false,
		});
		newAppointment.save((err, appointment) => {
			if (err) {
				return res.status(400).json({
					success: false,
					message: "An error was ocurred.",
					err,
				});
			}
			console.log(appointment);
			res.status(200).json({
				success: true,
				message: "Appointment created successfully.",
				appointment,
			});
		});
	},
	getAllAppointments: async (req, res) => {
		try {
			let appointments = await appointment.find({});
			res.status(200).json({
				success: true,
				message: "All clients.",
				appointments,
			});
		} catch (err) {
			res.status(500).json({
				success: false,
				message: "An error was ocurred in the request",
				err,
			});
		}
	},
	completeAppointment: async (req, res) => {
		try {
			let body = req.body;
			let filter = {
				_id: body.appointmentId,
			};
            let newData = {
                finished: true,
            };
			let resp = await appointment.updateOne(filter, newData);
            return res.status(200).json({
                success: true,
                message:"Appointment completed successfully",
                resp,
            })
		} catch (err) {
			res.status(500).json({
				success: false,
				message: "An error was ocurred in the request",
				err,
			});
		}
	},
};
