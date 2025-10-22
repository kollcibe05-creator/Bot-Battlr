import React, {useEffect, useState} from "react"


function BotProfile({handleClick, deletePermanently}) {
  const [bots, setBots] = useState([])

useEffect ( () => {  
   fetch ("http://localhost:3000/bots") 
  .then(res => res.json())
  .then(data => {
    setBots(data)   
})
}, [])
return(
   <div id="botcollectioncontainer">
    <h1 id="botcollection">BotCollection</h1>
    {bots.map((bot, index) => 
   <div className="botcontainer" key={index} onClick={() => handleClick(bot)}>
    <img src={bot.avatar_url} alt={bot.name} ></img>
    <h3 className="botname">{bot.name}</h3>
    <p className="botdetails">Health: {bot.health}</p>
    <p className="botdetails">Armor: {bot.armor}</p>
    <p className="botdetails">Damage: {bot.damage}</p>
       <button onClick={() => deletePermanently(bot.id)}>x</button>

    
    </div>) }</div>
)
   
} 


export default BotProfile;