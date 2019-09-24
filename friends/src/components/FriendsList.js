import React from "react";
import FriendCard from "./FriendCard.js";

import styled from 'styled-components';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const FriendsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-around;
    align-content: center;
    align-content: space-around;
    width: 100%;
    height: 500px;   

`;

function FriendsList( { editFriend, deleteFriend, friendsList }){
    
    return (
        <FriendsDiv>

            {friendsList.map ( (friend, index) => 
            
                <FriendCard key = {index} friend = {friend} editFriend = {editFriend} deleteFriend = {deleteFriend} />
                
            )}

         </FriendsDiv>
    );
}

export default FriendsList;