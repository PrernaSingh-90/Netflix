import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Saved from './Components/Saved';


const App = () => {
  
  const [images, setImages] = useState([])
  const [search, setSearch] = useState("random")
  const [loader, setLoader] = useState(true)
  const [saved, setSaved] = useState([])
  

  const API_KEY = "djb9rxtQ2hHCc826u6ewrnSpdvhbv4mlV8jf5s3mY19xedRfnruADZMw";
  // const URL =  "https://api.pexels.com/v1/search?query=nature&per_page=1";

  useEffect(() => {
    const fetchImage = async() => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`
      ,{
        headers:{
          Authorization:API_KEY,
        },
      }
    );
    // console.log("response from API = " , res.data.photos);
    setImages(res.data.photos);
    setLoader(false)
    console.log(images)
    }

    const data = JSON.parse(localStorage.getItem("Images"))
    if(data){
      setSaved(data)
    }

     fetchImage()
  },[search])

  useEffect(() => {
    if(saved.length !=0) {
      const json = JSON.stringify(saved)
      localStorage.setItem("Images", json)
    }
  },[saved])


  console.log("Image is saved ", saved)
 
  return (
    <div>
    <Router>
    <Navbar setSearch={setSearch}/>
    <Routes>
    <Route path='/' element = {<Home images={images} loader={loader} saved={saved} setSaved={setSaved}/>}/>
    <Route path='/saved' element = {<Saved  saved={saved} loader={loader} />}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App
