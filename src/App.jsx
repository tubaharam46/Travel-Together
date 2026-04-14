import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";


function App(){
  return(

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AdminLogin/>} />
          <Route path="/AdminHome/*" element={<AdminHome/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App