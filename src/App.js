import React from "react" 

function GetData () {
  const eachName = () => {
    fetch ("http://localhost:3000/bots") 
  .then(res => res.json())
  .then(data => {
   data.map(item => {
   return  item.name
  })
    })}
 return  <li>{eachName}</li>

  }

function App() {
  return (
    <div className="App">
      <h1>BOT BATTLR</h1>
       <div>
       <ul>
         <GetData/>
       </ul>
     </div>
    </div>
  );
}

export default App;
