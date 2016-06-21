import React from 'react';
import Avatar from 'material-ui/Avatar';

const UsersListEntry = (props) =>{
  return (
    <div>
    <Avatar src= {props.photo} size= {100} disabled= {true}/>
    {props.username}
    </div>
  );
}

export default UsersListEntry;

