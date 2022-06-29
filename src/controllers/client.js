const client = require("../models/client");
const path = require("path");

module.exports = {
    createClient: (req, res) => {
		const body = req.body;
		const newClient = new client({
			name: body.name,
			mail: body.mail,
			phone: body.phone,
			created: Date.now(),
		});
		newClient.save((err, user)=>{
			if(err){
				return res.status(400).json({
					success:false,
					message:'An error was ocurred.',
					err,
				})
			}
			console.log(user)
			res.status(200).json({
				success:true,
				message:"Client created successfully.",
				user,
			});
		});
	},
	getAllClients: async (req, res)=>{
		try {
			let clients = await client.find({});
			res.status(200).json({
				success: true,
				message:"All clients.",
				clients
			});
		} catch (err) {
			res.status(500).json({
				success:false,
				message:"An error was ocurred in the request",
				err
			})
		}
	},
};
