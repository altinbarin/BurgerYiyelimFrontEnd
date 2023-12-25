import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'


function About() {
  return (
    <div className='about'>
      <div className='aboutTop' 
      style={{backgroundImage: `url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>
          Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.
          Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.Lorem Ipsun dolor sit amet, consectetur adipiscing elit. Nulla.
        </p>
      </div>
    </div>
  )
}

export default About
