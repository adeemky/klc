import { useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiCustomSize } from "react-icons/ri";
import customProjects from "../data/customProjects";

const ProjectsComponent = () => {
  const [activeIndexes, setActiveIndexes] = useState(new Array(customProjects.length).fill(0));

  return (
    <section className="py-28 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h2 className="text-4xl font-semibold text-center text-green-800">
          Nos Modèles Sur-Mesure
        </h2>
        <p className="text-xl text-center text-gray-700 max-w-2xl mx-auto mt-3">
          Découvrez notre collection de logements uniques conçus pour s'intégrer parfaitement à
          leur environnement. Que vous cherchiez une résidence secondaire, un investissement
          locatif ou un coin de détente en pleine nature, chaque modèle est entièrement
          personnalisable selon vos envies.
        </p>
        {customProjects.map(
          ({ images, title, price, size, features, guarantee, finalNote }, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={title}
                className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 flex flex-col md:flex-row items-center rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex-1 w-full md:w-1/2 mb-6 md:mb-0">
                  <div
                    className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scroll-smooth rounded-lg"
                    onScroll={(e) => {
                      const scrollLeft = e.target.scrollLeft;
                      const width = e.target.clientWidth;
                      const newIndex = Math.round(scrollLeft / width);
                      setActiveIndexes((prev) =>
                        prev.map((val, i) => (i === index ? newIndex : val))
                      );
                    }}
                  >
                    {Array.isArray(images) &&
                      images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${title}-${i}`}
                          className="min-w-full h-72 object-cover rounded-lg snap-center"
                        />
                      ))}
                  </div>
                  <div className="flex justify-center space-x-3 mt-3">
                    {Array.isArray(images) &&
                      images.map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full ${
                            i === activeIndexes[index] ? "bg-green-900" : "bg-green-600"
                          }`}
                        />
                      ))}
                  </div>
                </div>

                <div className="flex-1 w-full md:w-1/2 md:pl-10 text-gray-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-green-900 mb-6 tracking-tight border-b pb-2 border-green-200">
                      {title}
                    </h3>
                    <div className="flex items-center flex-wrap gap-6 mb-6">
                      <div className="flex items-center space-x-2 text-green-800 font-semibold text-lg">
                        <FcMoneyTransfer size={26} />
                        <span>{price}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-green-800 font-semibold text-lg">
                        <RiCustomSize size={26} />
                        <span>{size}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-[15px] leading-relaxed text-gray-700">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-700 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {guarantee && (
                      <p className="mt-6 text-green-900 font-semibold text-base">
                        {guarantee}
                      </p>
                    )}
                  </div>
                  {finalNote && (
                    <p className="mt-8 text-[15px] italic text-gray-500">{finalNote}</p>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default ProjectsComponent;
