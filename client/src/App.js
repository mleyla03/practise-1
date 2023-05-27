import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog"
import Footer from "./component/Footer";
function App() {
  return (
   <>
    <Navbar/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog/>} />
    </Routes>
    <Footer/>
   </>
  );
}
export default App
