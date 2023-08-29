import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import './style.css'




function Footer() {
 
  return (
    <AppBar position="static"   style={{
        backgroundColor:'#005555',
        
	        bottom: '0',
	         width: '100%',
	          overflow: 'auto',
	         padding: '5px 0 5px 0'
    }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',color:'white' ,justifyContent:'center',alignContent:'center'} }}>
           
           
          <Typography style={{
                color:'white'
            }}>
                Copyright © 2023 . — Designed: by DevAay
            </Typography>
           
           
           
          
          </Box>
        
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' }
           
        }}>


            <Typography style={{
                color:'white'
            }}>
                Copyright © 2023 . — Designed: by DevAay
            </Typography>
           
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              
            </Tooltip>
         
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;