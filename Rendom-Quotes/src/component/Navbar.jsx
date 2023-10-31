import React from 'react'

export default function Navbar() {
  return (
   
    <>
  {/* Hello world */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Daily Quote's 
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Registration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Add Quote
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>


  )
}
