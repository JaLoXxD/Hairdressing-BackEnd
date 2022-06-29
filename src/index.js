const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //READ JSON
app.use(cors());
require("dotenv").config();
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.set("port", port);
require("./database");

//Static Files
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
app.use(express.static("public/uploads"));

//ROUTES
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
	console.log("server listen on port " + app.get("port") + "...");
});
