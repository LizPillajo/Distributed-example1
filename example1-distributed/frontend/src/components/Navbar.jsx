import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from '@tanstack/react-router';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0d2149' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button sx={{ color: '#efb034' }} component={Link} to="/">Home</Button>
          <Button sx={{ color: '#efb034' }} component={Link} to="/favorites">My Favorites Characters</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};