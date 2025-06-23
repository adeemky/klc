import { Link } from "react-router-dom";
import c1 from "../images/c1.png";
import c2 from "../images/c2.jpeg";
import c3 from "../images/c3.jpg";

const Carrelage = () => {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-24 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8 leading-tight">
          Pose de <span className="text-red-400">Carrelage</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Groupe KLC intervient aussi bien dans les bâtiments neufs que dans les rénovations
          pour tous vos travaux de pose de carrelage. Nos équipes assurent une finition
          impeccable sur tous types de surfaces, en intérieur comme en extérieur. Chaque
          chantier est évalué sur place afin de choisir les matériaux adaptés, préparer les
          supports et garantir un résultat durable et esthétique.
        </p>

        {/* Carrelage intérieur */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img
              src={c1}
              alt="Carrelage intérieur"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="text-green-600 font-semibold">Carrelage intérieur</li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Pose murale et au sol dans salles
              de bain, cuisines, salons...
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Céramique, grès cérame, pierre
              naturelle, mosaïque
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Alignement parfait et respect des
              pentes
            </li>
          </ul>
        </div>

        {/* Extérieurs */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ul className="space-y-3 text-gray-700 text-lg order-2 md:order-1">
            <li className="text-green-600 font-semibold">Terrasses et extérieurs</li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Carrelage extérieur résistant au
              gel
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Préparation du sol avec pente et
              évacuation
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Étanchéité et colle adaptée aux
              intempéries
            </li>
          </ul>
          <div className="relative group order-1 md:order-2">
            <img
              src={c2}
              alt="Carrelage extérieur"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Préparation */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Préparation des surfaces</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Ragréage, primaire d’accrochage,
              membrane d’étanchéité
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Traitement des angles, plinthes et
              profils
            </li>
          </ul>
        </div>

        {/* Finitions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Finitions de qualité</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Alignement au laser, joints
              réguliers
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Nettoyage des résidus de joint
              (voile), joints silicone
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Pose de plinthes, finitions
              soignées
            </li>
          </ul>
        </div>

        {/* Chantier en cours */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img
              src={c3}
              alt="Chantier de carrelage"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="text-green-600 font-semibold">Travaux en cours</li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Suivi de chantier avec contrôle de
              qualité à chaque étape
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Adaptation en temps réel aux
              contraintes du site
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Communication continue avec le
              client
            </li>
          </ul>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Pourquoi choisir Groupe KLC ?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Équipe qualifiée, rapide et méticuleuse</li>
              <li>Résultat solide, esthétique et durable</li>
              <li>Respect des délais, propreté du chantier</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Conseils personnalisés pour chaque projet</li>
              <li>Interventions en intérieur et extérieur</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center py-12 px-6 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Visite Technique Gratuite</h3>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Vous avez un projet de carrelage ? Demandez une visite gratuite : nous venons sur
            place pour vous conseiller et établir un devis adapté.
          </p>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/contact"
            className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Demander une visite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carrelage;
