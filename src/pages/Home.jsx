import React, { useState } from 'react';
import { Drawer, Button, Card, CardContent, Typography, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToApp from '@mui/icons-material/ExitToApp';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation"  onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Button startIcon={<AccountCircle />} sx={{ justifyContent: 'flex-start' }} onClick={() => console.log('Profile clicked')}>Profile</Button>
    <Button 
          startIcon={<ExitToApp />}
          sx={{ justifyContent: 'flex-start' }}
          onClick={() => navigate('/login')} 
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <IconButton  size="large" edge="start" color="inherit"
           
            
            
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Vikky's
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for Menu */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Cards Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
          justifyContent: 'center'
        }}>
          {/* Billing Card - Blue Color */}
          <Card 
            sx={{ 
              minWidth: 275, 
              flex: 1,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              backgroundColor: '#e3f2fd',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 3
              }
            }}
            onClick={() => console.log('Billing clicked')}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Billing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage customer invoices and payments
              </Typography>
            </CardContent>
          </Card>

          {/* Stock Inward Card - Green Color */}
          <Card 
            sx={{ 
              minWidth: 275, 
              flex: 1,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              backgroundColor: '#e8f5e9',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 3
              }
            }}
            onClick={() => console.log('Stock Inward clicked')}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Stock Inward
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage incoming stock and inventory
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;