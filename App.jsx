//* ESERCIZIO FALLITO MALISSIMO NON C'è NIENTE DA LEGGERE MA L'HO MESSO COMUNQUE NEL REPOSITORY


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
