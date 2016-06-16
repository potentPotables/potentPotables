import React from 'react';

const UserScore= (props) =>{
  <div>
    <div>
      {props.username}
    </div>
    <div>
      {props.photo}
    </div>
    <div>
      {props.score}
    </div>
  </div>
};

export default UserScore;