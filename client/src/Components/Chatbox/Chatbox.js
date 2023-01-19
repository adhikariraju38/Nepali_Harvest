import React, { useState } from "react";
import "./Chatbox.css";
import image1 from "../icons/comment.png";
import image from "../icons/telegram.png";


function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }

  function writeMessage() {
    const today = new Date();
    const newMessage1 = {
        text: text.trim().replace(/\n/g, '<br>\n'),
        time: `${addZero(today.getHours())}:${addZero(today.getMinutes())}`,
        sent: true
    };
    setMessages(prevMessages => [...prevMessages, newMessage1]);


    setText('');
}

  function autoReply() {
    const today = new Date();
    const newMessage = {
        text: 'Thank you for your awesome support!',
        time:` ${addZero(today.getHours())}:${addZero(today.getMinutes())}`,
        sent: false
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);

}

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length > 0) {
      writeMessage();
      setTimeout(autoReply, 1000);
    }
  }

  return (
    <div className="chatbox-wrapper">
      <div className="chatbox-toggle" onClick={handleToggleClick}>
      <img src={image1} width="30px" height="30px" alt=""></img>
      </div>
      {isOpen && (
        <div className="chatbox-message-wrapper">
          <div className="chatbox-message-header">
            <div className="chatbox-message-profile">
              <img
                src="https://media.istockphoto.com/id/1283599879/photo/happiness-and-wellbeing.jpg?s=612x612&w=0&k=20&c=3JSSHPtdhL0dtA1zcVu4mfNw6FVlskRC2kk_Rl9FKU8="
                alt=""
                className="chatbox-message-image"
              />
              <div>
                <h4 className="chatbox-message-name">Nepali Harvest</h4>
                <p className="chatbox-message-status">Recently Seen</p>
              </div>
            </div>
          </div>
          <div className="chatbox-message-content">
            {messages.length === 0 && (
              <h4 className="chatbox-message-no-message">
                You don't have message yet!
              </h4>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbox-message-item ${
                  message.sent ? "sent" : "received"
                }`}
              >
                <span className="chatbox-message-item-text">
                  {message.text}
                </span>
                <span className="chatbox-message-item-time float-right">{message.time}</span>
              </div>
            ))}
          </div>
          <div className="chatbox-message-bottom">
            <form className="chatbox-message-form" onSubmit={handleSubmit}>
              <textarea
                rows={1}
                placeholder="Type message..."
                className="chatbox-message-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button type="submit" className="chatbox-message-submit">
              <img src={image} width="40px" height="40px" alt=""></img>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbox;
