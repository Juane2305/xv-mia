import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dressCodeIcon from '../assets/dressCodeIcon.svg'
import decoracionNombre from "../assets/aurora/decoracionNombre.svg";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import song from '../assets/song.mp3'

import DressCodeEsmeralda from "./DressCodeEsmeralda";
import PastelCountdown from "./PastelCountdown";
import MusicScreen from "./MusicScreen";
import Tarjeta from "./Tarjeta";

const Invitacion = () => {

  const targetDate = new Date("2026-08-15T21:30:00-03:00");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  },[])



  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

      <div className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-black bg-center bg-cover font-eleganteText space-y-5 overflow-hidden">
        <div data-aos="fade-in">

          <div
            className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen bg-center bg-cover"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1757369242/542e2c47-a250-4f2f-820e-2cab2758576d_gbxkmx.jpg')",
            }}
          >
            <div className="flex items-center justify-center mb-2 mt-80">
              <img
                src={decoracionNombre}
                alt="Decoración invertida"
                className="w-[10rem] h-auto mr-3"
              />
              <div className="flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-wide font-libertinus">
                  Mia
                </h1>
                <p className="text-lg md:text-2xl font-light tracking-wider font-libertinus">
                  MIS QUINCE AÑOS
                </p>
              </div>
              <img
                src={decoracionNombre}
                alt="Decoración normal"
                className="w-[10rem] h-auto scale-x-[-1] transform"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <section
          id="contador"
          className="bg-darkgray py-10 border-y-2 border-lightgold text-center"
        >
          <p className="text-xl tracking-wider font-libertinus font-light py-5 text-lightgold" data-aos="fade-in">Sábado 15 de Agosto de 2026</p>
          <PastelCountdown targetDate={targetDate} bgColor="bg-gold"/>
        </section>
        <div className="font-libertinus text-2xl italic bg-white border-y border-gold">
          <TextoFinal textoFinal="Hay momentos en la vida que representan un antes y un después" />
        </div>

        <section id="lugares" className="relative text-center bg-white py-10">
          <LugaresXV
            hora_iglesia=""
            salon="La Antonella"
            hora_inicio="21:30hs"
            hora_fin="05:00hs"
          />
          <a href="https://maps.app.goo.gl/CvQ45REQTwdhCMTv7" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-gold my-2 py-3 px-8 rounded-full text-gray-800 font-libertinus  hover:text-gray-600 transition cursor-pointer">
              CÓMO LLEGAR
            </button>
          </a>
        </section>
        <div className="font-libertinus text-2xl italic bg-white border-y-2 border-gold">
          <TextoFinal textoFinal="Comienza otra etapa, otros caminos, otros sueños…" />
        </div>
        <div className="relative bg-white">
          <section className="py-16 ">
              <FocusCardsDemo
                texto=""
                images={[
                  {
                    index: 1,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757369242/fe548e33-d39f-4f24-8cc8-47be5654d9fd_ntww9q.jpg",
                  },
                  {
                    index: 2,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757369242/b37b797b-b427-4155-97b0-639108ecc231_inyswc.jpg",
                  },
                  {
                    index: 3,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757369242/80959087-833b-4c21-80d4-93dd9155d66d_gpcxdz.jpg",
                  },
                  {
                    index: 4,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757369242/997cb10b-9548-4f2f-81a2-be0eca0600ca_snja9h.jpg",
                  },
                  {
                    index: 5,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757369242/765c691f-f781-4aa7-97c8-7a522373eeb0_ra7wba.jpg",
                  },
                  {
                    index: 6,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757369242/c698a05d-793a-4d95-98ed-e7d0f9ab42eb_ihwol5.jpg",
                  },
                ]}
              />
          </section>
        </div>
        <div className="font-libertinus text-2xl italic bg-white border-y-2 border-gold">
          <TextoFinal textoFinal="Quedan atrás imborrables recuerdos y en adelante se forjarán otros nuevos." />
        </div>
        <div className="bg-white border-b border-pink-100">
          <InstagramWall
            userClass="text-gray-600"
            logoClass="text-pink-300"
            user="@mia"
          />
        </div>

        <div className="bg-lightgray text-center relative text-white">
          <GoogleCalendarButton
            imgClass="text-gold"
            buttonClass="rounded-full hover:shadow-lg border-[#aa9737] bg-gray-100 text-gray-900"
            titleCalendar="XV de Mia"
            salon="X5000GUL, Jerónimo Luis de Cabrera 565, X5000GVK Córdoba"
            fechaComienzo="20260815T213000"
            fechaFin="20260816T050000"
          />
        </div>
        <div className="font-libertinus text-2xl italic bg-white border-y-2 border-gold">
          <TextoFinal textoFinal="Este día tan ansiado llegó y quiero que seas de las personas que van a hacerlo parte…" />
        </div>
        <div className="relative bg-darkgray py-10">
          <DressCodeEsmeralda dressCode="Elegante Sport" icon={dressCodeIcon}/>
        </div>
        <DatosBancarios
          texto="Valor de la tarjeta por persona"
          claseContenedor="text-gray-600 font-libertinus"
          claseBoton="rounded-full hover:shadow-lg border-gold bg-gray-100 text-gray-900"
          textSize="text-lg"
          styleBotonModal={{
            backgroundColor: "white",
            borderColor: "#aa9737",
          }}
          claseBotonModal={{
            backgroundColor: "white",
            borderColor: "#aa9737",
          }}
          styleBorderModal={{ borderColor: "#aa9737" }}
          styleTextColor={{ color: "#aa9737" }}
          alias="MIA.15.AGOS26"
          banco="NaranjaX"
          nombre="Carlos Emanuel Catalán"
          claseModal="bg-black/80"
          borderModal="border-gold"
        />
        <div className="font-libertinus text-2xl italic bg-white border-y-2 border-gold">
          <TextoFinal textoFinal="¡Por eso te invito a MIS XV!" />
        </div>
        <Asistencia
          clase="py-10 bg-white bg-fixed border-b-2 border-gold font-libertinus"
          claseTitle="text-gray-700"
          claseButton="border-2 border-gold cursor-pointer font-semibold text-gray-700 rounded-full"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSes3F8QQmb8OntNQxGbRg3nQVM0ZOp-bNjcZAbOZIUaJ5uRgQ/viewform?usp=header"
        />

        <div className="font-libertinus text-2xl italic bg-white">
          <TextoFinal textoFinal="¡Gracias por venir!" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
