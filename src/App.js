import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import Altruz from "./components/Altruz"
function App() {
  return (
    <>
    <Router>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/alturas" element={<Altruz/>}/>



</Routes>
    </Router>
    </>
  )
}

export default App