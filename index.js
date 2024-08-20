const express = require("express");
const app = express();
const PORT = 5000;

const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();
require("./Database/DB");

app.use(cors());
app.use(express.json());
const { data, answers } = require("./data");

const AuthRouter = require("./Routes/AuthRouter");
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.post("/send-results", async (req, res) => {
  const { email, selectedOptions } = req.body;

  let score = 0;
  const results = data.map((question, index) => {
    const userAnswerIndex = selectedOptions[index];
    const correctAnswerIndex = answers[index];

    if (userAnswerIndex === correctAnswerIndex) {
      score += 1;
    }

    return {
      question: question.question,
      userAnswer: question.options[userAnswerIndex] || "Not Answered",
      correctAnswer: question.options[correctAnswerIndex],
    };
  });

  const emailContent = `
    Hello,
    
    Thank you for taking the quiz. Here are your results:
    Score: ${score}/${data.length}

    Questions and Your Answers:
    
    ${results
      .map(
        (result, index) =>
          `Q${index + 1}: ${result.question}
        Your Answer: ${result.userAnswer}
        Correct Answer: ${result.correctAnswer}`
      )
      .join("\n\n")}
    
    
      Thank you for participating!
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Your Quiz Results",
    text: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Results sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending results");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
