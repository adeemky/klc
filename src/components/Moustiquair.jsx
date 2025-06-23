import { Link } from "react-router-dom";
import m1 from "../images/m1.jpeg";
import m2 from "../images/m2.jpeg";
import m3 from "../images/m3.jpeg";
import m4 from "../images/m4.jpeg";

const Moustiquair = () => {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-24 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-emerald-800 mb-8 leading-tight">
          Moustiquaires Sur Mesure
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Groupe KLC installe des moustiquaires sur mesure pour protéger votre intérieur contre
          les insectes tout en maintenant une aération naturelle et efficace. Nous proposons
          des solutions discrètes, robustes et adaptées à toutes les ouvertures : fenêtres,
          portes, baies vitrées.
          <br />
          <strong className="text-red-400">
            Nous sommes la seule entreprise professionnelle à intervenir entre Annecy et la
            frontière de Genève.
          </strong>
        </p>

        {/* Fenêtres Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img
              src={m1}
              alt="Fenêtres"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Modèles à charnières adaptés aux
              ouvertures classiques
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Moustiquaires enroulables
              discrètes et pratiques
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Cadres en aluminium avec toile en
              fibre résistante
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Choix de couleurs : blanc, gris
              anthracite, brun
            </li>
          </ul>
        </div>

        {/* Portes Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ul className="space-y-3 text-gray-700 text-lg order-2 md:order-1">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Moustiquaires coulissantes :
              idéales pour terrasses et balcons
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Moustiquaires plissées : solution
              gain de place
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Rails silencieux et usage sans
              effort
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Option double vantail pour grandes
              baies
            </li>
          </ul>
          <div className="relative group order-1 md:order-2">
            <img
              src={m2}
              alt="Portes"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Modèles fixes */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img
              src={m3}
              alt="Fixes"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Idéals pour lucarnes, toilettes ou
              caves
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Faciles à retirer et nettoyer
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Toiles renforcées pour animaux
              domestiques
            </li>
          </ul>
        </div>

        {/* Informations techniques */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ul className="space-y-3 text-gray-700 text-lg order-2 md:order-1">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Installation fabriquée sur mesure
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Pose rapide et propre
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Aluminium résistant aux
              intempéries
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span> Fixations anti-vent et finitions
              soignées
            </li>
          </ul>
          <div className="relative group order-1 md:order-2">
            <img
              src={m4}
              alt="Technique"
              className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Pourquoi choisir Groupe KLC ?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Seul installateur professionnel dans la zone Annecy – Genève</li>
              <li>Production personnalisée pour chaque ouverture</li>
              <li>Service rapide : prise de mesures, fabrication, installation</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Qualité premium, finitions soignées</li>
              <li>Système durable avec garantie</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white text-center py-12 px-6 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Visite Gratuite</h3>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Besoin d’une moustiquaire pour vos fenêtres ou portes ? Demandez une visite
            gratuite – nous prenons les mesures et vous conseillons la solution la mieux
            adaptée.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Demander une visite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Moustiquair;
