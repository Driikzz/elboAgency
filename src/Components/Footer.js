import React from "react";
import '../App.css';


const Footer = () => (
              <div className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                  </div>
                  <ul className="social-icon">
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a></li>
                  </ul>
                  <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#">Accueil</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Nos produits</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">A propos</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
              
                  </ul>
                  <p>&copy;2023 Elbo - Agency | All Rights Reserved</p>
              </div>
);
export default Footer;