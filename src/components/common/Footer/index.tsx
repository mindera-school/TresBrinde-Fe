import Logo from "../../../images/footerlogo.svg";
import { Mail } from "react-feather";
import { Facebook } from "react-feather";
import { Smartphone } from "react-feather";
import { Phone } from "react-feather";

const Footer = () => {
  return (
    <footer>
      <img alt="3Brinde logo" src={Logo} />
      <ul className="contacts">
        <li>
          <Mail />
          <a href="mailto:geral@tresbrinde.com">geral@tresbrinde.com</a>
        </li>
        <li>
          <Facebook />
          <a href="https://www.facebook.com/people/Tr%C3%AAs-Brinde-Publicidade/100067500792458/">
            Três Brinde Publicidade
          </a>
        </li>
        <li>
          <Smartphone />
          <span>919 923 334</span>
        </li>
        <li>
          <Phone />
          <span>224 898 322</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
