import React from 'react';

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

  return (
    <div style={styles.center}>
      <h1>Contact Page</h1>
      <p>contact me by submitting this form and ill get back to you at the email you leave me</p>
      <form style={styles.form}>
        {/* name, email, message to me, all fields is req */}
        <div className="mb-3">
          <label for="userName" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="userName"></input>
        </div>
        <div className="mb-3">
          <label for="userEmail" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="userEmail"></input>
        </div>
        <div className="mb-3">
          <label for="userMessage" className="form-label">Message for Me</label>
          <input type="text" className="form-control" id="userMessage"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
