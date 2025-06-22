import { Link } from 'react-router-dom'
import r1 from '../images/r1.jpeg'
import r2 from '../images/r2.jpeg'

const Renovation = () => {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-24 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-emerald-800 mb-8 leading-tight">
          Rénovation complète de <span className="text-red-400">maisons anciennes</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Chez Groupe KLC, nous transformons les maisons anciennes en espaces modernes, sûrs et fonctionnels,
          en respectant vos envies et les contraintes techniques du bâtiment existant. Notre équipe se déplace chez vous pour
          évaluer votre projet.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img src={r1} alt="Rénovation intérieure" className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Rénovation intérieure complète : cuisine, salle de bain, salon...</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Reconfiguration des espaces, suppression de cloisons</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Ouverture de murs porteurs avec ingénierie</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Nouvelles fenêtres et portes pour plus de lumière</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Revêtements de sol : parquet, carrelage, stratifié</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ul className="space-y-3 text-gray-700 text-lg order-2 md:order-1">
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Mise aux normes : électricité, plomberie</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Isolation, plâtrerie, peinture</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Façades, peinture extérieure, toiture</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Respect du style d’origine pour bâtiments anciens</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Solutions 100% personnalisées</li>
          </ul>
          <div className="relative group order-1 md:order-2">
            <img src={r2} alt="Travaux de rénovation" className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-12 px-6 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Visite Gratuite</h3>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Demandez une visite gratuite pour votre façade : notre équipe évalue l’état de vos murs et vous propose la meilleure solution technique et esthétique.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Demander une visite
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Renovation