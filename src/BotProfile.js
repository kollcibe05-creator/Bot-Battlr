import React, {useEffect, useState} from "react"
 
/*props received are  for deleting the bots permanently and adding the bots to the "My Army" section_______received from MyBotArmy.js*/

function BotProfile({handleClick, deletePermanently}) {     
  const [bots, setBots] = useState([])    //setting initial state of bots to be an empty array

useEffect ( () => {  
   fetch ("https://robot-api-o7l1.onrender.com")    //GET request upon user login this will be the first display//
  .then(res => res.json())
  .then(data => {
    setBots(data)      //setting initial render state  
})
}, [])
return(
   <div id="botcollectioncontainer">
    <h1 id="botcollection">BotCollection</h1>
    {/*mapping bots to display each component and classing them for styling*/}
    {bots.map((bot, index) => 
   <div className="botcontainer" key={index} onClick={() => handleClick(bot)}> {/*executing the function of adding bot to the 'My Army section'*/}
    <img src={bot.avatar_url} alt={bot.name} ></img>
    <h3 className="botname">{bot.name}</h3>
    <p className="botdetails">Health: {bot.health}</p>
    <p className="botdetails">Armor: {bot.armor}</p>
    <p className="botdetails">Damage: {bot.damage}</p>
       <button onClick={() => deletePermanently(bot.id)}>x</button>  {/*Executing the delete permanently command*/}

    
    </div>) }</div>
)
   
} 

export default BotProfile;

