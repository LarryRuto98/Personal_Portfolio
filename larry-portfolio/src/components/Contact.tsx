import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Phone, LocationOn, GitHub, Instagram, Padding } from '@mui/icons-material';



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
  maxWidth: '60%',
  minWidth: '2',
  position: 'relative',
  left: '400px',
  bottom: '340px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1a1a1a',
    borderRadius: '18px',
    '& fieldset': {
      borderColor: '#333333',
      gap: '40px',
      
    },
    '&:hover fieldset': {
      borderColor: '#3b82f6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3b82f6',
    },
    '& input, & textarea': {
      color: 'white',
      Padding: '9px 8px',
      fontSize: '0.95rem',
      backgroundColor: 'transparent',
      
      
    },
    
  },
  '& .MuiInputLabel-root': {
    color: '#a0a0a0',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#3b82f6',
  },
  minHeight: '24px',
  marginBottom: '20px',
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
  bottom: '140px',
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

              <SocialIcons>
                <SocialIcon component="a" href="https://github.com/LarryRuto98" target="_blank" aria-label="GitHub">
                  <GitHub />
                </SocialIcon>
                <SocialIcon component="a" href="https://instagram.com/larry_ruto" target="_blank" aria-label="Instagram">
                  <Instagram />
                </SocialIcon>
              </SocialIcons>
            </ContactInfo>
          </Grid>
          
          <Grid item xs={12} md={4}>
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