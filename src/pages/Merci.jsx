import React from "react";
import { Link } from "react-router-dom";

const Merci = () => {
  return (
    <div className=" text-gray-800 flex items-center justify-center px-4 pt-32 pb-20">
      <div className="bg-green-100 shadow-xl rounded-2xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Merci !</h1>
        <p className="text-lg">
          Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          En attendant, n'hésitez pas à explorer nos projets ou à nous suivre sur les réseaux
          sociaux.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded transition duration-200"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Merci;
