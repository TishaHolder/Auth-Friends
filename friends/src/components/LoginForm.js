import React, {useState} from "react";
import { axiosWithAuth } from "../axiosAuth.js";
import ReactDOM from 'react-dom';
import axios from "axios";

function LoginForm(props){

    const [credentials, setCredentials] = useState({ username: "Lambda School", password: "i<3Lambd4" });

    const loginHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log("login", res);
            localStorage.setItem("token", res.data.payload);
            props.history.push("/dashboard");
        })
        .catch (err => {
            console.log(err);
        })
    }    

    const handleChange = (event) => {
        setCredentials ({
            ...credentials, 
            [event.target.name]: event.target.value
        });
    }
   

    return (
        <form className = "login-form" onSubmit = {loginHandler}>
            <h1> Sign In </h1>

            <input type = "text"
                   name = "username"
                   value = {credentials.username}
                   placeholder ="Please enter your username"
                   onChange ={handleChange} 
                   required />

            <input type = "password"
                   name = "password"
                   value = {credentials.password}
                   placeholder = "Please enter your password"
                   onChange = {handleChange} 
                   required />

            <button type = "submit">Sign In</button>

        </form>
    );

}

export default LoginForm;