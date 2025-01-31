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
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
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
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>

      {/* Contact Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 4, textAlign: "left" }}
      >
        <TextField
          label="Your Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Subject"
          name="subject"
          variant="outlined"
          fullWidth
          required
          value={formData.subject}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 3 }}>
        <IconButton
          component="a"
          href="mailto:hanushgowrav66@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#D44638" }}
        >
          <EmailIcon sx={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          component="a"
          href="tel:+1607663488"
          sx={{ color: "#4CAF50" }}
        >
          <PhoneIcon sx={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/hanush_gowrav"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#E4405F" }}
        >
          <InstagramIcon sx={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/hanushgowrav66"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#0077B5" }}
        >
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://hanushgowrav66.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#000" }}
        >
          <LanguageIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>

      {/* Phone Numbers */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        📞 +1 607 663 488 | +91 96865 27365
      </Typography>
    </Container>
  );
}
