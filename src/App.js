import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import Altruz from "./pages/Altruz"
import Xuv700 from "./pages/Xuv700"
import Marzoo from "./pages/Marzoo"
import Fronx from "./pages/Fronx"
import Jimmy from "./pages/Jimmy"
import Celerio from './pages/Celerio'
import Hyundaii20 from "./pages/Hyundaii20"
import Aura from "./pages/Aura"
import Creta from "./pages/Creta"
import TataNexon from './pages/TataNexon'
import Altroz from "./pages/Altroz"
import Curvv from "./pages/Curvv"
import CrossPolo from "./pages/CrossPolo"
import Taigun from "./pages/Taigun"
import VirtusGt from "./pages/VirtusGt"
// import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/alturas" element={<Altruz/>}/>
<Route path="/xuv700" element={<Xuv700/>}/>
<Route path="/marzoo" element={<Marzoo/>}/>
<Route path="/fronx" element={<Fronx/>}/>
<Route path="/jimmy" element={<Jimmy/>}/>
<Route path="/celerio" element={<Celerio/>}/>
<Route path="/i20" element={<Hyundaii20/>}/>
<Route path="/aura" element={<Aura/>}/>
<Route path="/creta" element={<Creta/>}/>
<Route path="/nexon" element={<TataNexon/>}/>
<Route path="/altroz" element={<Altroz/>}/>
<Route path="/curvv" element={<Curvv/>}/>
<Route path="/crosspolo" element={<CrossPolo/>}/>
<Route path="/taigun" element={<Taigun/>}/>
<Route path="/virtusgt" element={<VirtusGt/>}/>
</Routes>
    </Router>
    </>
  )
}

export default App