import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import party from '../assets/party.json'

const Places = ({ salon, hora_inicio, hora_fin }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true,   
    });
  }, []);

  return (
    <section className={`relative w-full py-12 flex flex-col items-center`}>
      <div style={{ width: 120, height: 120 }} data-aos="fade-in">
        <Lottie
          loop
          play
          animationData={party}
          style={{ width: "100%", height: "100%"}}
        />
      </div>
      <div
        className="max-w-xl mx-auto pt-8 flex flex-col items-center font-libertinus"
        data-aos="fade-in"
      >
        <h2 className="text-3xl sm:text-4xl cursor-default font-light text-gray-800 uppercase tracking-wider mb-4">
          Fiesta
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center cursor-default">
          ¡Te esperamos en <span className="font-semibold text-red-950">{salon}</span>!<br />
          Daremos inicio a la fiesta desde las {' '}
          <span className="font-semibold">{hora_inicio}</span> hasta las <span className="font-semibold">{hora_fin}</span>.
        </p>
      </div>
    </section>
  );
};

export default Places;