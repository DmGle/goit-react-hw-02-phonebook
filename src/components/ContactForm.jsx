import React from 'react';
import './contactForm.css'

const ContactForm = ({ onSubmit, onChange, name, number }) => (
  <form className='contact-form' onSubmit={onSubmit}>
    <label>
      Name:
      <input type="text" name="name" value={name} onChange={onChange} required />
    </label>
    <label>
      Number:
      <input type="tel" name="number" value={number} onChange={onChange} required />
    </label>
    <button className='button' type="submit">Add Contact</button>
  </form>
);

export default ContactForm;