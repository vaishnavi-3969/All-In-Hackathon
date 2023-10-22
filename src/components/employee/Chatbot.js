import React, { useState, useRef } from 'react';

const OPENAI_API_KEY = 'your-openai-api-key';
const OPENAI_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const messageInputRef = useRef(null);

  const chat = async (e, userMessage) => {
    e.preventDefault();

    if (!userMessage) return;

    const userChat = {
      role: 'user',
      content: userMessage,
    };

    setChats([...chats, userChat]);
    setMessage('');

    try {
      const response = await fetch(OPENAI_ENDPOINT, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: userMessage,
          max_tokens: 50,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage = data.choices[0].text;
        const botChat = {
          role: 'bot',
          content: botMessage,
        };
        setChats([...chats, botChat]);
      } else {
        console.error('Error sending message to OpenAI API');
      }
    } catch (error) {
      console.error('Error sending message to OpenAI API:', error);
    }
  };

  const scrollToBottom = () => {
    if (messageInputRef.current) {
      messageInputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">EquiHire Chatbot</h1>
      <div className="chat-container" role="log">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`message ${chat.role === 'user' ? 'user' : 'bot'}`}
            role="message"
            aria-label={`${chat.role}: ${chat.content}`}
          >
            {chat.content}
          </div>
        ))}
        <div ref={messageInputRef} tabIndex="0" />
      </div>
      <form onSubmit={(e) => chat(e, message)} className="mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message here..."
          className="w-full p-2 border rounded-lg focus:outline-none"
          aria-label="Type a message"
          role="textbox"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={scrollToBottom}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
