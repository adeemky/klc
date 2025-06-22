import pen1 from "../images/pen1.jpeg"
import pen2 from "../images/pen2.jpg"
import pen3 from "../images/pen3.webp"

const Peinture = () => {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-24 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8 leading-tight">
          Travaux de <span className="text-red-400">Peinture</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Groupe KLC réalise des travaux de peinture soignés pour les logements, commerces et bâtiments professionnels.
          Grâce à une préparation rigoureuse, un choix de produits adaptés et une application maîtrisée,
          nous garantissons un rendu esthétique, durable et homogène.
        </p>

        {/* Étapes d’application */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img src={pen1} alt="Préparation" className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li><span className="text-green-600 font-semibold">1. Préparation des surfaces</span>
              <ul className="pl-5 space-y-2">
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Nettoyage des murs : poussière, graisse, résidus</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Rebouchage avec enduit adapté</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Ponçage pour surface lisse</li>
              </ul>
            </li>
            <li><span className="text-green-600 font-semibold">2. Sous-couche (primaire)</span>
              <ul className="pl-5 space-y-2">
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Uniformise le support, améliore l’adhérence</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Application au rouleau/pinceau, séchage requis</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ul className="space-y-3 text-gray-700 text-lg order-2 md:order-1">
            <li><span className="text-green-600 font-semibold">3. Couches de finition</span>
              <ul className="pl-5 space-y-2">
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Types : acryliques, alkydes, siloxanes, etc.</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Finitions : mate, satinée, veloutée, brillante</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Application en deux couches</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Outils selon la zone peinte</li>
              </ul>
            </li>
            <li><span className="text-green-600 font-semibold">4. Protection & nettoyage</span>
              <ul className="pl-5 space-y-2">
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Bâchage du mobilier et des sols</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Nettoyage minutieux</li>
                <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Vérification finale avec le client</li>
              </ul>
            </li>
          </ul>
          <div className="relative group order-1 md:order-2">
            <img src={pen2} alt="Application" className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Domaines d’intervention */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <img src={pen3} alt="Domaines" className="rounded-3xl w-full h-[360px] object-cover transform transition-transform group-hover:scale-105 shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Intérieurs : salons, chambres, cuisines, bureaux</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Façades : béton, crépi, pierre, bois</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Commerces : magasins, restaurants, hôtels</li>
            <li className="flex items-start gap-3"><span className="mt-1 text-green-600">✓</span> Décoratives ou effets spéciaux (sur demande)</li>
          </ul>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Pourquoi choisir Groupe KLC ?</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Peintres professionnels formés</li>
              <li>Résultat durable et conforme aux normes</li>
              <li>Peintures haut de gamme et écologiques</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
              <li>Travail propre, rapide et sécurisé</li>
              <li>Service basé sur la satisfaction client</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-12 px-6 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Visite Gratuite</h3>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Demandez une visite gratuite pour votre façade : notre équipe évalue l’état de vos murs et vous propose la meilleure solution technique et esthétique.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Demander une visite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Peinture