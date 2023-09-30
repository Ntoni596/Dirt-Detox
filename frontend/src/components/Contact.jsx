import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send the form data to the backend for email processing
    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // You can display a success message to the user here
  
        // Clear the form fields by resetting formData to an empty state
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle errors and display an error message to the user
      });
  };

  return (
    <div>
      <div className="heading">Contact Us</div>
      <form onSubmit={handleSubmit} className="contact-form">
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="phoneNumber">Phone Number:</label>
    <input
      type="tel"
      id="phoneNumber"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      placeholder="Enter your phone number"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message:</label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Enter your message"
      required
    ></textarea>
  </div>
  <button type="submit" className="submit-button">Submit</button>
</form>

    </div>
  );
}

export default ContactForm;
