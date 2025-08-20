import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub } from '@mui/icons-material';
 


const ProjectsSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  padding: '100px 40px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '80px 20px',
  },
}));

const ProjectsContent = styled(Container)(({ theme }) => ({
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
  backgroundColor: '#4ade80',
  margin: '0 auto 60px',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  border: '1px solid #333333',
  borderRadius: '12px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#4ade80',
  },
}));

const ProjectImage = styled(Box)(({ theme }) => ({
  height: '200px',
  backgroundColor: '#0f0f0f',
  borderBottom: '2px solid #4ade80',
  borderRadius: '12px 12px 0 0',
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: '#ffffff',
  marginBottom: '15px',
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: '#a0a0a0',
  lineHeight: 1.6,
  marginBottom: '20px',
  flex: 1,
}));

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#4ade80',
  color: '#000000',
  fontSize: '0.8rem',
  fontWeight: 600,
  margin: '2px',
  height: '24px',
}));

const TechStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '20px',
}));

const CodeButton = styled(Button)(({ theme }) => ({
  color: '#4ade80',
  textTransform: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  padding: '5px 0',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
  },
}));

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, technologies }) => (
  <Grid item xs={12} md={4}>
    <ProjectCard>
      <ProjectImage />
      <CardContent sx={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {technologies.map((tech, index) => (
            <TechChip key={index} label={tech} />
          ))}
        </TechStack>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
          <GitHub sx={{ color: '#4ade80', fontSize: '18px', marginRight: '8px' }} />
          <CodeButton>Code</CodeButton>
        </Box>
      </CardContent>
    </ProjectCard>
  </Grid>
);

const Projects: React.FC = () => {
  const projectsData = [
    {
      title: 'Business Marketing Website',
      description: 'A fully responsive platform built with HTML & CSS and integrated with payment gateways.',
      technologies: ['CSS3', 'Node.js, PHP', 'HTML'],
    },
    {
      title: 'Upgradable Smart Contract',
      description: 'A Rock, Paper, Scissors game smart contract that rewards the winner with ETH',
      technologies: ['Solidity', 'npm'],
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills and projects.',
      technologies: ['HTML5'],
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContent>
        <SectionTitle>My Projects</SectionTitle>
        <TitleUnderline />
        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </Grid>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;