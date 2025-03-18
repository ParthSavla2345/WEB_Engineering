// src/components/Contact.js
import React from 'react';

function Contact() {
  const randomContact = {
    phone: '1-800-123-4567',
    email: 'support@elearningplatform.com',
    address: '123 Learning St, Knowledge City, EDU 5678',
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us:</p>
      <ul>
        <li><strong>Phone:</strong> {randomContact.phone}</li>
        <li><strong>Email:</strong> <a href={`mailto:${randomContact.email}`}>{randomContact.email}</a></li>
        <li><strong>Address:</strong> {randomContact.address}</li>
      </ul>
    </div>
  );
}

export default Contact;
