"use client";
import Link from "next/link";
import React, { useState } from "react";
/*import { useCart } from "@/Context/ProductContext";*/
function Header() {
  /*const { cartCount } = useCart();*/
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand pe-5 fw-bold" href="/">
            <img src="/logonew.jpg" alt="Logo" width={150} height={100} />
          </Link>
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/AboutUs">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/ContactUs">
                  ContactUs
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
