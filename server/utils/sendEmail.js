 import nodemailer  from "nodemailer";

const sendEmail = () => async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
	         auth: {
				user: 'witsie101@gmail.com',
				pass:'ksjdpssycwkphbqp'
			},
		});

		var mailOptions = {
			from: 'witsie101@gmail.com',
			to: email,
			subject: subject,
			text: text,
		
		});

		  

		console.log("email sent successfully");
	} 
	catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

export default sendEmail;


/* import nodemailer  from "nodemailer";

const sendEmail = () => async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
	         auth: {
				user: 'witsie101@gmail.com',
				pass:'ksjdpssycwkphbqp'
			},
		});

		await
		 transporter.sendMail({
			from: 'witsie101@gmail.com',
			to: email,
			subject: subject,
			text: text,
		});

		  

		console.log("email sent successfully");
	} 
	catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

export default sendEmail;

 */