import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAILEON_EMAIL,
		pass: process.env.MAILEON_PW,
	},
});

const sendEmail = async (to, subject, text) => {
	try {
		const mailOptions = {
			from: process.env.MAILEON_EMAIL,
			to,
			subject,
			text,
		};
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent:", info.response);
	} catch (error) {
		console.error("Error sending email:", error);
	}
};

const [to, subject, text] = process.argv.slice(2);

if (!to || !subject || !text) {
	console.error("Usage: node index.js <to> <subject> <text>");
	process.exit(1);
}

sendEmail(to, subject, text);
