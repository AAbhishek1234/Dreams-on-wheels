import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import Altruz from "./pages/Altruz"
import Xuv700 from "./pages/Xuv700"
import Marzoo from "./pages/Marzoo"
import Fronx from "./pages/Fronx"
import Jimmy from "./pages/Jimmy"
import Celerio from './pages/Celerio'
function App() {
  return (
    <>
    <Router>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/alturas" element={<Altruz/>}/>
<Route path="/xuv700" element={<Xuv700/>}/>
<Route path="/marzoo" element={<Marzoo/>}/>
<Route path="/fronx" element={<Fronx/>}/>
<Route path="/jimmy" element={<Jimmy/>}/>
<Route path="/celerio" element={<Celerio/>}/>
</Routes>
    </Router>
    </>
  )
}

export default App