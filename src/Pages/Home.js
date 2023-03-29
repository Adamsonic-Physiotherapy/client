import React, { useState } from 'react'
import './style/home.css'
import { Outlet,  useNavigate } from 'react-router-dom'
import Medical from "./image/medical.jpg"

export default function Home() {
  const navigate = useNavigate()
  const handleNavigate = (()=>{
      navigate('/contact')
  })

  const [ product ] = useState([
    {
        id: 1,
        name : "POSTERIOR LIMB (Adult)",
        image: "https://i.ibb.co/7rm6WD9/Dynamic-foot-raise-children.jpg",
        des: " Next your physiotherapist will physically examine your foot and entire lower extremity. They will palpate, or touch, around your area of discomfort"
    },
    {
        id: 2,
        name : "Aeroplane Splint",
        image: 'https://i.ibb.co/cx2C90C/Aeroplane-splint.jpg',
        des: `A complicated splint that holds the arm in abduction at about
        shoulder level with the forearm midway in flexion, generally
        with an axillary strut for support.`
    },
    {
        id: 3,
        name : "Long Cork-Up Slints (Adult)",
        image: 'https://i.ibb.co/485H2Pg/Long-cork-up.jpg',
        des: `Cock-up style wrist splints securely and comfortably immobilize and protect one's wrist, 
        as needed for treating a variety of wrist injuries and conditions`
    },
    {
        id: 4,
        name : "Reciprocal Pulley (foreign)",
        image: 'https://i.ibb.co/TcFpJWz/Reciprocal-pulley.jpg',
        des: `Reciprocal pulley / Pulley exercisers improve range of motion
        and coordination for those suffering with arthritis, shoulder or
        arm injuries, or post-surgery stiffness. They can also help with
        strengthening the arms, shoulders and chest. Pulley exercisers
        can be mounted over a door, on the floor, or attach to a wall.`
    },
    {
      id: 12,
      name : "Sand Bag",
      image: 'https://i.ibb.co/5KYDp7r/Sand-Bag.jpg',
      des: `For patient placement and rehabilitative assistance before and
      after surgical procedures, sandbags with handles are employed.
      Our medical sandbags are composed of heavy-duty vinyl and 4-way
      stretch fabrics that are anti-fungal, anti-bacterial, tear- and
      stain-resistant.`
  },
  {
      id: 13,
      name : "Functional Toe Raise Device",
      image: 'https://i.ibb.co/RzkM7k7/Posterior-Limb.jpg',
      des: ``
  },
  {
      id: 14,
      name : "Wall Ladder/ Wall Bar",
      image: 'https://i.ibb.co/5KFzVsz/wall-ladder.jpg',
      des: ``
  },
  {
      id: 15,
      name : "Long Cork_Up ",
      image: 'https://i.ibb.co/qxBbrHq/PHY-13.jpg'
  },
  ])

  const handleProduct = ((name, image, des)=>{
    navigate('/product/single',{
      state:{
        name, image, des
      }
    })
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
                    <h3>Popular Products</h3>
                </div>
            </div>
            
                <div className="related-images">
                { product.map((er)=>(
                  <div className="contents" onClick={()=>handleProduct(er.name, er.image, er.des)} key={er.id}>
                      <img src={er.image} alt="" />
                  </div>
                 )) }
              </div>
        </section>

        <div className="footer">
          <footer>Copyright @2023</footer>
        </div>
        </div>
    </div>
  )
}
