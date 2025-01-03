import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from './components/Header/Header';
import Signin from './pages/SignIn/Signin';
import Aboutus from "./pages/AboutUs/Aboutus";
import Footer from "./components/Footer/Footer";
import Populargames from "./components/Populargames/Populargames";

// Don't change anything in the App function without notifying the whole team.

function App() {

  return( 
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
        <Populargames/>

       
    <Footer />
    </>

    );


}

export default App;
