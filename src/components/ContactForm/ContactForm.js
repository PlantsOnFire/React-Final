import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className='p-0'
      id='contact-form'
    >
      <h1>Contact Us</h1>
      <div className='form-group row m-0 align-items-center'>
        <label htmlFor='name' className='col-auto mb-1'>Name:</label>
        <input id='name' type="text" placeholder="Your name" name="name" required size="71" className='form-control' />
      </div>
      <br/>
      <div className='form-group row m-0 align-items-center'>
        <label htmlFor='email' className='col-auto mb-1'>Email:</label>
        <input type="email" placeholder="Email" name="email" required size="71" className='form-control'/>
      </div>
      <br/>
      <div className='form-group row m-0 align-items-center'>
        <label htmlFor='message' className='col-auto mb-1'>Message:</label>
        <textarea id='message' placeholder="Your message" name="message" required rows="5" cols="70" className='form-control'/>
      </div>
      <br/>
      <div className="submitBtn">
        <button  type="submit" className='button-secondary'> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;