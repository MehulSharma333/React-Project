import NAVBAR from "./NAVBAR";
import "./App.css";
import News from "./News";



import {
  Route,

 
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";





import React, { Component } from "react"

export default class App extends Component {
 c = "pretty good";
 
  render() {
    return (
      <>
      
     
      <Router>
      
   <NAVBAR/>
      <Routes>
      
<Route exact path="/" element={<News key="general" pageSize ={5} country ="in" category ="general"/> }/>
<Route exact path="/health" element={<News key="health" pageSize ={5} country ="in" category ="health"/> }/>
<Route exact path="/science" element={<News key="science" pageSize ={5} country ="in" category ="science"/> }/>
<Route exact path="/sports" element={<News key="sports" pageSize ={5} country ="in" category ="sports"/> }/>
<Route exact path="/technology" element={<News key="technology" pageSize ={5} country ="in" category ="technology"/> }/>
<Route exact path="/entertainment" element={<News key="entertainment" pageSize ={5} country ="in" category ="entertainment"/> }/>












{/* <Route exact path="/business"> < News key="business" pageSize ={5} country ="in" category ="business"/></Route>
<Route exact path="/health"><  News key="health" pageSize ={5} country ="in" category ="health"/></Route>
<Route exact path="/science"><  News key="science" pageSize ={5} country ="in" category ="science"/></Route>
<Route exact path="/sports" >< News key="sports" pageSize ={5} country ="in" category ="sports"/> </Route>
<Route exact path="/technology">< News key="technology" pageSize ={5} country ="in" category ="technology"/></Route>
<Route exact path="/entertainment"> <  News key="entertainment" pageSize ={5} country ="in" category ="entertainment"/></Route>
        */}
      

      </Routes>
    

     </Router>
      </>
    )
  }
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);
