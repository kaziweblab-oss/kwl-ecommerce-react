import React from "react";
import "./FooterSection.css";

// Icons Import Here
import {
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export default function FooterSection() {
  return (
    <footer className="footerSection">
      <ul className="footer-icons">
        <div>
          <li>
            <a href="tel:+01310050878" aria-label="phone" rel="_noreferrer">
              <FaPhone className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+01310050878"
              target="_blank"
              aria-label="WhatsApp"
              rel="noreferrer"
            >
              <FaWhatsapp className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61585149398106"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
          </li>
        </div>
        <div>
          <li>
            <a
              href="https://m.me/61585149398106"
              target="_blank"
              aria-label="Send me a message on Messenger"
              rel="noreferrer"
            >
              <FaFacebookMessenger className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kazi-web-lab-4a1a803a5/"
              target="_blank"
              aria-label="Connect with Kazi Web Lab on LinkedIn"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.fiverr.com/kazitasinhossen"
              target="_blank"
              aria-label="Hire me on Fiverr"
              rel="noreferrer"
            >
              <TbBrandFiverr className="icon" />
            </a>
          </li>
        </div>
      </ul>
      <p className="copyRight"> &copy; All rigth reserve Kazi Tasin Hossen </p>
    </footer>
  );
}
