import React from 'react';
import NavBar from '../../Component/NavBar';
import notImageFound from '../../Util/images/not.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';

const NoFound = ()=>{

    const navigate = useNavigate();
    function navToHome(){
        navigate('/');
    }

    return(
        <>

        <NavBar />

        <img src={notImageFound} alt="" style={{
            alignSelf:'center',
            display:'block',
            margin:'auto'
        }}/>


         <Stack direction="row" spacing={2}>
      
      <Button 
      onClick={navToHome}
      variant="contained"
       style={{backgroundColor:'#005555',
      textTransform:'capitalize',
      color:'white',
      alignSelf:'center',
      margin:'auto'
    }}
      endIcon={<ArrowBackOutlinedIcon />}>
        Back Home
      </Button>
    </Stack>


         

        
        </>
    )

}


export default NoFound;