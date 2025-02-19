import React from 'react'
import'./About.css'
export default function About() {
  return (
    <div className="container-fluid about  align-content-center">
        <h1 className='text-uppercase text-white text-center '>about component</h1>
        <div className='home-star'><i class="fa-solid fa-star text-white fs-5"></i></div>
        <div className='d-flex justify-content-around text-white'>
            <div className='pt-3 text-start' >
                <p >Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML, <br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p>
            </div>
            <div className='pt-3 text-start'>
            <p>Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML, <br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p>
            </div>
        </div>
    </div>
  )
}
