import { BrowserRouter,Routes,Route } from "react-router-dom"
import Shope from "./Components/ShopePages/Shope"
import Navbar from "./Components/Navbar/Navbar"
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/> 
          <Route path="/" element={<Shope/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
