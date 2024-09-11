// server/index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

// Basic response example
app.post('/message', (req, res) => {
  const { message } = req.body;
  let reply;

  if (message.toLowerCase().includes('hello')) {
    reply = 'Hi there!';
  } else if (message.toLowerCase().includes('how are you?')) {
    reply = 'I am fine, thank you!';
  } else if (message.toLowerCase().includes('maricar')) {
    reply = 'Maricar is truly stunning. Not only is she visually beautiful, but her warmth and genuine kindness really shine through. She has this amazing way of making everyone around her feel special and valued. It’s a joy to be around her!';
  } else {
    reply = 'Sorry, I did not understand that.';
  }

  res.json({ reply });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
