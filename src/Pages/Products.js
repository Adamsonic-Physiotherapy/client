import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style/products.css'
import { Outlet } from "react-router-dom";

export default function Products() {

const navigate = useNavigate()

const [ product ] = useState([
    {
        id: 1,
        name : "POSTERIOR LIMB SUPPORT (PLS)",
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
        name : "Long Cork-Up Slints ",
        image: 'https://i.ibb.co/485H2Pg/Long-cork-up.jpg',
        des: `Cock-up style wrist splints securely and comfortably immobilize and protect one's wrist, 
        as needed for treating a variety of wrist injuries and conditions`
    },
    {
        id: 4,
        name : "Reciprocal Pulley",
        image: 'https://i.ibb.co/TcFpJWz/Reciprocal-pulley.jpg',
        des: `Reciprocal pulley / Pulley exercisers improve range of motion
        and coordination for those suffering with arthritis, shoulder or
        arm injuries, or post-surgery stiffness. They can also help with
        strengthening the arms, shoulders and chest. Pulley exercisers
        can be mounted over a door, on the floor, or attach to a wall.`
    },
    {
        id: 5,
        name : "Wobblr Board",
        image: 'https://i.ibb.co/ngyNwNV/wobby-board-local.jpg',
        des: `The Quadriceps Bench is a functional muscle exerciser, allowing
        a large number of exercises to be performed within minimum floor
        surface. as well as exercises in a reclining position (for
        instance knee flexion and hip stretching).`
    }, 
    {
        id: 6,
        name : "Insole",
        image: 'https://i.ibb.co/L8tjmWy/snad-bag.jpg',
        des: ``
    }, 
    {
        id: 7,
        name : "Long Cork-Up Splint",
        image: 'https://i.ibb.co/yRsHgZ1/Long-cork-splint-adult.jpg',
        des: `   Cock-up splint helps to hold the wrists and hands “cocked-up” in
        a single position and immobilise the wrist during healing of
        wrist injuries.`
    }, 
    {
        id: 8,
        name : "Cork-Up Splint",
        image: 'https://i.ibb.co/DMhzgq0/PHY-8.jpg',
        des: `   Cock-up splint helps to hold the wrists and hands “cocked-up” in
        a single position and immobilise the wrist during healing of
        wrist injuries.`
    }, 
    {
        id: 10,
        name : "Cork Up Spring",
        image: 'https://i.ibb.co/ggbYTJn/cork-Up-Spring-children.jpg',
        des: ` Cock-up splint helps to hold the wrists and hands “cocked-up” in
        a single position and immobilise the wrist during healing of
        wrist injuries.`
    },
    {
        id: 11,
        name : "Lumber Roll",
        image: 'https://i.ibb.co/cL5L5F4/Lumber-Roll.jpg',
        des: `  This Round roll compresses easily whilst still providing essential medium-firm support. It suits larger framed people and those with a pronounced lumbar`
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
        name : "Trunk Support",
        image: 'https://i.ibb.co/qxBbrHq/PHY-13.jpg'
    },
    {
        id: 16,
        name : "Shoulder Ladder",
        image: 'https://i.ibb.co/hXQ9H1R/A.jpg'
    },
    {
        id: 17,
        name : "Medical Finger physiotherapy Hemiplega Rehabilitation Equipment",
        image: 'https://i.ibb.co/Q6bkK47/b.jpg'
    },
    {
        id: 18,
        name : "Long Cork-up Splint",
        image: 'https://i.ibb.co/fFJx3kM/PHY-20.jpg'
    },
    {
        id: 19,
        name : "Parallel Bar",
        image: 'https://i.ibb.co/Fx6JnFx/da.jpg'
    },
    {
        id: 20,
        name : "Finger Training Box",
        image: 'https://i.ibb.co/HK98JDz/PHY-14.jpg'
    },
    {
        id: 21,
        name : "Child Walker Box",
        image: 'https://i.ibb.co/zGCYNHN/PHY-15.jpg'
    },
    {
        id: 22,
        name : "Cerebral Palsy Chair",
        image: 'https://i.ibb.co/ZXdKvxD/PHY-16.jpg'
    },
    {
        id: 23,
        name : "Standing Frame",
        image: 'https://i.ibb.co/QvRMW1k/PHY-17.jpg'
    },
    {
        id: 24,
        name : "Hand Exercise box Rehabilitation",
        image: 'https://i.ibb.co/BKpb91X/handle.jpg'
    },

    {
        id: 25,
        name : "Back Slap",
        image: 'https://i.ibb.co/RyfZsq9/PHY-23.jpg'
    },
    {
        id: 26,
        name : "Harmstring Extensor Board",
        image: 'https://i.ibb.co/KbGV7nw/PHY-18.jpg'
    },
    {
        id: 27,
        name : "Quoricep Board",
        image: 'https://i.ibb.co/MVWrhgW/Quoricep.jpg'
    },
])
    
    const HandleRoutes = ((e, image, name , price, des)=>{
        navigate(e,{
            state:{
                image, name, price, des
            }
        })
    })
  return (
        <div className='product'>
          <Outlet />
            <div className="product-container">
            { product && product.map((e)=>(
                <div key={e.id} onClick={()=>HandleRoutes('single', e.image, e.name, e.price, e.des)} className="product-top-content">
                <img src={e.image} alt="" />
                <div className="dec">
                    <div className="dec-container">
                        <div className="name">
                            <h4>{e.name}</h4>
                        </div>
                        <div className="name2">
                            <h4>{e.price}</h4>
                        </div>
                    </div>
                </div>
                </div> 
            ))}
            </div>
            <div className="footer">
              <footer>Copyright @2023</footer>
            </div>
        </div>
      )
}
    