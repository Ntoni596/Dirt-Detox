import logo from "../assets/Dirt-Detox-Logo.svg";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  const contactNumber = "(04) 123 4567";
  const contactEmail = "info@dirtdetox.co.nz";
  const facebookLink = "This is a facebook link";
  const instagramLink = "this is a insta link";

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo}></img>
      </div>
      <div className="footer-contact">
        <p>{contactNumber}</p>
        <p>{contactEmail}</p>
      </div>
      <div className="legal">
        <p>Copyright Dirt Detox 2022, Designed and Created by Deepak Joshi</p>
      </div>
      <div className="social-links">
        <a href={facebookLink}>
          <SlSocialFacebook />
        </a>
        <a href={instagramLink}>
          <SlSocialInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
