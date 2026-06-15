import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Geogre.svg";

const handleSectionClick = (event, sectionId) => {
  event.preventDefault();
  const section = document.querySelector(sectionId);

  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", sectionId);
};

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              className="mx-2"
              width={75}
              height={33}
              alt="logo"
            />
          </a>
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium text-stone-300 md:flex">
          <a
            href="#skills"
            onClick={(event) => handleSectionClick(event, "#skills")}
            className="hover:text-cyan-200"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(event) => handleSectionClick(event, "#experience")}
            className="hover:text-cyan-200"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(event) => handleSectionClick(event, "#projects")}
            className="hover:text-cyan-200"
          >
            Projects
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/geogre-miller-6880b3299/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://github.com/geogre-miller"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.instagram.com/baprang.bow_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100041836427930"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook></FaFacebook>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
