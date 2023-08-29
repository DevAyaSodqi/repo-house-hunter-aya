import React from "react";
import hero1 from '../../Util/images/hero_bg_1.jpg';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import './style.css';



const Hero =()=>{
    const navigate = useNavigate();

    function navToSearch() {
     navigate('/search')
     
    };

    
    return(
        <>  

<div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${hero1})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-2 pb-4">
                                <h2 className="mt-2 mb-3 banner-title" > Easy Way to find aperfect propertyr </h2>
                                 <h3 style={{marginTop:'5px'}}>we provide a complete service for the seal  purchase of rental of house hunt</h3>
                                <div className="search-area">
                                  
                                    <input  type="text" className="inp-search"  placeholder="Click Search"/>
                                    
                                    <SearchIcon 
                                     onClick={navToSearch}
                                    style={{
                                        marginTop:'10px',
                                    position: 'relative',
                                    right: '30px',
                                    top: '7px',
                                    width: '24px',
                                    height: '24px',
                                    color:'#005555'
                                    }}/>
                                   
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








   


   
     
       
        </>

       
      
    )

}


export default Hero;