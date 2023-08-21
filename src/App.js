import Navbar from "./components/Navbar/Navbar";
import "./App.css";
// import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import Intro from "./components/Intro/Intro";
import { themeContext } from "./Context";
import Services from "./components/Services/Services";
import Test from "./components/Works/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route extact path='/' element={<Intro/>}/> */}
        <Route extact path='/Intro' element={<Intro/>}/>
        <Route extact path='/Test' element={<Test/>}/> 
      </Routes>
      <Contact />
      <Footer />
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;