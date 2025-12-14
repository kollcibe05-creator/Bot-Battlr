import React, {useState} from "react"
import BotProfile from "./BotProfile"

function MyBotArmy () {
     //set initial state of selected bots to be an empty string//
   const [Selected, setSelectedBot] = useState([])  
 

   /*
   The function below conditionally updates the item to be added to the MyBotArmy section
   Passed down as a prop to the BotProfile army
   */
   function handleClick (itemToAdd) {
    const isAlreadySelected = Selected.some(item => item.id === itemToAdd.id)    //checks to confirm if it is already selected using some()//
 if (!isAlreadySelected) {   //if it is not selected then setState to be the previous items and add the itemToAdd//
    setSelectedBot(prevItems => [...prevItems, itemToAdd])
 }
   }


   /* remove items from the "MyBotArmy section"*/
  function removeBot (botToRemove) {
    setSelectedBot(prevItems => (
        prevItems.filter(bot => bot.id !== botToRemove.id)
    ))
  } 


  //DELETE request//
  function deletePermanently (id) {
    fetch(`https://robot-api-o7l1.onrender.com/${id}`,{
      method: "DELETE" 
    } 
    )
    .then( ()  => {
        
        setSelectedBot(prevItems => prevItems.filter(bot => bot.id !== id))

  })
  }

   return (
<div class="styling_stuff">     {/*one of the containers must go*/}
    <div id="botarmycontainer">
    <h1 id="mybotarmy">MyBotArmy</h1>
    {/*mapping over the selected bots to determine their structure*/}
    {Selected.map ( (bot,index) => (
        <div className="botcontainer" key={bot.id} onClick={()=> removeBot(bot)}> {/*the funcion filters the bots to not include the ones deleted*/}
        {/*structure of the selected bots and classing for styling*/}
            <img src={bot.avatar_url} alt={bot.name} ></img>
             <h3 className="botname">{bot.name}</h3>
             <p className="botdetails">Health: {bot.health}</p>
             <p className="botdetails">Armor: {bot.armor}</p>
             <p className="botdetails">Damage: {bot.damage}</p>
              <button onClick={() => deletePermanently(bot.id)}>x</button>   {/*The passed button removes the selected bot permanently from the server */}
         </div>
    ))
   }
  </div>
  <div>
   <BotProfile handleClick={handleClick} deletePermanently={deletePermanently}/>   {/*passing down the function props to the BotProfile component to update state*/}
   </div>
</div>

   
   )
}




export default MyBotArmy;














