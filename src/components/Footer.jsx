import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logo from "../images/logo.png";
import ka from "../images/ka.png";

const Footer = () => {
  const footerLinks = {
    navigation: [
      { name: "Accueil", href: "/" },
      { name: "Nos Projets", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 1.1, 0.2)}
      initial="hidden"
      whileInView="show"
      className="p-20 bg-gradient-to-br from-white via-neutral-100 to-white"
    >
      <div className="section-container">
        <motion.div
          variants={fadeIn("up", 1.1, 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left"
        >
          {/* Brand Column */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
              <img alt="logo" src={logo} width="50" />
              <span style={{ color: "#1b4f33" }} className="text-xl ml-1">
                Groupe KLC
              </span>
            </div>
            <p className="text-gray-600 mb-6 md:text-left md:w-80 text-center">
              Le Groupe KLC accompagne vos projets avec expertise et engagement, en proposant
              des solutions sur mesure pour chaque étape de votre développement.
            </p>
          </div>

          {/* Social Media Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4 ps-3">Suivez-nous</h3>
            <ul className="flex flex-col items-start md:items-start space-y-3 text-gray-600">
              <li>
                <a
                  href="https://www.instagram.com/bungalowannecy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-white hover:bg-purple-400 transition-colors px-3 py-2 rounded-full"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaInstagram className="w-5 h-5" />
                  </div>
                  <span>@bungallowannecy</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/deniz-k%C4%B1l%C4%B1%C3%A7-059519324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-white hover:bg-blue-700 transition-colors px-3 py-2 rounded-full"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaLinkedinIn className="w-5 h-5" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="flex justify-between border-t border-gray-200 mt-12 pt-8">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                ©{new Date().getFullYear()} Tous droits réservés.
              </p>
            </div>
          </div>
          <div>
            <a
              href="https://www.kayaadem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col text-gray-600 text-sm items-center opacity-90 hover:opacity-100"
            >
              <img alt="ak" width={30} src={ka} />
              <span>Conçu par</span>
              <span>Adem Kaya</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
