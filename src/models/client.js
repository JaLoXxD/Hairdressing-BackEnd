const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const clientSchema = new Schema({
	name: { type: String },
	mail: { type: String, unique: true },
    phone: { type: Number},
	//password: { type: String },
	//page: { type: String },
	created: { type: String },
});

clientSchema.plugin(uniqueValidator, {
	message: "{PATH} debe de ser unico",
});

module.exports = model("client", clientSchema);
