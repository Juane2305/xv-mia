import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";

export const Modal = ({
  claseBotonModal,
  claseModal,
  borderModal,
  alias,
  nombre,
  banco,
  moneda_extranjera,
  tipo_cuenta,
  numero_cuenta,
  titular_extranjera,
  banco_extranjera,
  styleModal,
  styleBorderModal,
  styleTextColor,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // controla la animación de entrada/salida

  const openModal = () => {
    setIsOpen(true);
    // esperamos al siguiente frame para activar la animación
    requestAnimationFrame(() => setIsVisible(true));
  };

  const closeModal = () => {
    setIsVisible(false);
    // esperar a que termine la transición antes de desmontar
    setTimeout(() => setIsOpen(false), 180);
  };

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <style>{`
        @keyframes modal-bounce-in {
          0%   { opacity: 0; transform: translateY(4px) scale(0.96); }
          60%  { opacity: 1; transform: translateY(-2px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes modal-bounce-out {
          0%   { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(4px) scale(0.97); }
        }
      `}</style>
      <button
        className={`py-4 px-6 border-2 mt-5 transition text-white hover:transform border-gold hover:scale-105 active:scale-95 hover:shadow-lg bg-gold rounded-full`}
        data-aos='fade-in'
        onClick={openModal}
      >
        Ver Datos Bancarios
      </button>

      {isOpen && (
        <div
          className={`fixed inset-0 ${claseModal} bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={styleModal}
          onClick={closeModal}
        >
          <div
            className={`bg-white p-10 rounded-lg flex flex-col justify-center items-center border-2 ${borderModal}`}
            style={{
              ...styleBorderModal,
              animation: isVisible
                ? 'modal-bounce-in 260ms cubic-bezier(.22,.61,.36,1) both'
                : 'modal-bounce-out 180ms cubic-bezier(.55,.06,.68,.19) both',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col justify-center text-center space-y-7 text-gray-900 w-full max-w-md ">
              <h2 className="font-bold text-2xl cursor-default">Datos Bancarios</h2>
              {moneda_extranjera && moneda_extranjera.trim() !== "" && (
                <h3 className="text-xl font-semibold mb-4">Datos en Pesos</h3>
              )}
              <div className="w-full space-y-4 text-left text-gray-800">
                <p className="text-lg flex justify-between items-center">
                  <span><span className="font-semibold">Nombre del titular:</span> {nombre}</span>
                </p>

                <p className="text-lg flex justify-between items-center">
                  <span><span className="font-semibold">Alias:</span> {alias}</span>
                  <button onClick={() => copiarTexto(alias)}>
                    <IoCopyOutline style={styleTextColor} className="ml-2 cursor-pointer" />
                  </button>
                </p>
                <p className="text-lg flex justify-between items-center">
                  <span><span className="font-semibold">Banco:</span> {banco}</span>
                </p>
              </div>
              {moneda_extranjera && moneda_extranjera.trim() !== "" && (
                <div className="w-full mt-8">
                  <hr className="border-t-2 border-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Datos en {moneda_extranjera}</h3>
                  <div className="text-left space-y-4 text-gray-800">
                    <p className="text-lg flex justify-between items-center">
                      <span><span className="font-semibold">{tipo_cuenta}: </span>{numero_cuenta}</span>
                      <button onClick={() => copiarTexto(numero_cuenta)}>
                        <IoCopyOutline style={styleTextColor} className="ml-2" />
                      </button>
                    </p>

                    <p className="text-lg flex justify-between items-center">
                      <span><span className="font-semibold">Titular:</span> {titular_extranjera}</span>
                    </p>

                    <p className="text-lg flex justify-between items-center">
                      <span><span className="font-semibold">Banco:</span> {banco_extranjera}</span>
                    </p>
                  </div>
                </div>
              )}

              <button
                className={`py-4 rounded-lg text-gray-800 cursor-pointer font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg`}
                style={claseBotonModal}
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};