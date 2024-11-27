import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from "./assets/Component/Navber"
import Herro from "./assets/Component/Herro"
import  Presentation from "./assets/Component/Presentation"
import ImageSlider from "./assets/Component/Slider"
import VideoAdd from "./assets/Component/VideoAdd"
import Time from "./assets/Component/Time"
import BomArea from "./assets/Component/BomArea"
import Blog from "./assets/Component/Blog"
import Footer from "./assets/Component/Footer"
function App() {
 
  return (
    <>
    <main className='overflow-x-hidden'>  
   <Navbar></Navbar>
   <Herro></Herro>
   <Presentation></Presentation>
    <ImageSlider></ImageSlider>
    <VideoAdd></VideoAdd>
    <Time></Time>
    <BomArea></BomArea>
    <Blog></Blog>
    <Footer></Footer>
</main>
  
    
        
    </>
  )
}

export default App
