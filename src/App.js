import React, {useState, useEffect} from "react" 

function GetTitles () {
  const [titles, setTitles] = useState([])

useEffect ( () => {  
   fetch ("http://localhost:3000/bots") 
  .then(res => res.json())
  .then(data => {
 const fetchedTitles = data.map( robot => robot.name)
 setTitles(fetchedTitles)
  })
}, [])
return <ul>{titles.map((title, index) => <li className='robotnames' key={index}>{title}</li>)}</ul> 

 
}
function App() {
  return (
    <div className="App">
      <h1>BOT BATTLR</h1>
       <div>
        <GetTitles/>
     </div>
    </div>
  );
}

export default App;
