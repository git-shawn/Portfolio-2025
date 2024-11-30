import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./contact-form.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "_captcha": "false",
  });

  const [hasSubmit, setHasSubmit] = useState(false);
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://formsubmit.co/93d5b6e7d304bf1896f0d8f2a35f82c6", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .then(setHasSubmit(true))
      .catch(error => console.log(error));
  };

  if (hasSubmit) {
    return (
      <div className={styles.submission} style={{height: `${height}px`}}>
        <p>Thanks!</p>
      </div>
    )
  } else {
    return (
      <div className={styles.form}>
        <form ref={ref} onSubmit={handleSubmit}>
          <label>Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Alice" required />
          </label>
          <label>Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="alice@example.com" required />
          </label>
          <label>Message
            <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    )
  }
}

export default ContactForm