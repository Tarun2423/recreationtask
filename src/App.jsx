import React from 'react'
import './App.css'
import { InlineWidget } from "react-calendly";
function App() {

  return (
    <>
    <div className="container">
      <div className="nav">
        <div className="logo">
          <img src="ohs-logo.png" alt="OHS Logo"/>
        </div>
        <div className="links">
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Services</a>
          <a href=''className='active'>Book Appointment</a>
        </div>
      </div>
      <section className="info">
        <div className="heading">
          <h1>
          Leading Occupational Health Solutions
          <br/>
          for Modern Enterprises
          </h1>
          <button className='info_button'>Read More</button>
        </div>
      </section>
      <section className="about">
        <div className="about_heading">
          <h2>About Us</h2>
          <p>In a business landscape increasingly complicated by health and safety concerns, you can count on 
          <span> OHS </span>
          as your go-to expert.
          <br/>
          <br/>
          We don't believe in one-size-fits-all solutions; instead, we take the time to understand the unique challenges your enterprise faces. By doing so, we provide custom strategies that are not only effective but also budget-friendly.
          <br/>
          <br/>
          With a track record built on years of industry know-how and a thorough grasp of occupational health guidelines, we're here to elevate your workplace well-being.
          </p>
        </div>
        <div className="about_pic"></div>
      </section>
      <section className="services">
        <h1 className="service_title">Our Services</h1>
        <div className="service_wrapper">
          <div className="service_container">
            <div className="service_heading">
              <h3>Services</h3>
              <h2>Comprehensive Occupational Health Offerings</h2>
              <p>We provide a flexible pay-as-you-go model for SMEs, ensuring tailored solutions without annual commitments.
                <br/>
                <br/>
                Additionally, we offer reminders for health screenings, diligent record maintenance, and managerial support as needed.
              </p>
              <button>Request a Call</button>
            </div>
          </div>
          <div className="services_parent">
            <div className="services_box box1">
              <h2>Health Surveillance</h2>
              <p>Proactive measures to monitor, assess, and maintain the optimal health of your workforce, ensuring regulatory compliance.</p>
            </div>
            <div className="services_box box2">
              <h2>Workplace Ergonomics</h2>
              <p>Comprehensive assessments and solutions aimed at enhancing workspaces for maximum efficiency, comfort, and employee well-being.</p>
            </div>
            <div className="services_box box3">
              <h2>Occupational Health</h2>
              <p>Strategies and protocols designed to foster a safe, health-centric work environment, minimizing risks and hazards.</p>
            </div>
            <div className="services_box box4">
              <h2>Health and Well-being</h2>
              <p>Holistic programs that integrate both mental and physical aspects to promote overall employee health, satisfaction, and productivity.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="appointment">
        <div className="text">
          <h1 className="app_heading">Engage with
          <br/>
          Our Experts</h1>
          <p>
          Discover how 
          <span> OHS </span>
          can enhance your business's health and productivity metrics. Engage with our specialists for a detailed consultation.
          </p>
        </div>
        <div className="App">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div>
      </section>
      <footer>
        <div className="foo_top">
          <div className="foo_logo">
            <img src='ohs-logo.png'></img>
          </div>
          <div className="foo_menu">
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
          <div className="foo_socials">
            <img src='facebook-icon.png'></img>
            <img src='linkedin-icon.png'></img>
            <img src='instagram-icon.png'></img>
          </div>
        </div>
        <div className="foo_sep"></div>
        <div className="foo_bottom">
          <div className="copy">
            <p>© Occupational Health Services 2023</p>
          </div>
          <div className="foo_end">
            <p>Built With Passion by 
                <a href='www.themerakistudio.co'><span> The Meraki Studio </span></a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
