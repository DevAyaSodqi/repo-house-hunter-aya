import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {Layout, Landing} from '../Pages';
import theme from './Theme';
import { Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import NoFound from '../Pages/NoFound';
import Detailes from '../Pages/Detailes';
import SearchPage from '../Pages/SearchPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import { PrivateRoute, PublicRoute } from '../Component/Route';
import AuthProvider from '../Context/Authorization';

function App() {
  return (
  <ThemeProvider theme = {theme}>

    <AuthProvider>
         <Layout className="App">

         <Routes>

         


         {/* <Route exact path='/login' element={<PublicRoute/>}>
         <Route exact path='/login' element={<Login/>}/>
         </Route>



         <Route exact path='/register' element={<PublicRoute/>}>
         <Route exact path='/register' element={<Register/>}/>
         </Route>



         
         <Route exact path='/profile' element={<PrivateRoute/>}>
         <Route exact path='/profile' element={<Profile/>}/>
         </Route> */}





           
           <Route path='/' element={<Landing />}/>
           
         
          <Route path='/about' element={<About />}/>

          <Route path={`/details/:id`} element={<Detailes />}/>


          <Route path='/search' element={<SearchPage />}/>

          {/* <Route path='/login' element={<Login />}/>

          <Route path='/register' element={<Register />}/>

          <Route path='/profile' element={<Profile />}/> */}


         
          <Route exact path='/login' element={<PublicRoute/>}>
         <Route exact path='/login' element={<Login/>}/>
         </Route>



         <Route exact path='/register' element={<PublicRoute/>}>
         <Route exact path='/register' element={<Register/>}/>
         </Route>



         
         <Route exact path='/profile' element={<PrivateRoute/>}>
         <Route exact path='/profile' element={<Profile/>}/>
         </Route>


          <Route path='*' element={<NoFound />}/>


        
          </Routes>
   
  
    </Layout>

    </AuthProvider>

  </ThemeProvider>
 

  );
}

export default App;