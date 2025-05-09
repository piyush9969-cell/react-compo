import React from 'react';

const Contact = () => {
  return (
    <div style={{ flexGrow:1, padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feel free to reach out to us through the following channels:
      </p>
      <ul>
        <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
        <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
        <li>Address: 123 Main Street, Mumbai, Maharashtra</li>
      </ul>
      <p>We look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;