import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
 


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
  backgroundColor: '#3b82f6',
  margin: '0 auto 60px',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  border: '1px solid #333333',
  borderRadius: '12px',
  height: '100%',
  width: '100%', // Let Grid control width
  minWidth: '320px', // Add a minWidth for consistency
  maxWidth: '350px', // Add a maxWidth for consistency
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#3b82f6',
  },
}));

const ProjectImage = styled(Box)<{ image: string }>(({ image }) => ({
  height: '200px',
  width: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: '#0f0f0f',
  borderBottom: '2px solid #3b82f6',
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
  flexGrow: 1,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  
}));

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#3b82f6',
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
  color: '#3b82f6',
  textTransform: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  padding: '5px 0',
  minWidth: 'auto',
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '#3b82f6',
    backgroundColor: 'transparent',
  },
}))as typeof Button;

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  image: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, technologies, github, image }) => (
  <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
    <ProjectCard>
      <ProjectImage image={image} />
      <CardContent sx={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {technologies.map((tech, index) => (
            <TechChip key={index} label={tech} />
          ))}
        </TechStack>
        {github && (
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
          <GitHub sx={{ color: '#3b82f6', fontSize: '18px', marginRight: '8px' }} />
          <CodeButton
            component="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
            </CodeButton>
        </Box>
        )}
      </CardContent>
    </ProjectCard>
  </Grid>
);

const Projects: React.FC = () => {
  const projectsData = [
    {
      title: 'Osipe Welfare Portal',
      description: 'A savings group management system that allows users to create and manage savings groups, track contributions, and facilitate loans.',
      technologies: ['python','React', 'Flask', 'PostreSQL'],
      github: 'https://github.com/George-Okumu/Osiepe-welfare-front-end',
      image: '/Osiepe.jpg'

    },
    {
      title: 'WellHall Hotel Booking',
      description: ' A hotel booking platform that allows users to search for the rooms in the hotel, view details, and make reservations.',
      technologies: ['Python', 'react', 'Flask', 'SQLite'],
      github: 'https://github.com/Fred-riQ/WellHole',
      image: '/WellHall_LandingPage.jpg'
    },
    {
      title: 'Habit Tracker Web app',
      description: ' Users can create, track, and manage their daily habits, set reminders, and visualize their progress over time.',
      technologies: ['React', 'javascript', 'HTML', 'CSS'],
      github: 'https://github.com/LarryRuto98/HABIT-TRACKER-WEBSITE',
      image: '/Habit_Tracker.jpg'
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContent>
        <SectionTitle>My Projects</SectionTitle>
        <TitleUnderline />
        <Grid container spacing={6} direction="row" justifyContent="center" alignItems="stretch" >
          {projectsData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </Grid>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;