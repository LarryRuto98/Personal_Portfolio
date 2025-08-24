import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Phone, LocationOn, GitHub, Instagram, Padding } from '@mui/icons-material';
import{Snackbar, Alert } from "@mui/material"


const ContactSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  padding: '100px 40px 40px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    padding: '80px 20px 40px',
  },
}));

const ContactContent = styled(Container)(({ theme }) => ({
  maxWidth: '1200px',
  flex: 1,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '20px',
}));

const TitleUnderline = styled(Box)(({ theme }) => ({
  width: '90px',
  height: '4px',
  backgroundColor: '#3b82f6',
  margin: '0 auto 60px',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  paddingRight: '40px',
  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
    marginBottom: '40px',
  },
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#3b82f6',
  marginBottom: '20px',
}));

const InfoDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#a0a0a0',
  lineHeight: 1.6,
  marginBottom: '40px',
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '15px',
  marginBottom: '20px',
  '& svg': {
    boxSizing: 'border-box',
    width: '30px',
    height: '30px',
    color: '#3b82f6Z',
    borderRadius: '50%',
    border: "2px solid #3b82f6",
    fontSize: '20px',
    marginTop: '2px',
  },
}));

const ContactLabel = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: '5px',
}));

const ContactValue = styled(Typography)(({ theme }) => ({
  color: '#a0a0a0',
  fontSize: '0.95rem',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  margin: "0 auto 20px auto",
  display: 'block',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1a1a1a',
    borderRadius: '18px',
    '& fieldset': {
      borderColor: '#333333',
      gap: '40px',
      borderRadius: '18px',
      backgroundColor: '#',
      
    },
    '&:hover fieldset': {
      borderColor: '#555555',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333333',
    },
    '& input, & textarea': {
      color: 'white',
      padding: '9px 8px',
      fontSize: '0.95rem',
      backgroundColor: 'transparent',
      
      
    },
    
  },
  '& .MuiInputLabel-root': {
    color: '#a0a0a0',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#a0a0a0',
  },
  [theme.breakpoints.down("sm")]:{
    maxWidth:"100%"
  },
  
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3b82f6',
  color: 'white',
  padding: '12px 30px',
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: 0,
  textTransform: 'none',
  borderRadius: '8px',
  position: 'relative',

  '&:hover': {
    backgroundColor: '#1d4ed8',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '25px',
  marginTop: '30px',
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '2px solid #3b82f6',
  color: '#white',
  width: '45px',
  height: '45px',
  '&:hover': {
    backgroundColor: '#3b82f6',
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #3b82f6',
  padding: '40px 0',
  marginBottom: '10px',
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
}));

const FooterBrand = styled(Box)(({ theme }) => ({
  '& .brand': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '5px',
    '& .highlight': {
      color: '#3b82f6',
    },
  },
  '& .tagline': {
    fontSize: '0.9rem',
    color: '#a0a0a0',
  },
}));

const FooterNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '38px',
    '& button': {
    color: '#a0a0a0',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: 0,
    marginTop:"9px",
    minWidth: 'auto',
    textTransform: 'none',
    justifyContent: 'flex-start',
    '&:hover': {
      color: '#3b82f6',
      backgroundColor: 'transparent',
    },
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#666666',
  textAlign: 'center',
  
}));

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
const [toast, setToast] = useState({
  open: false,
  message: "",
  severity: "success" as "success" | "error"
})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await fetch("https://formspree.io/f/xwpqgzvr", {
        method: "POST",
        headers: {
          Accept:"application/json"
        },
        body: new FormData(e.target as HTMLFormElement),
      });
      
      if(response.ok){
        setToast({open: true, message: "Message sent successfully!", severity: "success"});
        setFormData({name: "", email: "", subject: "", message: ""});
      } else{
        setToast({open: true, message: "Failed to send message.", severity: "error"});
      }
    } catch(error){
      console.error("Error submitting form:", error);
      setToast({open:true, message:"something went wrong", severity: "error"})
    }
    
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContent>
        <SectionTitle>Get In Touch</SectionTitle>
        <TitleUnderline />
        {/* Use flexbox for side-by-side layout on desktop */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: { xs: 4, md: 8 },
            width: '100%',
          }}
        >
          {/* Left: Contact Info */}
          <Box sx={{ flex: 1, minWidth: 280 }}>
            <ContactInfo>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoDescription>
                I’d love to hear from you! Whether it’s an inquiry, a collaboration, or an exciting opportunity, feel free to reach out. I’m always open to discussing new projects, exploring creative ideas, and contributing my skills to bring your vision to life
              </InfoDescription>
              <ContactItem>
                <Email />
                <Box>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>larryruto@gmail.com</ContactValue>
                </Box>
              </ContactItem>
              <ContactItem>
                <Phone />
                <Box>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactValue>+254 798981782</ContactValue>
                </Box>
              </ContactItem>
              <ContactItem>
                <LocationOn />
                <Box>
                  <ContactLabel>Location</ContactLabel>
                  <ContactValue>Nairobi, Kenya</ContactValue>
                </Box>
              </ContactItem>
              
            </ContactInfo>
          </Box>
          {/* Right: Form and Submit Button */}
          <Box
            sx={{
              flex: 1,
              minWidth: 280,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: '100%', maxWidth: '450px' }}
            >
              <StyledTextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{mb: 2}}
              />
              <StyledTextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{mb: 2}}
              />
              <StyledTextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{mb: 2}}
              />
              <StyledTextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
              
                <SubmitButton type="submit" sx={{width: '50%', mt: 2, mb: 4}}>
                  Send Message
                </SubmitButton>
              
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={toast.open}
          autoHideDuration={4000}
          onClose = {() => setToast({...toast, open: false})}
          anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
        >
          <Alert
            onClose ={() => setToast({...toast, open: false})}
            severity={toast.severity}
            sx={{width: "100%",...(toast.severity === "success" && { backgroundColor: "3b82f6", color: "#fff", "& .MuiAlert-icon": {color: "#fff"},}),
          }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </ContactContent>

      <Footer>
        <Container maxWidth="lg">
          <FooterContent>
            <FooterBrand>
              <Box component="span" sx={{ color: "#3B82F6", fontWeight: "bold" , fontSize: "1.5rem" ,position: "relative", zIndex: 1}}>
               LarryThe
              </Box><Box component="span" sx={{fontSize: "1.5rem", fontWeight: "bold"}}>Dev</Box>
              <div className="tagline">FullStack Dev</div>
            </FooterBrand>
            
            <FooterNav>
              <Button onClick={() => scrollToSection('home')}>Home</Button>
              <Button onClick={() => scrollToSection('about')}>About</Button>
              <Button onClick={() => scrollToSection('skills')}>Skills</Button>
              <Button onClick={() => scrollToSection('projects')}>Projects</Button>
              <Button onClick={() => scrollToSection('contact')}>Contact</Button>
            </FooterNav>
            
            <SocialIcons>
              <SocialIcon component="a" href="https://github.com/LarryRuto98" target="_blank" aria-label="GitHub">
                <GitHub />
              </SocialIcon>
              <SocialIcon component="a" href="https://instagram.com/larry_ruto" target="_blank" aria-label="Instagram">
                <Instagram />
              </SocialIcon>
            </SocialIcons>
          </FooterContent>
          
          <Copyright>
            © 2025 Larry. All Rights Reserved.
          </Copyright>
        </Container>
      </Footer>
    </ContactSection>
  );
};
export default Contact;