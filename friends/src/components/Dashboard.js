import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import styled from 'styled-components';
import { Grid, Form, Input, TextArea, Button, Select, Modal } from "semantic-ui-react";

import { axiosWithAuth } from "../axiosAuth.js";
import axios from "axios";

import FriendsList from "./FriendsList.js";
import AddFriendForm from "./AddFriendForm.js";

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
    background-size: 30%;
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

function Dashboard(props){

    const [friendsList, setFriendsList] = useState([]);

    useEffect( () => {

        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res => {
            setFriendsList([...friendsList, res.data]);
        })      
        

    }, []);    
    

    const addFriends = (friend) => {

        setFriendsList([...friendsList, friend]);

        axiosWithAuth().post("http://localhost:5000/api/friends", friendsList)
        .then(res => {
            console.log(res.data);
        })          

    }

    const deleteFriend = (id) => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            setFriendsList([friendsList.filter (friend => friend.id !== id)])
        })


    }



    return (

    <Container>

        <AppContainer>      
        
            <MainHeading>Friends</MainHeading>    

            <AddFriendForm addFriends = {addFriends} />

            <FriendsList deleteFriend = {deleteFriend} friendsList = {friendsList} />

        </AppContainer>
        
    </Container>

      
    );

}

export default Dashboard;