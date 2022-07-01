import * as React from 'react';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const UserHome=()=>{

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
     <h1>Welcome User</h1>
    
    </>

    )
}

export default UserHome;