import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Project from "./pages/Project"
import Dashboard from "./pages/Dashboard"
import Aboute from "./pages/Aboute"
import Header from "./components/Header"
import FooterCom from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Aboute/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}

export default App