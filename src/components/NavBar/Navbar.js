import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar-content">
        <ul className="nav-ul">
          <li>Todos</li>
          <li>Autos</li>
          <li>Salud</li>
          <li>Hogar</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar