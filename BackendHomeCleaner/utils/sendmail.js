import nodeMailer from "nodemailer";

export const sendMail = async (options) => {
	const transporter = nodeMailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		service: process.env.SMTP_SERVICE,
		auth: {
			user: process.env.SMTP_MAIL,
			pass: process.env.SMTP_PASS,
		},
	});

	const mailOptions = {
		from: options.userEmail,
		to: options.email,
		subject: options.subject,
        text: `you Have a Mail from ${options.name}\n\n 
        Email Id  : ${options.userEmail}\n\n phone number  of cutomer : ${options.phone} \n\n message of cutomer : ${options.message}\n\n`,
	};

	await transporter.sendMail(mailOptions);
};
