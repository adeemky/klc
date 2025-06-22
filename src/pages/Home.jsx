import { useState, useRef, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const [text] = useTypewriter({
    words: ["Groupe KLC Construction"],
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 3000,
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const slideWidth = slider.scrollWidth / slider.children.length;
      const index = Math.round(slider.scrollLeft / slideWidth);
      setActiveIndex(index);
    };

    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className=" text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-24">
        <motion.div
          variants={fadeIn("right", 0.59, 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-left md:w-1/2 space-y-6 py-12"
        >
          <motion.h1
            variants={fadeIn("down", 0.59, 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-5xl font-extrabold font-ancizar text-red-400 text-left"
          >
            {text}
            <br />
            <span className="text-gray-700">Maisons & Tiny House</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.59, 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-xl md:text-2xl text-gray-700"
          >
            Groupe KLC est une entreprise unique en son genre qui regroupe tous les corps de
            métier du bâtiment sous un seul nom. Plus besoin de gérer plusieurs prestataires :
            nous réalisons tous les travaux avec nos propres équipes spécialisées.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.59, 0.4)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/2 p-4"
        >
          <img
            src="/images/ex1.jpeg"
            width="500"
            height="500"
            alt="Tiny House"
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-24 p-10">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            variants={fadeIn("up", 0.59, 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-5xl font-bold mb-8 text-left text-lime-800 font-ancizar"
          >
            À propos de nous
          </motion.h2>
        </div>
        <motion.p
          variants={fadeIn("up", 0.79, 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-left max-w-4xl mx-auto text-2xl text-lime-950 leading-relaxed"
        >
          Construction neuve, cloisonnement en placo, carrelage, toiture, plomberie,
          électricité, peinture, isolation, menuiserie, aménagement extérieur ou encore
          moustiquaires : chaque service est pris en charge par une équipe dédiée, qualifiée et
          coordonnée par nos chefs de chantier et ingénieurs. Nous sommes aujourd’hui la seule
          entreprise opérant entre Annecy et Genève à offrir cette approche complète, en
          interne et sans sous-traitance. Ce qui distingue Groupe KLC des autres :
        </motion.p>
        <div className="mt-8">
          <motion.ul
            variants={fadeIn("up", 0.99, 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-xl text-lime-950 space-y-2 mx-auto max-w-4xl text-left "
          >
            <li>Tous les travaux sont réalisés par nos équipes internes professionnelles</li>
            <li>Chaque métier est confié à des ouvriers ou techniciens spécialisés</li>
            <li>Accompagnement technique et ingénierie possible pour les projets complexes</li>
            <li>Coordination totale entre les différents corps de métier</li>
            <li>Un seul interlocuteur, un seul devis, une gestion optimisée</li>
          </motion.ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 md:px-24">
        <motion.h2
          variants={fadeIn("up", 0.59, 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-lime-800 font-ancizar"
        >
          Nos Réalisations
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.59, 0.4)}
          initial="hidden"
          whileInView="show"
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-24 px-20 md:space-x-48 md:px-48 pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
        >
          {[
            "/images/h2.jpg",
            "/images/e2.jpeg",
            "/images/h3.webp",
            "/images/e4.jpeg",
            "/images/e5.jpeg",
            "/images/e6.jpeg",
            "/images/e8.jpeg",
            "/images/e9.jpeg",
            "/images/e10.jpeg",
            "/images/e11.jpeg",
            "/images/h7.webp"
          ].map((img, index) => (
            <div
              key={index}
              className="min-w-full snap-center flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Réalisation ${index + 1}`}
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.59, 0.4)}
          initial="hidden"
          whileInView="show"
          className="flex justify-center space-x-2 mt-6"
        >
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-green-900 scale-110" : "bg-green-600"
              }`}
            />
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.59, 0.4)}
          initial="hidden"
          whileInView="show"
          className="flex justify-start ml-1 md:ml-48 mt-8"
        >
          <Link
            to="/projects"
            className="bg-emerald-800 text-white text-lg px-8 py-5 rounded-xl font-semibold shadow-md hover:bg-emerald-600 transition"
          >
            Voir plus →
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-24">
        <motion.h2
          variants={fadeIn("down", 0.59, 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-7xl font-bold mb-14 text-center text-lime-800 font-ancizar"
        >
          Nos Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeIn("right", 0.59, 0.4)}
            initial="hidden"
            whileInView="show"
            className="space-y-4 shadow-lg rounded-xl p-4 bg-white"
          >
            <img src="/images/h6.webp" alt="Conception" className="rounded-xl shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-950">Conception sur-mesure</h3>
            <p className="text-gray-950">
              Avec vous à chaque étape, notre bureau d’étude conçoit un logement qui répond à
              vos goûts et à vos usages. De la première esquisse aux choix de matériaux, tout
              est pensé sur-mesure.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.59, 0.4)}
            initial="hidden"
            whileInView="show"
            className="space-y-4 shadow-lg rounded-xl p-4 bg-white"
          >
            <img src="/images/b2.jpg" alt="Construction" className="rounded-xl shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-950">Construction clé en main</h3>
            <p className="text-gray-950">
              Nos artisans fabriquent et assemblent votre maison avec le plus grand soin.
              Chaque projet est livré prêt à vivre, avec des finitions haut de gamme et une
              attention portée aux moindres détails.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-24 px-6 md:px-24 bg-cover bg-center text-center"
        style={{ backgroundImage: 'url("/images/h8.webp")' }}
      >
        <div className="p-12 rounded-xl shadow-lg inline-block">
          <motion.h2
            variants={fadeIn("up", 0.59, 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-bold mb-6 text-white"
          >
            Prêt à donner vie à votre projet ?
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.69, 0.4)}
            initial="hidden"
            whileInView="show"
            className="mb-8 max-w-3xl mx-auto text-lg text-white"
          >
            Groupe KLC, c’est la solution tout-en-un pour vos projets de construction et
            rénovation. Placo, carrelage, toiture, électricité, plomberie, isolation, façade,
            sols, salles de bain, piscines, moustiquaires… Tout est réalisé par nos propres
            équipes professionnelles. Une seule équipe. Une maîtrise totale. Aucun retard
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.79, 0.4)}
            initial="hidden"
            whileInView="show"
            className="max-w-3xl mx-auto text-lg text-white"
          >
            Chaque intervention est encadrée par des ouvriers qualifiés et des ingénieurs
            spécialisés. Dans la région Annecy – Genève, nous sommes la seule entreprise à tout
            gérer en interne.
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.89, 0.4)}
            initial="hidden"
            whileInView="show"
            className="mb-2 max-w-3xl mx-auto text-lg text-white"
          >
            Une seule équipe. Une maîtrise totale. Aucun retard
          </motion.p>
          <motion.div variants={fadeIn("up", 0.79, 0.4)} initial="hidden" whileInView="show">
            <Link
              to="/contact"
              className="inline-block bg-white text-green-800 text-xl px-10 py-6 rounded-xl font-bold shadow-md hover:bg-green-800 hover:text-white transition mt-10"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
