import p1 from "../images/p1.jpg";
import p2 from "../images/p2.png";
import p3 from "../images/p3.jpg";
import { Link } from "react-router-dom";

const Platrerie = () => {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-24 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-emerald-800 mb-8 leading-tight">
          Travaux de <span className="text-red-400">Plâtrerie</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Groupe KLC intervient sur tous types de bâtiments, neufs ou anciens, pour des
          prestations complètes de plâtrerie. Nos équipes professionnelles assurent la mise en
          œuvre sur mesure, adaptée à l’usage, aux contraintes techniques et à l’esthétique
          recherchée.
          <br />
          La pose de plaques de plâtre permet de réorganiser les volumes, d’intégrer
          l’isolation thermique/acoustique, et d’obtenir des surfaces lisses et prêtes à
          décorer.
        </p>

        {/* Cloisons Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img
              src={p1}
              alt="Cloisons"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>
              <span className="text-blue-600">•</span> Ossature métallique avec plaques BA13
            </li>
            <li>
              <span className="text-blue-600">•</span> Création de pièces, rangements, bureaux
            </li>
            <li>
              <span className="text-blue-600">•</span> Découpes précises pour portes et prises
            </li>
          </ul>
        </div>

        {/* Faux plafonds & isolation */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ul className="space-y-3 text-gray-700 text-lg order-2 md:order-1">
            <li>
              <span className="text-blue-600">•</span> Intégration de spots, bandeaux LED
            </li>
            <li>
              <span className="text-blue-600">•</span> Habillage de gaines ou conduits
              techniques
            </li>
            <li>
              <span className="text-blue-600">•</span> Plaques hydrofuges pour pièces humides
            </li>
            <li>
              <span className="text-blue-600">•</span> Isolation thermique & phonique (laine de
              verre ou roche)
            </li>
            <li>
              <span className="text-blue-600">•</span> Systèmes coupe-feu avec plaques
              ignifuges
            </li>
          </ul>
          <div className="relative group order-1 md:order-2">
            <img
              src={p2}
              alt="Plafonds"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Finitions & rénovation */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img
              src={p3}
              alt="Finitions"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>
              <span className="text-blue-600">•</span> Bandes à joint, double passe d’enduit
            </li>
            <li>
              <span className="text-blue-600">•</span> Surfaces prêtes à peindre ou tapisser
            </li>
            <li>
              <span className="text-blue-600">•</span> Redressement de murs irréguliers
            </li>
            <li>
              <span className="text-blue-600">•</span> Mise à niveau des plafonds
            </li>
            <li>
              <span className="text-blue-600">•</span> Pose rapide conforme aux plans
              d’architecte
            </li>
          </ul>
        </div>

        {/* Pourquoi choisir */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Pourquoi choisir Groupe KLC ?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Équipes qualifiées, respect des normes techniques (DTU 25.41)</li>
              <li>Finitions soignées et durables</li>
              <li>Solutions sur mesure pour maisons et bâtiments tertiaires</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Engagement qualité, transparence et propreté de chantier</li>
              <li>Devis clair, planification efficace, livraison garantie</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-12 px-6 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Visite Gratuite</h3>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Demandez une visite gratuite pour votre façade : notre équipe évalue l’état de vos
            murs et vous propose la meilleure solution technique et esthétique.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Demander une visite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Platrerie;
