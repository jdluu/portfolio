import React from 'react';
import { ThemeContext } from '../../Theme';
import './Contact.css';
import '../../App.css';

const Contact = () => {
  return (
    <div class = "div1" >
      <div class = "div2">
        <div class = "div3">
          <p class = "p1">Contact</p>
          <p class = "p2">Feel free to reach out to me!</p>
        </div>
        <input class = "input1" type = "text" placeholder = "Name" />
        <input class = "input2" type = "text" placeholder = "Email" />
        <textarea class = "textarea1" placeholder = "Message" />
        <button class = "button1">Send</button>
      </div>
    </div>
  );
}
export default Contact;