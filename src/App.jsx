import { BrowserRouter,Routes,Route } from "react-router-dom"
import Shope from "./Components/ShopePages/Shope"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Collection/Home"
import Collection from "./Components/Collection/Collection"
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/> 
          <Route path="/" element={<Shope/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Collection" element={<Collection/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
