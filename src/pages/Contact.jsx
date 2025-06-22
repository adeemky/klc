import { FaPhone } from "react-icons/fa";
import { IoMdPin, IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-24 mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Contactez <span className="text-green-700">Groupe KLC</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Une question, un devis, un projet ? N’hésitez pas à nous écrire ou à nous appeler.
        </p>

        <div className="grid md:grid-cols-2 gap-12 shadow-inner rounded-xl">
          {/* Contact Info and Map Card */}
          <div className="p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Nos coordonnées</h3>

            <a
              href="tel:+33749306759"
              className="flex items-center gap-3 text-gray-700 text-lg hover:text-green-800 transition"
            >
              <span className="text-green-700 text-2xl">
                <FaPhone />
              </span>
              +33 7 49 30 67 59
            </a>
            <a
              href="mailto:denizkilic09@icloud.com"
              className="flex items-center gap-3 text-gray-700 text-lg hover:text-green-800 transition"
            >
              <span className="text-green-700 text-2xl">
                <IoIosMail />
              </span>
              denizkilic09@icloud.com
            </a>
            <p className="flex items-center gap-3 text-gray-700 text-lg">
              <span className="text-green-700 text-2xl">
                <IoMdPin />
              </span>{" "}
              46 Av. de la République, 74963, Cran Gevrier, Annecy
            </p>
            <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="Groupe KLC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.17083793772!2d6.1040719758060265!3d45.90789410372609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8543f4a4afe9%3A0x692838d8774f0030!2s46%20Av.%20de%20la%20R%C3%A9publique%2C%2074960%20Annecy!5e0!3m2!1str!2sfr!4v1750269982246!5m2!1str!2sfr"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xnnvbyko"
            method="POST"
            className="p-8 rounded-2xl space-y-6 relative"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://groupeklc-construction.com/merci"
            />

            <h3 className="text-2xl font-semibold text-green-800 text-center mb-6">
              Écrivez-nous directement
            </h3>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nom</label>
              <input
                type="text"
                name="Nom"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Sujet</label>
              <input
                type="text"
                name="Sujet"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="Message"
                rows="5"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition shadow-md hover:scale-105"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
