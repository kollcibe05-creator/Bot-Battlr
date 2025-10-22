import React, {useState} from "react"
import BotProfile from "./BotProfile"

function MyBotArmy () {
   const [Selected, setSelectedBot] = useState([])
 
   function handleClick (itemToAdd) {
    const isAlreadySelected = Selected.some(item => item.id === itemToAdd.id)
 if (!isAlreadySelected) {
    setSelectedBot(prevItems => [...prevItems, itemToAdd])
 }
   }

  function removeBot (botToRemove) {
    setSelectedBot(prevItems => (
        prevItems.filter(bot => bot.id !== botToRemove.id)
    ))
  } 

  function deletePermanently (id) {
    fetch(`http://localhost:3000/bots/${id}`,{
      method: "DELETE" 
    } 
    )
    .then( ()  => {
        
        setSelectedBot(prevItems => prevItems.filter(bot => bot.id !== id))

  })
  }

   return (
<div>
    <div id="botarmycontainer">
    <h1 id="mybotarmy">MyBotArmy</h1>
    {Selected.map ( (bot,index) => (
        <div className="botcontainer" key={bot.id} onClick={()=> removeBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} ></img>
             <h3 className="botname">{bot.name}</h3>
             <p className="botdetails">Health: {bot.health}</p>
             <p className="botdetails">Armor: {bot.armor}</p>
             <p className="botdetails">Damage: {bot.damage}</p>
              <button onClick={() => deletePermanently(bot.id)}>x</button>
         </div>
    ))
   }
  </div>
  <div>
   <BotProfile handleClick={handleClick} deletePermanently={deletePermanently}/>
   </div>
</div>


   
   )
}





export default MyBotArmy;













