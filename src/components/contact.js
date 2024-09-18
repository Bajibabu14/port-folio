import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <br></br>
      <p>Let’s Connect
      If you’d like to collaborate or just have a chat about web development and technology.Feel free to reach out to me on following social media accounts.
      <ul>
        <li><a href='#'>Linkdin</a></li>
        <br></br>
        <li><a href='#'>Twitter</a></li>
        <br></br>
        <li><a href='#'>Instagram</a></li>
        <br></br>
        <li><a href='#'>Facebook</a></li>
      </ul>
      </p>
    </section>
  );
}

export default Contact;
