import React from "react";
import "./Contacts.css";
export default function Contacts() {
  return (
    <>
      <h1 className="pt-3  text-center text-capitalize">conatct section</h1>
      <div className="contact-star">
        <i class="fa-solid fa-star    fs-5"></i>
      </div>
      <form className="form-control align-content-center py-5  pb-2 my-5">
        <div>
          {" "}
          <input type="text" placeholder="User Name" className="m-3 w-50" />
        </div>
        <div>
          {" "}
          <input type="date" placeholder="User Age " className="m-3 w-50" />
        </div>
        <div>
          {" "}
          <input type="email" placeholder="User email" className="m-3 w-50" />
        </div>
        <div>
          {" "}
          <input type="text" placeholder="User Password" className="m-3 w-50" />
        </div>
      </form>
      <button className="rounded-2 bg-primary text-white m-3">
        Send Message
      </button>
    </>
  );
}
