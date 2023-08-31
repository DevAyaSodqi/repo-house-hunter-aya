import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from '../../Component/NavBar';
import Footer from '../../Component/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ImageCard from '../../Util/images/img_6.jpg';
import Grid from '@mui/material/Unstable_Grid2';


 import './style.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  



const Profile=()=>{
    const [value, setValue] = React.useState(0);
    const [profileData, setProfileData] = React.useState(null);
   

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    React.useEffect(() => {
        fetch('https://my-json-server.typicode.com/MennatullahAsh/UsersAPI/users')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setProfileData(data[0]);
                }
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);






return(
    <>

    <NavBar />


    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
   
        <Tab label="Profile" {...a11yProps(0)} style={{color:'#005555',textTransform:'capitalize',fontSize:'30sp',fontFamily:'monospace'}} />
        <Tab label="House" {...a11yProps(1)} style={{color:'#005555',textTransform:'capitalize',fontSize:'30sp',fontFamily:'monospace'}} />
        <Tab label="Add House" {...a11yProps(2)} style={{color:'#005555',textTransform:'capitalize',fontSize:'30sp',fontFamily:'monospace'}}  />
     

      
      </Tabs>
      <TabPanel value={value} index={0}>

               
          {profileData ? (
            
                <div style={{width:'500px' , border:'2px solid #005555',height:'400px', marginLeft:'50%'}}>
                  <h3 style={{marginLeft:'30%',alignItems:'center'}}>Personal Information</h3>
                  <div className='row-data'>
                    <label>UserName</label>
                    <Typography style={{border:'2px solid black',borderRadius:'10px', width:'150px',padding:'8px',marginLeft:'10px',marginTop:'7px'}}>{profileData.userName}</Typography>
                  </div>


                  <div className='row-data'>
                    <label>Email</label>
                    <Typography style={{border:'2px solid black',borderRadius:'10px', width:'150px',padding:'8px',marginLeft:'28px',marginTop:'7px'}}>{profileData.email}</Typography>
                  </div>



                  <div className='row-data'>
                    <label>Address</label>
                    <Typography style={{border:'2px solid black',borderRadius:'10px', width:'150px',padding:'8px',marginLeft:'10px',marginTop:'7px'}}>{profileData.address}</Typography>
                  </div>




                  
                  <div className='row-data'>
                    <label>Password</label>
                    <Typography style={{border:'2px solid black',borderRadius:'10px', width:'150px',padding:'8px',marginLeft:'10px',marginTop:'7px'}}>{profileData.password}</Typography>
                  </div>


                   <div className='row-data' style={{margin:'10px'}}>
                    <Button variant='contained' style={{backgroundColor:'#005555',textTransform:'capitalize',margin:'10px',color:'white'}}>Edit Profile</Button>
                    <Button variant='outline' style={{border:'2px solid #005555',textTransform:'capitalize',margin:'10px',color:'black'}}>Delete Account</Button>
                   </div>

                
                  



                </div>
          ) :(
            <CircularProgress color="success" />
          )}
       
       

      </TabPanel>


      <TabPanel value={value} index={1}>

   


<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} >

  <Card sx={{ maxWidth: 345 }}>
     
     <CardActionArea>
       <CardMedia
         component="img"
         width={150}
         height={120}
         image={ImageCard}
         alt=""
       />

      
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Super Delux
         </Typography>
         <Typography variant="body2" color="text.secondary">
          900$
         </Typography>
       </CardContent>
       
     </CardActionArea>
      
   </Card>
  </Grid>
  <Grid item xs={6}>
  <Card sx={{ maxWidth: 345 }}>
     
     <CardActionArea>
       <CardMedia
         component="img"
         width={150}
         height={120}
         image={ImageCard}
         alt=""
       />

      
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Super Delux
         </Typography>
         <Typography variant="body2" color="text.secondary">
          900$
         </Typography>
       </CardContent>
       
     </CardActionArea>
      
   </Card>
  </Grid>
  <Grid item xs={6}>
  <Card sx={{ maxWidth: 345 }}>
     
     <CardActionArea>
       <CardMedia
         component="img"
         width={150}
         height={120}
         image={ImageCard}
         alt=""
       />

      
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Super Delux
         </Typography>
         <Typography variant="body2" color="text.secondary">
          900$
         </Typography>
       </CardContent>
       
     </CardActionArea>
      
   </Card>
  </Grid>
  <Grid item xs={6}>
  <Card sx={{ maxWidth: 345 }}>
     
     <CardActionArea>
       <CardMedia
         component="img"
         width={150}
         height={120}
         image={ImageCard}
         alt=""
       />

      
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Super Delux
         </Typography>
         <Typography variant="body2" color="text.secondary">
          900$
         </Typography>
       </CardContent>
       
     </CardActionArea>
      
   </Card>
  </Grid>
</Grid>




   
 
       
      


       
      
      </TabPanel>








      
      <TabPanel value={value} index={2}>
      <h1>Soon!!!</h1>
      </TabPanel>


     
     
    </Box>

   
   <div style={{marginTop:'308px'}}>
    <Footer />
   </div>
   
   

   
   
    </>
)
}

  

export default  Profile;