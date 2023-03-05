import React, { Component } from "react";
import "./footer.css";

export default function footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div class="social">
          <a href="#">
            <i class="icon ion-social-instagram"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-snapchat"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="/profile">profile</a>
          </li>
          <li class="list-inline-item">
            <a href="/about">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p class="copyright">INED © 2023</p>
      </footer>
    </div>
  );
}
