import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  }

  return (

    <div style={{ flex: 1, flexDirection: 'column', padding: "20px", fontFamily: 'Arial, sans-serif' }}>
      <div style={{ flexGrow: 1, padding: '20px', fontFamily: 'Arial, sans-serif', paddingRight: 20 }}>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feel free to reach out to us through the following channels:
        </p>
        <ul>
          <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
          <li>Phone: <a href="tel:+9120862199990">+912086219999</a></li>
          <li>Address: 123 Main Street, Mumbai, Maharashtra</li>
        </ul>
        <p>We look forward to hearing from you!</p>
      </div>

      <div style={{ flex: 1, paddingLeft: 20 }}>
      <h2>{submitted ? "Message sent!" : "Send a message"}</h2>
        {submitted ? (
          <p style={{ color: 'green' }}>We'll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ flexDirection: "column", display: 'flex', gap: '10px' }}>
              <label>Name</label>
              <input style={{
                width: "300px", // Set a fixed width
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              
              }}  {...register("name", { required: "Name is required" })} />
              {errors.name && <p style={{ color: 'red', fontSize: "12px" }}>{errors.name.message}</p>}
              <label>Your Email:</label>
              <input type='email' style={{
                width: "300px", // Set a fixed width
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                
              }} {...register("email", { required: "Email is required" })} />
              {errors.email && <p style={{ color: 'red', fontSize: "12px" }}>{errors.email.message}</p>}
            </div>
            <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#020202', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;