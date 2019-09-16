import React, {useState} from "react";


function AddFriendForm(props){

    const [friend, setFriend] = useState ({ name: "", age: "", email: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        setFriend(props.addFriends(friend));
        setFriend({ name: "", age: "", email: "" });

    }

    const handleChange = (event) => {
        setFriend({...friend, [event.target.name]: event.target.value});

    } 

    return (

        <form className = "add-friend-form" onSubmit = {handleSubmit}>

            <input type = "text"
                   name = "name"
                   value = {friend.name}
                   onChange = {handleChange}
                   placeholder = "What's your friend's name?"
                   required />

            <input type = "number"
                   name = "age"
                   value = {friend.age}
                   onChange = {handleChange}
                   placeholder = "How old is your friend?" 
                   required />

            <input type = "email"
                   name = "email"
                   value = {friend.email}
                   onChange = {handleChange}
                   placeholder = "What is your friend's email?" 
                   required />

            <button className = "add-friend-button" type = "submit">Add Friend</button>
              

        </form>


    );
}

export default AddFriendForm;