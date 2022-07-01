import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [userData, setUserData] = useState({});
    

    useEffect(() => {
        getDatafromServer();
    }, []);

    const getDatafromServer = () => {

        console.log("Hello");

        axios.get(`https://restcountries.com/v3.1/name/india`).then(
            (response) => {

                    console.log(response.data);
                    setUserData(response.data[1]);


            }, (error) => {
                console.log(error);
                console.log("Error");
            }
        )

    }

 return (
    <>
    <div>
 <h4>Name : {userData.name.common}</h4>   
<h4> Capital : {userData.capital}</h4>
<h4> Borders : {userData.borders[0]+" "+userData.borders[1]+" "+userData.borders[2]+userData.borders[3]+" "+userData.borders[4]+" "+userData.borders[5]}</h4>
<h4>Flag :</h4>
<img src={userData.flags.png}/>
<h4>Languages {userData.languages.eng+" "+userData.languages.hin+" "+userData.languages.tam}</h4>
</div>
    </>

    )
}

export default Home