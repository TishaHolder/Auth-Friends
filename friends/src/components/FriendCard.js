import React from "react";

import styled from 'styled-components';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select, Card, Icon } from "semantic-ui-react";


function FriendCard( {editFriend, deleteFriend, friend}){

    const deleteHandler = (event) => {
        deleteFriend(friend.id);
        //window.location.reload();//refreshes the window 
    }
    

    return (

        <Grid.Column padded key={friend.id}>
        <Card>
        <Card.Content>
            <Card.Header> <Icon  /*onClick = {editHandler}*/ className = "edit-icon" name="edit outline" />  {friend.name} <Icon onClick = {deleteHandler} className = "delete-icon" name='delete' /></Card.Header>
            <Card.Description>{`Age: ${friend.age}`}</Card.Description>
            <Card.Description>{`Email: ${friend.email}`}</Card.Description>           
            
        </Card.Content>
        </Card>
        </Grid.Column>   

    );



}

export default FriendCard;