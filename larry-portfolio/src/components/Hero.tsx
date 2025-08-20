import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from "motion/react";


const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#0a0a0a',
  padding: '0 40px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    gap: '40px',
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '600px',
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 'bold',
  color: '#ffffff',
  marginBottom: '20px',
  lineHeight: 1.1,
  '& .highlight': {
    color: '#3B82F6',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#3B82F6',
  fontWeight: 500,
  marginBottom: '20px',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#a0a0a0',
  lineHeight: 1.6,
  marginBottom: '40px',
  maxWidth: '500px',
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3B82F6',
  color: 'white',
  padding: '12px 30px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#1D4ED8',
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  border: '2px solid #3B82F6',
  color: 'white',
  padding: '10px 28px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#3B82F6',
  },
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: '300px',
  height: '300px',
  marginLeft: '60px',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    width: '250px',
    height: '250px',
  },
}));

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<HeroSection id="home">
  <HeroContent>
    <TextSection>
      <MainTitle
        as={motion.h1}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, There <span className="highlight">Its Larry</span>
      </MainTitle>

      <Subtitle
        as={motion.h2}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        FullStack Software Developer
      </Subtitle>

      <Description
        as={motion.p}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I’m a full-stack software developer who loves turning ideas into real-world solutions.
      </Description>

      <ButtonGroup
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <PrimaryButton onClick={() => scrollToSection("projects")}>
          Explore My Projects
        </PrimaryButton>
        <SecondaryButton onClick={() => scrollToSection("contact")}>
          Contact Me
        </SecondaryButton>
      </ButtonGroup>
    </TextSection>

    <ProfileImage
      as={motion.img}
      src="/Profile.jpg"
      alt="Larry"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      style={{ borderRadius: "50%", objectFit: "cover", marginTop: '40px' }}
    />
  </HeroContent>
</HeroSection>
  );
};

export default Hero;