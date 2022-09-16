const mongoose = require("mongoose");

module.exports = () => {
    const CONNECTION_URL =  encodeURI(process.env.DB);
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(CONNECTION_URL, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};