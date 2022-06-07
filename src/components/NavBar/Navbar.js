import React from 'react'
import './navbar.css'

/**
 * It returns a navbar with a list of links.
 * @returns A React component.
 */
const Navbar = () => {
  return (
    <>
      <nav className="navbar-content">
        <ul className="nav-ul">
          <li><a href='/todos' >Todos</a></li>
          <li><a href='/autos'>Autos</a></li>
          <li><a href='/salud' >Salud</a></li>
          <li><a href='/' >Hogar</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar