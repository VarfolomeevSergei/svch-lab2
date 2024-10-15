import { Component } from "react";
import './WeAre.css'; 


const WeAre = () => {
    return (
        <section class="section-five">
        <div class="section-five-container flex-box-between">
          <img 
        //   src="./../../public/img/five-container-img.png" alt="" 
          />
          <div class="section-five-right-element">
            <p class="lng-we-here">
              We’re here to help you turn every “no” you’ve ever heard into a
              "0" on your paycheck.
            </p>
          </div>
        </div>
        <p class="section-five-text-title lng-section-five-text-title">The numbers say it all</p>
        <div id="цифры" class="section-five-inform">
          <div>
            <h3>300+</h3>
            <p class="lng-clients-served">clients served</p>
          </div>
          <div class="border-grid"></div>
          <div>
            <h3>7k+</h3>
            <p class="lng-women-trained">women trained in career growth strategies</p>
          </div>
          <div class="border-grid"></div>
          <div>
            <h3>$2mil+</h3>
            <p class="lng-in-salary">in salary increases during a pandemic</p>
          </div>
        </div>
      </section>
        )
    }


export default WeAre