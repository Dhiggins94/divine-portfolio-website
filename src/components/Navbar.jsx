import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="nav">
      <header> 
      <Link to="/">
        <h3> Home</h3>
        </Link>
        <Link to="AboutMe">
        <h3> About Me</h3>
        </Link>
        <Link to="Projects">
        <h3> Projects</h3>
        </Link>
        <Link to="Contact">
        <h3> Contact </h3>
        </Link>
        <Link to="Resume">
        <h3> Resume</h3>
        </Link>
        </header>
    </div>
  )
}
