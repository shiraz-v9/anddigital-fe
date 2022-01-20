import React from "react";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <div className="d-flex flex-row justify-content-evenly">
        <div>
          <p className="text-light">Shipping</p>
        </div>
        <div>
          <p className="text-light">Contact us</p>
        </div>
        <div>
          <p className="text-light">Gift wrap</p>
        </div>
      </div>{" "}
      <div className="d-flex flex-row justify-content-evenly">
        <p className="text-light">Facebook</p>
        <p className="text-light">Instagram</p>
        <p className="text-light">Twitter</p>
      </div>
      <p className="text-light d-flex flex-row justify-content-evenly">
        Golden Shoes 2022 © all rights reserved
      </p>{" "}
    </div>
  );
}

export default Footer;
