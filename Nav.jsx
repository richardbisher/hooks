import React, { useState } from 'react'
// import React, {useState} from 'react'

// import React from 'react'
const App = () => {

const[name,setName] = useState ("ji")

function handleChange() { 

var names =["Learn","Master","Try"]
var random = Math.floor(Math.random() * names.length);
setName(names[random])


}

  return (
    <div>
      <p>lets {name} reacts</p>
      {<button onclick = {handleChange}>Change </button>}
    </div>
    
  )
}



export default App