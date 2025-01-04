
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from './components/Header/Header';
import Signin from './pages/SignIn/Signin';
import Aboutus from "./pages/AboutUs/Aboutus";
import Footer from "./components/Footer/Footer";
import Populargames from "./components/Populargames/Populargames"; // استيراد مكون Populargames

// Don't change anything in the App function without notifying the whole team.
function App() {
  const games = [
    { 
      image: "image/fortnite.jpg", 
      name: "Fortnite", 
      genre: "survival", 
      rating: "9.5/10" 
    },
    { 
      image: "image/rdr2.jpg", 
      name: "Rdr2", 
      genre: "survival", 
      rating: "9.1/10" 
    },
    { 
      image: "image/battlefield.jpg", 
      name: "Battlefield", 
      genre: "war", 
      rating: "9.9/10" 
    },
    { 
      image: "image/apex.jpg", 
      name: "Apex Legends", 
      genre: "survival", 
      rating: "9.9/10" 
    },
    { 
      image: "image/forza.jpg", 
      name: "Forza", 
      genre: "racing", 
      rating: "9.6/10" 
    }
  ];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}> 
          <Route path="games" element={<Home />} />
        </Route>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
      </Routes>
      
      <Populargames games={games} /> 

      <Footer />
    </>
  );
}

export default App;