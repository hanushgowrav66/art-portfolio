import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import emailjs from "emailjs-com";
import "../styles.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vv4ws6o",
        "template_mactyce",
        {
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
          to_email: "hanushgowrav66@gmail.com",
        },
        "geu7E96jD_Wlh0sEF"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", subject: "", message: "" });
      })
      .catch((error) => console.error("Email send error:", error));
  };

  return (
    <Container maxWidth="sm" className="contact-container">
      <Typography variant="h3" fontWeight="bold" className="gallery-title">
        Contact Me
      </Typography>
      {/* Contact Form */}
      <Box component="form" onSubmit={handleSubmit} className="contact-form">
        <TextField
          label="Your Name"
          name="name"
          fullWidth
          required
          multiline
          onChange={handleChange}
        />
        <TextField
          label="Subject"
          name="subject"
          fullWidth
          required
          multiline
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          required
          multiline
          rows={4}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" fullWidth>
          Send Message
        </Button>
      </Box>
      {/* Social Icons */}
      <Box className="contact-icons">
        <IconButton
          component="a"
          href="mailto:hanushgowrav66@gmail.com"
          target="_blank"
          sx={{ color: "#D44638" }}
        >
          <EmailIcon sx={{ fontSize: 50 }} />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/hanush_gowrav"
          target="_blank"
          sx={{ color: "#E4405F" }}
        >
          <InstagramIcon sx={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/hanushgowrav66"
          target="_blank"
          sx={{ color: "#0077B5" }}
        >
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://hanushgowrav66.github.io/"
          target="_blank"
          sx={{ color: "black" }}
        >
          <LanguageIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>{" "}
      <Typography variant="h6" sx={{ mt: 2 }}>
        📞{" "}
        <a
          href="tel:+16076634888"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          +1 607 663 4888
        </a>
      </Typography>
      <Typography variant="h6">
        📞{" "}
        <a
          href="tel:+919686527365"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          +91 96865 27365
        </a>
      </Typography>
    </Container>
  );
}
