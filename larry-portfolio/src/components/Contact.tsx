import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Phone, LocationOn, GitHub, Instagram } from '@mui/icons-material';



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
  width: '80px',
  height: '4px',
  backgroundColor: '#4ade80',
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
  color: '#4ade80',
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
    color: '#4ade80',
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
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1a1a1a',
    '& fieldset': {
      borderColor: '#333333',
    },
    '&:hover fieldset': {
      borderColor: '#4ade80',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4ade80',
    },
    '& input, & textarea': {
      color: '#ffffff',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#a0a0a0',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#4ade80',
  },
  marginBottom: '20px',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4ade80',
  color: '#000000',
  padding: '12px 30px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#22c55e',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  marginTop: '30px',
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '2px solid #4ade80',
  color: '#4ade80',
  width: '45px',
  height: '45px',
  '&:hover': {
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #333333',
  padding: '40px 0',
  marginTop: '60px',
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '40px',
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
      color: '#4ade80',
    },
  },
  '& .tagline': {
    fontSize: '0.9rem',
    color: '#a0a0a0',
  },
}));

const FooterNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  '& button': {
    color: '#a0a0a0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    padding: 0,
    minWidth: 'auto',
    textTransform: 'none',
    justifyContent: 'flex-start',
    '&:hover': {
      color: '#4ade80',
      backgroundColor: 'transparent',
    },
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#666666',
  textAlign: 'center',
  marginTop: '20px',
}));

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
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
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ContactInfo>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoDescription>
                Feel free to reach out to me for any inquiries or opportunities. I'm 
                always open to discussing new projects, creative ideas, or 
                opportunities to be part of your vision.
              </InfoDescription>
              
              <ContactItem>
                <Email />
                <Box>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>rodneyglgi@gmail.com</ContactValue>
                </Box>
              </ContactItem>
              
              <ContactItem>
                <Phone />
                <Box>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactValue>+254 79813204</ContactValue>
                </Box>
              </ContactItem>
              
              <ContactItem>
                <LocationOn />
                <Box>
                  <ContactLabel>Location</ContactLabel>
                  <ContactValue>Nairobi, Kenya</ContactValue>
                </Box>
              </ContactItem>

              <SocialIcons>
                <SocialIcon>
                  <GitHub />
                </SocialIcon>
                <SocialIcon>
                  <Instagram />
                </SocialIcon>
              </SocialIcons>
            </ContactInfo>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit}>
              <StyledTextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
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
              />
              <SubmitButton type="submit">
                Send Message
              </SubmitButton>
            </Box>
          </Grid>
        </Grid>
      </ContactContent>

      <Footer>
        <Container maxWidth="lg">
          <FooterContent>
            <FooterBrand>
              <div className="brand">
                <span className="highlight">LarryThe</span>Dev
              </div>
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
              <SocialIcon>
                <GitHub />
              </SocialIcon>
              <SocialIcon>
                <Instagram />
              </SocialIcon>
            </SocialIcons>
          </FooterContent>
          
          <Copyright>
            © 2023 Rodney. All Rights Reserved.
          </Copyright>
        </Container>
      </Footer>
    </ContactSection>
  );
};

export default Contact;