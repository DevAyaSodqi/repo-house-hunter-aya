import React from 'react'; 
import Card from '../Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


  


const CardContainer = ({houses})=> {
return <>

<Box sx={{ flexGrow: 1 ,ml:8}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {houses.length && houses.map((house, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
           <Card house={house} />
          </Grid>
        ))}
      </Grid>
    </Box>
    
      


</>

}

export default CardContainer
