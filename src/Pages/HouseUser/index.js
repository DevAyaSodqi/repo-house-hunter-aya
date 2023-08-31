import React,{useState,useEffect} from 'react'; 


import './style.css'


const HouseUser = ()=> {
    

    const [house, setHouse] = useState([]);
    const getHouse = async () => {
        const response = await fetch("https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house");
        const FinalData = await response.json();
        console.log(response.url)
        setHouse(FinalData)
    }


            useEffect(() => {
                getHouse();
               
                 }, []
                  )



    return <>
  
   

 
  
  
   
    </>
}

export default HouseUser