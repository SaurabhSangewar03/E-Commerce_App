import React from "react";
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import "../App.css";

function Navbar() {
  const state = useSelector((state)=> state.handleCart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3" style={{backgroundColor: "blue"}}>
        <div className="container">
          <FaShoppingCart style={{color: "yellow", marginRight: "10px"}}/>
          <NavLink to ="/" className="navbar-brand fw-bold fs-4" style={{color: "yellow"}}>
            E-Commerce  
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item nav-pages">
                <NavLink className="nav-link active" aria-current="page" to="/" style={{color: "antiquewhite", fontWeight: "500"}}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products" style={{color: "antiquewhite", fontWeight: "500"}}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addproduct" style={{color: "antiquewhite", fontWeight: "500"}}>
                  Add Product
                </NavLink>
              </li>
                          
            </ul>
           <div className="buttons">
               
               
               <NavLink to="/cart" className="btn btn-outline-warning ms-2" style={{borderRadius: "0px", border: "2px solid orange"}}>
                 <i className="fa fa-shopping-cart me-1"></i>  Cart ({state.length})
               </NavLink>
           </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
