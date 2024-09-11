// client/src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header'; 
import Footer from './components/Footer';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const api = process.env.REACT_APP_LOCAL_API;
  
  const handleSend = async () => {
    try {
      const response = await axios.post(`${api}/message`, { message });
      console.log('Response from API:', response.data);
      const replyMessage = response.data.reply;
      setReply(replyMessage);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <Header />  {/* Include Header component */}

      <div className="chat-container">
        <h1>Chatbot</h1>
        <textarea
          rows="4"
          cols="50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button onClick={handleSend}>Send</button>
        <div>
          <h2>Reply:</h2>
          <p>{reply}</p>
        </div>
      </div>

      <Footer />  {/* Include Footer component */}
    </div>
  );
};

export default Chatbot;
