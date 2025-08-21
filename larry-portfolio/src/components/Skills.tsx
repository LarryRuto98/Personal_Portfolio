import React from 'react';
import { Box, Typography, Container, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Code, Web, Language, AccountTree, Storage, DataObject, Terminal, DevicesOther, Cloud, Api } from '@mui/icons-material';
import { FaFigma, FaTrello } from "react-icons/fa";
import { SiJira, SiCanva } from "react-icons/si";

// Fixed: Use correct MUI icons and import them above

const SkillsSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  padding: '100px 40px',
  display: 'flex',
  alignItems: 'stretch',
  [theme.breakpoints.down('md')]: {
    padding: '80px 20px',
  },
}));

const SkillsContent = styled(Container)(({ theme }) => ({
  maxWidth: '1200px',
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

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#3b82f6',
  textAlign: 'center',
  marginBottom: '30px',
  marginTop: '40px',
  '&:first-of-type': {
    marginTop: 0,
  },
}));

const SkillCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  border: '1px solid #333333',
  borderRadius: '12px',
  textAlign: 'center',
  padding: '30px 20px',
  height: '160px',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#3b82f6',
  },
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  '& svg': {
    fontSize: '48px',
    color: '#3b82f6',
    marginBottom: '15px',
  },
}));

const SkillName = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#ffffff',
}));

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name }) => (
  <Grid item xs={12} sm={6} md={3}>
    <SkillCard>
      <SkillIcon>{icon}</SkillIcon>
      <SkillName>{name}</SkillName>
    </SkillCard>
  </Grid>
);

const frontendSkills = [
  { icon: <Language />, name: 'HTML5' },
  { icon: <Web />, name: 'CSS3' },
  { icon: <Code />, name: 'JavaScript' },
  { icon: <AccountTree />, name: 'React' },
];

const backendSkills = [
  { icon: <DataObject />, name: "Python" },
  { icon: <Storage />, name: "SQL" },
  { icon: <Cloud />, name: "MongoDB" },
  { icon: <Api />, name: "Flask" },
];

const collaborativeTools = [
  { icon: <SiJira size={24} color="#3b82f6" />, name: "Jira" },
  { icon: <FaTrello size={24} color="#3b82f6" />, name: "Trello" },
  { icon: <SiCanva size={24} color="#3b82f6" />, name: "Canva" },
  { icon: <FaFigma size={24} color="#3b82f6" />, name: "Figma" },
];
const toolsSkills = [
  { icon: <AccountTree />, name: 'Git' },
  { icon: <Storage />, name: 'NPM' },
  { icon: <Terminal />, name: 'Command Line' },
  { icon: <DevicesOther />, name: 'Responsive Design' },
];

const Skills: React.FC = () => {
  return (
     <SkillsSection id="skills">
      <SkillsContent>
        <SectionTitle>My Skills</SectionTitle>
        <TitleUnderline />

        {/* 2x2 grid for categories */}
        <Grid container spacing={15}>
          {/* Top Left - Frontend */}
          <Grid item xs={12} md={4}>
            <CategoryTitle>Frontend Development</CategoryTitle>
            <Grid container spacing={1}>
              {frontendSkills.map((skill, index) => (
                <SkillItem key={index} icon={skill.icon} name={skill.name} />
              ))}
            </Grid>
          </Grid>

          {/* Top Right - Backend */}
          <Grid item xs={12} md={4}>
            <CategoryTitle>Backend Development</CategoryTitle>
            <Grid container spacing={2}>
              {backendSkills.map((skill, index) => (
                <SkillItem key={index} icon={skill.icon} name={skill.name} />
              ))}
            </Grid>
          </Grid>

          {/* Bottom Left - Collaborative Tools */}
          <Grid item xs={12} md={4}>
            <CategoryTitle>Collaborative Tools</CategoryTitle>
            <Grid container spacing={2}>
              {collaborativeTools.map((skill, index) => (
                <SkillItem key={index} icon={skill.icon} name={skill.name} />
              ))}
            </Grid>
          </Grid>

          {/* Bottom Right - Tools & Others */}
          <Grid item xs={12} md={3}>
            <CategoryTitle>Tools & Others</CategoryTitle>
            <Grid container spacing={1}>
              {toolsSkills.map((skill, index) => (
                <SkillItem key={index} icon={skill.icon} name={skill.name} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </SkillsContent>
    </SkillsSection>
  );
};

export default Skills;