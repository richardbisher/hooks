import React from 'react'
import Nav from './Nav'
// import firsthooks from './firsthooks'

function App() {
   
     const navdata = {
      name:"Richard",
      ph: "788888"
     }
  


return(
  <>
  <h1>first try</h1>
  <Nav
  username = {navdata.name}
  username = {navdata.ph}

  />

  <firsthooks
  
  />
  </>

)
}
export default App