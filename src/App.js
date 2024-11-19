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
import KiaSeltos from "./pages/KiaSeltos"
import KiaSorneto from './pages/KiaSorneto'
import KiaEv9 from "./pages/KiaEv9"
import MgComet from "./pages/MgComet"
import MgWindsor from "./pages/MgWindsor"
import MgHector from "./pages/MgHector"
import Legender from "./pages/Legender"
import Fortuner from './pages/Fortuner'
import Glanza from './pages/Glanza'
import HondaCity from "./pages/HondaCity"
import HondaHrv from "./pages/HondaHrv"
import Amaze from "./pages/Amaze"
import RenaultFluence from "./pages/RenaultFluence"
import RenaultKiger from "./pages/RenaultKiger"
import RenaultTriber from "./pages/RenaultTriber"
import AllHyundaiCars from "./components/AllHyundaiCars"
import AllMahindra from './components/AllMahindra'
import AllMaruti from "./components/AllMaruti"
import AllTata from "./components/AllTata"
import AllVolkawagen from "./components/AllVolkawagen"
import AllKia from "./components/AllKia"
import AllMg from "./components/AllMg"
import AllToyota from "./components/AllToyota"
import AllHondaCar from "./components/AllHondaCar"
import AllRenaultCar from "./components/AllRenaultCar"
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
<Route path="/kiaseltos" element={<KiaSeltos/>}/>
<Route path="/kiasorneto" element={<KiaSorneto/>}/>
<Route path="/kiaev9" element={<KiaEv9/>}/>
<Route path="/mgcomet" element={<MgComet/>}/>
<Route path="/mgwindsor" element={<MgWindsor/>}/>
<Route path="/mghector" element={<MgHector/>}/>
<Route path="/legender" element={<Legender/>}/>
<Route path="/fortuner" element={<Fortuner/>}/>
<Route path="/glanza" element={<Glanza/>}/>
<Route path="/hondacity" element={<HondaCity/>}/>
<Route path="/hondahrv" element={<HondaHrv/>}/>
<Route path="/amaze" element={<Amaze/>}/>
<Route path="/fluence" element={<RenaultFluence/>}/>
<Route path="/kiger" element={<RenaultKiger/>}/>
<Route path="/triber" element={<RenaultTriber/>}/>
<Route path="/all-hyundai-cars" element={<AllHyundaiCars/>}/>
<Route path="/all-mahindra-cars" element={<AllMahindra/>}/>
<Route path="/all-maruti-cars" element={<AllMaruti/>}/>
<Route path='/all-tata-cars' element={<AllTata/>}/>
<Route path="/all-volkswagen-cars"element={<AllVolkawagen/>}/>
<Route path="/all-kia-cars" element={<AllKia/>}/>
<Route path="/all-mg-cars" element={<AllMg/>}/>
<Route path="/all-toyota-cars" element={<AllToyota/>}/>
<Route path="/all-honda-cars" element={<AllHondaCar/>}/>
<Route path="/all-renault-cars" element={<AllRenaultCar/>}/>
</Routes>
    </Router>
    </>
  )
}
export default App