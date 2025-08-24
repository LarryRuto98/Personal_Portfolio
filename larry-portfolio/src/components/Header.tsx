
import { AppBar, Toolbar, Typography, Box, Button, List,ListItem,ListItemText, IconButton, Modal} from '@mui/material';
import { styled } from '@mui/material/styles';
import GridView from "@mui/icons-material/GridView";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
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
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false)
  };
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <StyledAppBar>
      <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(74, 222, 128, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      >
      <Toolbar sx={{ justifyContent: "space-between", padding: { xs: "0 16px", md: "0 40px" } }}>
        {/* Logo */}
        <Logo variant="h6">
          <Box component="span" sx={{ color: "#3B82F6", fontWeight: "bold" }}>
            LarryThe
          </Box>
          Dev
        </Logo>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "20px" }}>
          {navLinks.map((link) => (
            <NavButton key={link.id} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </NavButton>
          ))}
          <CustomGridIcon>
            <GridView />
          </CustomGridIcon>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          edge="end"
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
       anchor="left" 
       open={open} 
       onClose={() => setOpen(false)}
       ModalProps={{ keepMounted: true }}
       slotProps={{
        paper: {
        sx:{
          backgroundColor: '#111827',
          color: '#ffffff',
          width: 250,
          paddingTop: 2,
        },
       },
       }}
       >
        <Box role="presentation">
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.id} onClick={() => scrollToSection(link.id)}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </StyledAppBar>
  );
};

export default Header;