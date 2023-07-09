import React, { Component } from "react";
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            40,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          100,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.09,.98,.52,.99)",    // Easing on enter/exit.
}

export default class CardCarousel extends Component {
    
    render() {
      const settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        focusOnSelect: true,
        centerPadding: "400px",
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerPadding: "0px",
                slidesToShow: 1,
                slidesToScroll: 0,
              }
            },
            {
              breakpoint: 768,
              settings: {
                centerPadding: "0px",
                slidesToShow: 1,
                slidesToScroll: 0,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  centerPadding: "0px",
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 425,
                settings: {
                  centerPadding: "79px",
                  slidesToShow: 0.5,
                  slidesToScroll: 0,
                }
              },
            {
              breakpoint: 320,
              settings: {
                centerPadding: "30px",
                slidesToShow: 0.5,
                slidesToScroll: 0
              }
            }
          ]
      };
      return (
        <div className="card-carousel">
          <Slider {...settings}>
          <Tilt options={defaultOptions}>
            <div className="card-project">
                <div className="card-name">
                    <h3>Name</h3>
                    <h2>Projet cuisine</h2>
                </div>
                <div className="card-img">

                </div>
                <div className="card-about">
                    <h3>About</h3>
                    <p>Donec aliquam pharetra enim. Aenean nibh nisl, blandit sed leo pretium, congue blandit libero. Nunc vel elementum purus. Quisque commodo, tellus cursus rutrum porttitor, massa ipsum molestie risus,landit bero</p>
                </div>
                <div className="card-time">
                    <h3>Time</h3>
                    <p>68 HEURES</p>
                </div>
                <div className="card-credit">
                    <h3>Crédit</h3>
                    <p>Rémi Logan</p>
                </div>
            </div>
            </Tilt>
            <Tilt options={defaultOptions}>
                <div className="card-project">
            
                    <div className="card-name">
                        <h3>Name</h3>
                        <h2>Projet cuisine</h2>
                    </div>
                    <div className="card-img">

                    </div>
                    <div className="card-about">
                        <h3>About</h3>
                        <p>Donec aliquam pharetra enim. Aenean nibh nisl, blandit sed leo pretium, congue blandit libero. Nunc vel elementum purus. Quisque commodo, tellus cursus rutrum porttitor, massa ipsum molestie risus,landit bero</p>
                    </div>
                    <div className="card-time">
                        <h3>Time</h3>
                        <p>68 HEURES</p>
                    </div>
                    <div className="card-credit">
                        <h3>Crédit</h3>
                        <p>Rémi Logan</p>
                    </div>
                </div>
            </Tilt>
            <Tilt options={defaultOptions}>
                <div className="card-project">
            
                    <div className="card-name">
                        <h3>Name</h3>
                        <h2>Projet cuisine</h2>
                    </div>
                    <div className="card-img">

                    </div>
                    <div className="card-about">
                        <h3>About</h3>
                        <p>Donec aliquam pharetra enim. Aenean nibh nisl, blandit sed leo pretium, congue blandit libero. Nunc vel elementum purus. Quisque commodo, tellus cursus rutrum porttitor, massa ipsum molestie risus,landit bero</p>
                    </div>
                    <div className="card-time">
                        <h3>Time</h3>
                        <p>68 HEURES</p>
                    </div>
                    <div className="card-credit">
                        <h3>Crédit</h3>
                        <p>Rémi Logan</p>
                    </div>
                </div>
            </Tilt>
            <Tilt options={defaultOptions}>
                <div className="card-project">
            
                    <div className="card-name">
                        <h3>Name</h3>
                        <h2>Projet cuisine</h2>
                    </div>
                    <div className="card-img">

                    </div>
                    <div className="card-about">
                        <h3>About</h3>
                        <p>Donec aliquam pharetra enim. Aenean nibh nisl, blandit sed leo pretium, congue blandit libero. Nunc vel elementum purus. Quisque commodo, tellus cursus rutrum porttitor, massa ipsum molestie risus,landit bero</p>
                    </div>
                    <div className="card-time">
                        <h3>Time</h3>
                        <p>68 HEURES</p>
                    </div>
                    <div className="card-credit">
                        <h3>Crédit</h3>
                        <p>Rémi Logan</p>
                    </div>
                </div>
            </Tilt>
            <Tilt options={defaultOptions}>
                <div className="card-project">
            
                    <div className="card-name">
                        <h3>Name</h3>
                        <h2>Projet cuisine</h2>
                    </div>
                    <div className="card-img">

                    </div>
                    <div className="card-about">
                        <h3>About</h3>
                        <p>Donec aliquam pharetra enim. Aenean nibh nisl, blandit sed leo pretium, congue blandit libero. Nunc vel elementum purus. Quisque commodo, tellus cursus rutrum porttitor, massa ipsum molestie risus,landit bero</p>
                    </div>
                    <div className="card-time">
                        <h3>Time</h3>
                        <p>68 HEURES</p>
                    </div>
                    <div className="card-credit">
                        <h3>Crédit</h3>
                        <p>Rémi Logan</p>
                    </div>
                </div>
            </Tilt>
            <Tilt options={defaultOptions}>
                <div className="card-project">
            
                    <div className="card-name">
                        <h3>Name</h3>
                        <h2>Projet cuisine</h2>
                    </div>
                    <div className="card-img">

                    </div>
                    <div className="card-about">
                        <h3>About</h3>
                        <p>Donec aliquam pharetra enim. Aenean nibh nisl, blandit sed leo pretium, congue blandit libero. Nunc vel elementum purus. Quisque commodo, tellus cursus rutrum porttitor, massa ipsum molestie risus,landit bero</p>
                    </div>
                    <div className="card-time">
                        <h3>Time</h3>
                        <p>68 HEURES</p>
                    </div>
                    <div className="card-credit">
                        <h3>Crédit</h3>
                        <p>Rémi Logan</p>
                    </div>
                </div>
            </Tilt>
          </Slider>
        </div>
      );
    }
  }