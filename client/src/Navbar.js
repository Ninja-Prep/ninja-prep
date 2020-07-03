import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <img src="images/logo.png"></img>
      <a class="navbar-brand" href="#">
        NinjaPrep
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Explore <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Articles
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Problems
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
