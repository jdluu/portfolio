import React from 'react';
import './Contact.css';
import '../../App.css';

const Contact = () => {
  return (
    <div class = "ContactBox" >
      <div class = "ContactParentColumn">
        <div class = "ContactChildColumn">
          <p class = "ContactHeader">Contact</p>
          <p class = "ContactDescription">Feel free to reach out to me!</p>
        </div>
        <input class = "NameInput" type = "text" placeholder = "Name" />
        <input class = "EmailInput" type = "text" placeholder = "Email" />
        <textarea class = "MessageInput" placeholder = "Message" />
        <button class = "SendButton">Send</button>
      </div>
    </div>
  );
}
export default Contact;