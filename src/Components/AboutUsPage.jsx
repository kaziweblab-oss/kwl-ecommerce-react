import React from "react";

import "./AboutUsPage.css";

export default function AboutUsPage() {
  return (
    <>
      <section className="about-us-section">
        <div>
          <h2 className="about-us-title" >Welcome to KWL</h2>
          <p className="about-project-desc">
            At KWL, we believe that shopping should be more than just a
            transaction; it should be an experience. We are dedicated to
            providing you the very best of products, with a focus on
            dependability, customer service, and uniqueness. Founded in 2024,
            KWL has come a long way from its beginnings. Our passion for quality
            drove us to do intense research so that we can offer you the world's
            most premium items at your doorstep. We hope you enjoy our products
            as much as we enjoy offering them to you.
          </p>
        </div>
        <div className="about-us-hero-section">
          <div>
            <img
              src="./About-US-Page-Image.png"
              alt="developer pic"
              className="about-us-image"
            />
          </div>
          <div>
            <h2 className="about-us-title" >About Developer</h2>
            <p className="about-me-desc">
              Hi, I’m Kazi Tasin Hossen the creator behind KWL. I am a
              passionate Web Developer who loves building clean, functional, and
              user-friendly web applications. This project is a reflection of my
              journey with React.js, where I explored complex state management,
              dynamic routing, and seamless UI/UX design. My goal is to bridge
              the gap between technology and people through code. Every product
              card and every line of logic in this store has been crafted with
              care to ensure a smooth shopping journey for the users.
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
