import React from 'react';
import UserScore from './user_score';

const Scoreboard= (props) => {
  const userScores= props.users.map(user =>
     <UserScore user= {username}/>
    );
  return (
    <div>
      {userScores}
    </div>
    );
  };

export default Scoreboard;