import React from "react";
import PlayerCard from "./PlayerCard";
import players from "../player";

const Listplayer = () => {
  // console.log(players)
  return (
    <div>
  <h2>List of Players</h2>
    <div style={{display:"flex", justifyContent:"space-around", margin:"4%"}}>
      
      {players.map((ply, key) =>
        <PlayerCard {...ply}
          key={ply.name} />)}
     
      </div>
      
    </div>
  );
};

export default Listplayer;