import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import GridView from "@mui/icons-material/GridView";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(74, 222, 128, 0.1)',
  boxShadow: 'none',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '16px',
  margin: '0 8px',
  '&:hover': {
    color: '#3B82F6',
    backgroundColor: 'transparent',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#ffffff',
  '& .highlight': {
    color: '#3B82F6',
  },
}));

const CustomGridIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  backgroundColor: "transparent",
  border: "1px solid #3b82f6", 
  borderRadius: "50%",          
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(59, 130, 246, 0.1)", 
  },
  "& svg": {
    color: "#3b82f6", 
    fontSize: "20px",
  },
}));

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar>
      <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '0 16px', md: '0 40px' } }}>
        <Logo variant="h6">
        <Box component="span" sx={{ color: "#3B82F6", fontWeight: "bold" }}>
           LarryThe
           </Box>Dev
      </Logo>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavButton onClick={() => scrollToSection('home')}>Home</NavButton>
            <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
            <NavButton onClick={() => scrollToSection('skills')}>Skills</NavButton>
            <NavButton onClick={() => scrollToSection('projects')}>Projects</NavButton>
            <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
          </Box>
          <CustomGridIcon>
            <GridView />
          </CustomGridIcon>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;