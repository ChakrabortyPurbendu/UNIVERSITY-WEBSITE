
import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contactus/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"


function App() {
  
   const[playstate,setPlayState]= useState(false);

  return (
    <>
      
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle="OUR PROGRAM" title="What We Offer" />
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle="Gallery" title="Campus Photos
      " />
      <Campus/>
      <Title subTitle="TESTIMONIALS" title="What student says
      " />
      <Testimonials/>
      <Title subTitle="Cantact Us" title="Get in Touch
      " />
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playstate={playstate} setPlayState={setPlayState}  />
      
    </>
  )
}

export default App
