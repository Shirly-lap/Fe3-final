import React from "react";
import DH from "../images/DH.png";
import facebook from "../images/facebook.png";
import intagram from "../images/instagram.png";
import tikTok from "../images/tik-tok.png";
import whatsapp from "../images/whatsapp.png";
const Footer = () => {
  const style = { width: "2vw", cursor: "pointer" };
  return (
    <>
      <div style={{background:' #f21d1d', width:'100vw', height:'5vw', marginTop:'20vw'}}></div>
      <footer>
        <div style={{ position: "absolute", width: "20vw", left: "15vw" }}>
          <p>
            Powered by{" "}
            <img
              src={DH}
              alt="DH-logo"
            />
          </p>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "15vw",
            justifyContent: "space-around",
            width: "15vw",
            top: "5vw",
          }}
        >
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" style={style} />
          </a>

          <a href="https://www.tiktok.com/%22%3E">
            <img src={intagram} alt="instagram" style={style} />
          </a>

          <a href="https://www.tiktok.com/%22%3E/">
            <img src={tikTok} alt="tiktok" style={style} />
          </a>

          <a href="https://www.whatsapp.com/%22%3E">
            <img src={whatsapp} alt="whatsapp" style={style} />
          </a>

        </div>
      </footer>
    </>
  );
};

export default Footer;
