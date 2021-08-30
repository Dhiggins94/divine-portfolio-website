import React from 'react'
// import { Link } from 'react-router-dom'
export default function Projects() {


  const handleClick = async (e) => {
    e.preventDefault();
}

  return (
    <div>
      <p> heres a list of projects I worked on solo and collaboratively</p>
      <a href="https://nifty-villani-1d1bbc.netlify.app/" onClick={(e) => { handleClick(e.target.value) }}> Project 1</a>
      <br />
      <a href="https://admiring-bartik-ee0a8f.netlify.app/" onClick={(e) => { handleClick(e.target.value) }}> Project 2</a>
      <br/>
      <a href="https://playlistify4real.netlify.app/" onClick={(e) => { handleClick(e.target.value) }}> Project 3</a>
      

    </div>
  )
}
