import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import img1 from '../../assets/Images/poert1.png';
import img2 from '../../assets/Images/port2.png';
import img3 from '../../assets/Images/port3.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const [imgSrc, setImgSrc] = useState("");
  const [isLayerVisible, setIsLayerVisible] = useState(false);

  function display(event) {
    const imgElement = event.currentTarget.querySelector("img");
    if (imgElement) {
      setImgSrc(imgElement.src);
      setIsLayerVisible(true);
    }
  }

  function hideLayer() {
    setIsLayerVisible(false);
  }

  return (
    <>
      <h1 className='pt-5 portfolio-title text-capitalize'>portfolio component</h1>
      <div className='contact-star'><i className="fa-solid fa-star fs-5"></i></div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 the-img" onClick={display}>
            <img className="w-100 imgs" src={img1} alt="Image 1" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 the-img" onClick={display}>
            <img className="w-100 imgs" src={img2} alt="Image 2" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 the-img" onClick={display}>
            <img className="w-100 imgs" src={img3} alt="Image 3" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-4 the-img" onClick={display}>
            <img className="w-100 imgs" src={img1} alt="Image 1" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 the-img" onClick={display}>
            <img className="w-100 imgs" src={img2} alt="Image 2" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 the-img" onClick={display}>
            <img className="w-100 imgs" src={img3} alt="Image 3" />
          </div>
        </div>
      </div>

      {isLayerVisible && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={hideLayer}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Image Preview</h5>
                <button type="button" className="close" onClick={hideLayer}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={imgSrc} className="w-100" alt="Preview" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}