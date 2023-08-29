import React,{useState,useEffect} from "react";
import NavBar from '../../Component/NavBar';
import Footer from '../../Component/Footer';
import HeroSearch from "../../Component/HeroSearch";




const SearchPage = () =>{

    const [data , setData] = useState([]);
    useEffect(()=>{
       fetch('"https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house') 
       .then(res=>setData())
       .catch(error=>console.log(error));
    },[data])

 return(
      <>
      <NavBar/>

       <HeroSearch />


      <Footer/>
      </>
 )

}

export default SearchPage;