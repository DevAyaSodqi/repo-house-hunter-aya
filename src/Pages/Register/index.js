import NavBar from '../../Component/NavBar'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';



const Register = ()=>{

    function Copyright() {
        return (
          <Typography variant="body2" color="black" align="center" margin={8}>
            {'Copyright © '}
            <Link style={{color:'black'}}>
             By:DevAya 2023
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    return(
        <>
        <NavBar />
     
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
            //   my: 8,
            //   mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register Account
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>

            <TextField
                margin="normal"
                required
                fullWidth
                id="useName"
                label="UserName"
                name="useName"
                autoFocus
              />
        



              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />


                 <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="phone"
                type="text"
                id="phone"
                autoComplete="current-password"
              />



              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Button style={{backgroundColor:'#005555',color:'white',textTransform:'capitalize'}}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
               
                <Grid item>
                  <Link  variant="body2" style={{color:'black'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
     
        </>
    )

}


export default Register;