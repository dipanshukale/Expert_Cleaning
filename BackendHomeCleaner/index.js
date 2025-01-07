import "../BackendHomeCleaner/database/connection.js";
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { sendMail } from "../BackendHomeCleaner/utils/sendmail.js";
import Booking from "../BackendHomeCleaner/database/models/BookingSchema.js";
import nodeMailer from "nodemailer";

config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		methods: ["POST"],
		credentials: true,
	})
);

app.post("/customer/contact", async (req, res, next) => {
	try {
		const { name, email, phone, message } = req.body;
		if ((!name, !email, !phone, !message)) {
			return next(res.status(400).json({ error: false, message: "Invalid" }));
		}
		await sendMail({
			email: "kaledipanshu781@gmail.com",
			subject: "Expert Cleaning Website Contact Form",
			name,
			userEmail: email,
			phone,
			message,
		});
		res.status(200).json({ name: name, email: email, phone: phone });
	} catch (error) {
		console.error(error);
		res.status(500).json({ name: name, email: email, phone: phone });
	}
});

app.post("/clients/booking", async (req, res, next) => {
	try {
		const { name, email, phone, cleaningType, bookingDate, message } = req.body;
		if (!name || !email || !phone || !cleaningType || !bookingDate || !message) {
			return next(res.status(400).send({ error: "all fields are required"}));
        }

		const bookingData = new Booking({
			name,
			email,
			phone,
			cleaningType,
			bookingDate: new Date(bookingDate),
			message,
		});

    	await bookingData.save();
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
            from: email,
            to: "dipanshukale469@gmail.com",
            subject: "Home Cleaning Website Booking System",
            text : `${name} has been booked a slot for ${cleaningType} on date ${bookingDate} contact information of customer here is e-mail of customer is ${email} and phone number is ${phone}`
        }

        await transporter.sendMail(mailOptions);
		res.status(201).send({message : "booking successfully"});
    } catch (error) {
        console.log("error handling booking: ",error);
		res.status(500).send({ error: error });
	}
});


app.post("/customer/quote", async(req, res) => {
	const { email } = req.body;

	try {
		if (!email) {
			return res.status(400).send({ error: "email is required" });
		}

		  const transporter = nodeMailer.createTransport({
				host: process.env.SMTP_HOST,
				port: process.env.SMTP_PORT,
				service: process.env.SMTP_SERVICE,
				auth: {
					user: process.env.SMTP_MAIL,
					pass: process.env.SMTP_PASS,
				},
		  });
		
		const mailoptions = {
			from: email,
			to: "dipanshukale469@gmail.com",
			subject: "Home Cleaning Website Quote Request",
			text : `Customer ${email} has requested a quote for home cleaning services`
		}

		await transporter.sendMail(mailoptions);
		res.status(201).send({ message: "quote send successfully" });

	} catch (error) {
		res.status(500).send({ message: "Error sending quote" });
	}
});

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
