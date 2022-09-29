
import CategoryPage from "./pages/CategoryPage"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { Footer } from './components/Footer';
import Announce from "./components/Announce"


function App() {
  return (
  
    <BrowserRouter>
    <Announce />
    <Navbar />

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/categorypage" element={<CategoryPage />} />
        <Route path ="/productpage" element={<ProductPage />} />
        <Route path ="/cart" element={<Cart />} />
        <Route path ="/login" element={<Login/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )

}
export default App

