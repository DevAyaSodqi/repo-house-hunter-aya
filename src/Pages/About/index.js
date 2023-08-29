import NavBar from '../../Component/NavBar';
import Footer from '../../Component/Footer'
import hero2 from '../../Util/images/hero_bg_3.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './style.css';



const About = ()=>{

    return(
   <>
    <NavBar/>

    <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                           
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={hero2} alt="product" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    About
                            </div>
                                <div className="about-text">
                                A HouseHunt site The site offers a wide range of services to buyers and sellers of residential real estate, as well as tenants.
                            </div>
                                <div className="about-features">
                                    <p className="about-feature"><ArrowForwardIcon style={{
                                        color:'#005555',
                                        marginRight:'8px'
                                    }}/> can see all available houses to rent</p>
                                    <p className="about-feature" ><ArrowForwardIcon style={{
                                        color:'#005555',
                                        marginRight:'8px'
                                    }}/> can see specific information about any house</p>
                                    <p className="about-feature"><ArrowForwardIcon style={{
                                        color:'#005555',
                                        marginRight:'8px'
                                    }}/> can add houses to my favourite list</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <Footer />
   </>
       

    
    );

}


export default About;