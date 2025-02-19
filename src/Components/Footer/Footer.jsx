import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between pre-footer text-white py-5">
        <div className='location px-5 mb-4 mb-md-0'>
          <ul>
            <li className='h2'>LOCATION</li>
            <li>2215 John Daniel Drive</li>
            <li>Clark, MO 65243</li>
          </ul>
        </div>
        <div className='web px-5 ms-md-5 mb-4 mb-md-0'>
          <h2>AROUND THE WEB</h2>
          <div className="icons">
            <i className="fa-brands fa-facebook mx-1 icon"></i>
            <i className="fa-brands fa-twitter mx-1 icon"></i>
            <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
            <i className="fa-solid fa-globe mx-1 icon"></i>
          </div>
        </div>
        <div className='about-freelancer'>
          <h2>ABOUT FREELANCER</h2>
          <p className='text-break'>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
        </div>
      </div>
      <footer className='text-center'>
        <div>
          <p className='text-white p-4'>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  )
}