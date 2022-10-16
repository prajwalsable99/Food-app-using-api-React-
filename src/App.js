
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Foods from './components/Foods';


export default class App extends Component {

     render() {
          return (

               <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                         
                         <Route exact path="" element={<Foods  key="Miscellaneous"category="Miscellaneous"></Foods>}> </Route>
                         <Route exact path="/Seafood" element={<Foods key="Seafood"category="Seafood"></Foods>}> </Route>
                         <Route exact path="/Breakfast" element={<Foods key=" Breakfast"category="Breakfast"></Foods>}> </Route>
                         <Route exact path="/Dessert" element={<Foods  key="Dessert"category="Dessert"></Foods>}> </Route>
                         <Route exact path="/Chicken" element={<Foods key="Chicken" category="Chicken"></Foods>}></Route>
                         <Route exact path="/Pasta" element={<Foods key="Pasta" category="Pasta"></Foods>}></Route>
                         <Route exact path="/Vegetarian" element={<Foods key="Vegetarian" category="Vegetarian"></Foods>}></Route>
                         <Route exact path="/Side" element={<Foods key="Side" category="Side"></Foods>}></Route>

                        
                    </Routes>
               </BrowserRouter>





          )
     }
}

