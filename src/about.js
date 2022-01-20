import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import sign from "./assets/signature.png";

function About() {
  return (
    <div>
      <Navbar />
      <div className="w-75 mx-auto mt-5 mb-5 loading">
        <p>
          Welcome to golden shoe, your number one source for all footwear .
          We're dedicated to providing you the very best of footwear, with an
          emphasis on sportwear, training, & casualwear, including men & women.
          Founded in 2003 by mr Shuu, golden shoe has come a long way from its
          beginnings in Manchester England. When mr Shuu first started out, his
          passion for comfortable footwear, that does't suck drove them to start
          their own business. We hope you enjoy our products as much as we enjoy
          offering them to you. If you have any questions or comments, please
          don't hesitate to contact us. Sincerely, mr Shuu
        </p>
        <img src={sign} alt="founder" height={"50px"} width={"100px"} />
      </div>

      <Footer />
    </div>
  );
}

export default About;
