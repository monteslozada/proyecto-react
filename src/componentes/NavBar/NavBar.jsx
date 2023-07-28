import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (

    // <nav class="navbar bg-body-tertiary fixed-top">
    //   <div class="container-fluid">
    //   <NavLink className="navbar-brand" to='/'>Game Store </NavLink>
    //   <NavLink className="nav-link active" to='/category/cart'>
    //               <CartWidget/>                  
    //             </NavLink>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    //       <div className="offcanvas-header">
    //         <NavLink className="offcanvas-title" id="offcanvasNavbarLabel" to='/'>Game Store</NavLink>
    //       </div>
    //       <div className="offcanvas-body">
    //         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
    //           <li className="nav-item">             
    //             <NavLink to={`/categoria/Playstation`} className="nav-link active" aria-current="page" ><i class="bi bi-playstation"></i> Playstation</NavLink>
    //           </li>
    //           <li className="nav-item">
          
    //             <NavLink to={`/categoria/Xbox`}className="nav-link active" ><i class="bi bi-xbox"></i> Xbox</NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink to={`/categoria/Nintendo`} className="nav-link active" ><i class="bi bi-nintendo-switch"></i> Nintendo</NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link active" to='/category/cart'>
    //               <CartWidget/>                  
    //             </NavLink>
    //           </li>
    //         </ul>
    //         <form className="d-flex mt-3" role="search">
    //         </form>          
          
    //       </div>
    //     </div>
    //   </div>
    // </nav>


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <NavLink className="offcanvas-title" id="offcanvasNavbarLabel" to='/'>GAME STORE</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to={`/categoria/Xbox`}className="nav-link active" ><i class="bi bi-xbox"></i> Xbox</NavLink>          
        </li>
        <li className="nav-item">
        <NavLink to={`/categoria/Playstation`} className="nav-link active" aria-current="page" ><i class="bi bi-playstation"></i> Playstation</NavLink>    
        </li>
        <li className="nav-item">
        <NavLink to={`/categoria/Nintendo`} className="nav-link active" ><i class="bi bi-nintendo-switch"></i> Nintendo</NavLink>
         
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to='/category/cart'>
        <CartWidget/> 
        </NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default NavBar;
