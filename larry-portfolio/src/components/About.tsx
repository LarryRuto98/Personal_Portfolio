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
          Hi, I am a passionate Software Engineer with a strong foundation in Python, JavaScript, React, and Flask, as well as experience working with SQL databases and modern web development tools.I recently graduated from Moringa School, where I honed my skills in building full-stack applications, problem solving, and collaborating on real-world projects.
        </AboutText>
        
        <AboutText>
         I enjoy creating scalable, user-friendly, and efficient software solutions that not only solve problems but also deliver a great user experience. My interests span from frontend development, where I focus on clean design and responsiveness, to backend systems, where I ensure data integrity and performance.
        </AboutText>
        
        <AboutText>
          Beyond coding, I’m passionate about continuous learning, teamwork, and innovation. I thrive in environments where I can contribute to impactful projects, grow with a team, and apply creative ideas to real challenges.

          When I’m not coding, you’ll probably find me exploring new tech trends, contributing to personal projects, or collaborating on open-source initiatives.
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