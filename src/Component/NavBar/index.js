import  React ,{useContext}from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import{Link} from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import './style.css'




function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static" style={{
        backgroundColor:'#005555'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HomeIcon sx={{ display: { xs: 'none', md: 'flex',color:'white' }, mr: 1 }} />
          <Typography
            style={{
                textTransform:'capitalize',
                color:'white'
            }}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
             
            }}
          >
            HouseHunt
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',color:'white' ,justifyContent:'center',alignContent:'center'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem  onClick={handleCloseNavMenu} >
                <Button style={{
                textTransform:'capitalize',
               fontSize:'18px',
               marginRight:'20px'
              }}>
                <Link to='/' className='btn-link'>Home</Link>
              </Button>


                 <Button style={{
                textTransform:'capitalize',
               fontSize:'18px'
              }}> <Link to='/about' className='btn-link'>About</Link></Button>
                </MenuItem>
            
            </Menu>
          </Box>
        
          <Typography style={{
            color:'white',
            textTransform:'capitalize'
          }}
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HouseHunt
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' }
           
        }}>
           
              <Button style={{
                textTransform:'capitalize',
               fontSize:'18px',
               marginRight:'20px',
              }}><Link to='/' className='btn-link'>Home</Link></Button>


                 <Button style={{
                textTransform:'capitalize',
               fontSize:'18px'
              }}><Link to='/about' className='btn-link'>About</Link></Button>
             
          </Box>




         
          

          <Box sx={{ flexGrow: 0 }}>
           
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              

              {(isAuth === false) ? (
            <>
              <Button 
                variant="outlined"
                color="secondary"
                onClick=""
               
              >
               <Link to ='/login' style={{textDecoration:'none',color:'white'}}>Login</Link>
              </Button>



              <Button
                variant="outlined"
                color="secondary"
                onClick=""
               
              >
               <Link to ='/register' style={{textDecoration:'none',color:'white'}}>Register</Link>
              </Button>
            
            </>
          ) : (
            <>
              <Button  >
               <Link to='/profile' style={{textDecoration:'none',color:'white'}}>Profile</Link>
              </Button>

                  {/* <h1>Fav</h1> */}
             
              
             
            </>
          )}






              
                   {/* <Button style={{textTransform:'none',backgroundColor:'white' ,color:'#005555',marginRight:'10px'}}><Link style={{textDecoration:'none',color:'#005555'}} to='/login'>Login</Link></Button>
                  
                   <Button variant="outlined" style={{textTransform:'none',color:'white'}}><Link to='/register'  style={{textDecoration:'none',color:'white'}}  >Register</Link></Button> */}




              </IconButton>
           
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;