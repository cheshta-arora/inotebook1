import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
const Navbar = ()=>{
  let location = useLocation();
  let navigate = useNavigate();
//  useEffect(() => {
//     console.log(location);
//   }, [location]);
 const handlelogout = ()=>{
  localStorage.removeItem('token');
  navigate('/login');
 }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/home"? "active" :""}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active" :""}`}to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-primary mx-1" to="/login" role="button">login</Link>
      <Link className="btn btn-primary mx-1" to="/signup" role="button">signup</Link>
      </form>: <button onClick={handlelogout} className='btn btn-primary'>Logout</button>}
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar ;