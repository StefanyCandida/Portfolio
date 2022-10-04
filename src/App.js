import React from "react";
import Header from "./Components/Header";

import Footer from "./Components/Footer"
import {GlobalStyle} from './Components/Styled/HeaderStyled'

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
