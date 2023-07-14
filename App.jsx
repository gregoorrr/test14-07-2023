//* ESERCIZIO FALLITO MALISSIMO


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
const App = () =>{
  return (
 
     
     <Router>
      <Nav />
      <Routes>
        <Route path="/Home" Component={<Home />}/>
        <Route path="/Characters" Component={<Characters />}/>
      </Routes>
     </Router>
 
  )
}
export default App