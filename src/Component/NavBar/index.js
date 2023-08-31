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
import Avatar from '@mui/material/Avatar';
import personImage from '../../Util/images/person_4-min.jpg';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import './style.css';



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));






function NavBar() {

  const navigate = useNavigate();
  function navToProfile(){
    navigate('/profile');
  }


  function navToFavorite(){
    navigate('/favorite');
  }
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isAuth , logout } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



 

  const handleLogout = ()=>{
   logout();

  }

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
              }}><Link to='/' className='btn-link' style={{textDecoration:'none', textTransform:'capitalize'}}>Home</Link></Button>


                 <Button style={{
                textTransform:'capitalize',
               fontSize:'18px'
              }}><Link to='/about' className='btn-link' style={{textDecoration:'none', textTransform:'capitalize'}}>About</Link></Button>
             
          </Box>




         
          

          <Box sx={{ flexGrow: 0 }}>
           
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              

              {(isAuth === false) ? (
            <>
              <Button 

                variant="outlined"
                color="secondary"
               
                style={{textTransform:'capitalize'}}
               
              >
               <Link to ='/login' style={{textDecoration:'none',color:'white',textTransform:'capitalize'}}>Login</Link>
              </Button>



              <Button
                variant="outlined"
                color="secondary"
               
                 style={{textTransform:'capitalize',marginLeft:'8px'}}
               
              >
               <Link to ='/register' style={{textDecoration:'none',color:'white',textTransform:'capitalize'}}>Register</Link>
              </Button>
            
            </>
          ) : (
            <>


<div>
     

<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src={personImage}  onClick={handleClick}/>
              </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <PersonIcon />
         <Typography onClick={navToProfile}>Profile</Typography> 
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FavoriteBorderIcon />
         <Typography onClick={navToFavorite}>Favorite</Typography> 
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <LogoutIcon />
          <Typography onClick={handleLogout}>Logout</Typography> 
        </MenuItem>
       
      </StyledMenu>
    </div>
      
             
            </>
          )}






              
               




              </IconButton>
           
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;