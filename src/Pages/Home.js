import React from 'react'
import './style/home.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Medical from "./image/medical.jpg"
import one from "./image/hand exercise box.jpg"

export default function Home() {
  const navigate = useNavigate()
  const handleNavigate = (()=>{
      navigate('/contact')
  })

  return (
    <div className='home'>
      <Outlet />
        <div className="home-container">
          <div className="home-top-content">
            <img src={Medical} alt="" />
          <div className="home-top-content-container">
              <h2>Adamsonic Medical And Physiotherapy Rehabilitating Equipments, Orthotics and Prosthetics Specialist.</h2>
              <button onClick={handleNavigate} >Contact us</button>
          </div>
        </div>
        <div className="descriptopn">
          <div className="descriptopn-container">
              <div className="header">
                <h3>A division of Adamsonic Investment Limited</h3>
              </div>
              <div className="contents">
                <h4>  Orthotics and Prosthetics specialist,</h4>
                <h4>Specialist in Fabrication and production of medical/ physiotherapy equipment,
                Sales, services and repair of medical/ physiotherapy equipments</h4>    
              </div>
              <button  onClick={handleNavigate} >Contact us</button>
          </div>
        </div>
        <section className='Related'>
            <div className="Related-container">
                <div className="header">
                    <h3>Related Product</h3>
                </div>
            </div>
            <div className="related-images">
                <div className="contents">
                    <img src={one} alt="" />
                </div>
                <div className="contents">
                    <img src={one} alt="" />
                </div>
                <div className="contents">
                    <img src={one} alt="" />
                </div>
                <div className="contents">
                    <img src={one} alt="" />
                </div>
            </div>
        </section>

        <div className="footer">
          <footer>Copyright @2023</footer>
        </div>
        </div>
    </div>
  )
}
