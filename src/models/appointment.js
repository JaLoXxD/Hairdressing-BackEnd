const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
	clientId: {
		type: Schema.Types.ObjectId,
		ref: "client",
	},
	type: { type: String },
	created: { type: Date },
	date: { type: Date },
	finished: { type: Boolean }
});

module.exports = model("appointment", appointmentSchema);
