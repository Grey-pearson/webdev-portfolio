import React from 'react';
import { useState } from 'react';

const styles = {
  form: {
    width: '400px',
    margin: 'auto',
    backgroundColor: 'lightgrey',
    padding: '10px',
    borderRadius: '5px'
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
};


export default function Contact() {

  // set logic to get send the form idk how to do that lol

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const submitForm = (event) => {
    event.preventDefault()
    if (!inputs.userName) {
      alert('missing username')
      return
    }
    if (!inputs.userEmail) {
      alert('missing email')
      return
    }
    if (!inputs.userMessage) {
      alert('missing message')
      return
    }

    // send them to myself?? idk

    alert('Message Sent')
  }

  return (
    <div style={styles.center}>
      <h1>Contact Page</h1>
      <p>contact me by submitting this form and ill get back to you at the email you leave me</p>
      <form style={styles.form} onSubmit={submitForm}>
        {/* name, email, message to me, all fields is req */}
        <div className="mb-3">
          <label for="userName" className="form-label">Your Name</label>
          <input type="text" className="form-control" name="userName" value={inputs.userName} onChange={handleChange}></input>
        </div>
        <div className="mb-3">
          <label for="userEmail" className="form-label">Your Email</label>
          <input type="email" className="form-control" name="userEmail" value={inputs.userEmail} onChange={handleChange}></input>
        </div>
        <div className="mb-3">
          <label for="userMessage" className="form-label">Message for Me</label>
          <input type="text" className="form-control" name="userMessage" value={inputs.userMessage} onChange={handleChange}></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
