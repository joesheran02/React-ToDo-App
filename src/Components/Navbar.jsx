import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ToDo-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Add List</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search List</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">Delete List</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/View">View All List</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
