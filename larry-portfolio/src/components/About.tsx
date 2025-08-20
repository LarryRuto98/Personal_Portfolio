import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const AboutSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  padding: '100px 40px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '80px 20px',
  },
}));

const AboutContent = styled(Container)(({ theme }) => ({
  maxWidth: '1000px',
  textAlign: 'left',
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
  backgroundColor: '#3b82f6',
  margin: '0 auto 60px',
}));

const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#a0a0a0',
  lineHeight: 1.7,
  marginBottom: '30px',
  textAlign: 'left',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  marginTop: '60px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  '& svg': {
    color: '3b82f6',
    fontSize: '20px',
  },
  '& span': {
    color: '#a0a0a0',
    fontSize: '16px',
  },
}));

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <SectionTitle>About Me</SectionTitle>
        <TitleUnderline />
        
        <AboutText>
          I am a passionate Frontend Developer with expertise in creating responsive and user-friendly web applications. My journey in web 
          development started with HTML, CSS, and JavaScript, and has evolved to include modern frameworks and Web3 technologies.
        </AboutText>
        
        <AboutText>
          With a strong foundation in UI/UX principles and a keen eye for design, I strive to create seamless digital experiences that not only 
          look great but also perform exceptionally well across all devices.
        </AboutText>
        
        <AboutText>
          My recent focus has been on blockchain technology, particularly Ethereum and Solidity development, where I build decentralized 
          applications that leverage the power of Web3.
        </AboutText>

        <ContactInfo>
          <ContactItem>
            <Email />
            <span>larryruto@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <Phone />
            <span>+254 798981782</span>
          </ContactItem>
          <ContactItem>
            <LocationOn />
            <span>Nairobi, Kenya</span>
          </ContactItem>
        </ContactInfo>
      </AboutContent>
    </AboutSection>
  );
};

export default About;