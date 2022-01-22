import githubSVG from '../../assets/svg/github.svg';
import emailSVG from '../../assets/svg/email.svg';
import linkedSVG from '../../assets/svg/linked.svg';
import './Footer.css';


export default function Footer() {

  return (
    <footer id="footerContainer">

      <a href="https://github.com/AustenBaker/" >
        <img src={githubSVG} alt="github icon" />
      </a>

      <a href="mailto:austenbaker225@gmail.com" >
        <img src={emailSVG} alt="email icon" />
      </a>

      <a href="https://www.linkedin.com/in/austenbaker/" >
        <img src={linkedSVG} alt="linkedin icon" />
      </a>

    </footer>
  );
}
