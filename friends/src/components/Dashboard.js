import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import styled from 'styled-components';
import { Grid, Form, Input, TextArea, Button, Select, Modal } from "semantic-ui-react";

import { axiosWithAuth } from "../axiosAuth.js";
import axios from "axios";

import FriendsList from "./FriendsList.js";
import AddFriendForm from "./AddFriendForm.js";
import friendsbackground from "../friendsbackground.jpg";


//styled component - main page container
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;    

`;

//styled component - div containing the main heading and the cards
const AppContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);    
    background-image: url(${friendsbackground});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    

`;

//styled component - page heading
const MainHeading = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: black;
  text-stroke: 5px black; 
 

`;

const LogoutButton = styled.div`
    text-align: center;
    width: 15%;
    background: #3c68ae;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 10px;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.507);
    margin: 35px;
`;

function Dashboard(props){

    const [friendsList, setFriendsList] = useState([]);

    let initialFriend = {name: "", age: "", email: "" };

    useEffect( () => {

        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res => {
            setFriendsList(res.data);
            console.log("get friends", res.data)
        }) 
        .catch (err => {
            console.log("get friends error", err.response);
        })     
        

    }, []);    
    

    const addFriends = (friend) => {
        //setFriendsList([...friendsList, friend]);

        axiosWithAuth().post("http://localhost:5000/api/friends", friend)
        .then(res => {
            console.log("post friends", res.data);

            //server returns the entire array of objects after each post request
            setFriendsList(res.data);
        })          

    }

    const deleteFriend = (id) => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            //setFriendsList(friendsList.filter (friend => friend.id !== id))

            //server returns the entire array of objects after each delete request
            setFriendsList(res.data);
        })


    }

    // fire on logout button, clears token and pushes user back to login page
    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        props.history.push('/');
    }



    return (

    

    <Container>
        

        <AppContainer>             
             
            <LogoutButton onClick ={logout}> Log Out</LogoutButton>

            <AddFriendForm addFriends = {addFriends} />                        

            <FriendsList deleteFriend = {deleteFriend} friendsList = {friendsList} />

        </AppContainer>
        
    </Container>

      
    );

}

export default Dashboard;