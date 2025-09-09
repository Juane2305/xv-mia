import React, { useState } from "react";

const Tarjeta = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    requestAnimationFrame(() => setIsVisible(true));
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 180);
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

      <div className="w-full flex justify-center">
        <button
          onClick={openModal}
          className="py-3 px-6 rounded-full border-2 border-gold bg-gold text-gray-200 font-semibold hover:scale-[1.02] active:scale-95 transition-transform shadow-sm"
        >
          Ver valores
        </button>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          <div
            className="relative w-[92vw] max-w-xl max-h-[85vh] overflow-auto bg-white text-gray-800 rounded-2xl border-2 border-gold shadow-2xl"
            style={{
              animation: isVisible
                ? 'modal-bounce-in 260ms cubic-bezier(.22,.61,.36,1) both'
                : 'modal-bounce-out 180ms cubic-bezier(.55,.06,.68,.19) both',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Cerrar"
              className="absolute right-3 top-3 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 11-1.414 1.414L12 12l-4.361 4.361a1 1 0 11-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="px-6 pt-7 pb-8">
              <h2 className="text-3xl font-bold text-center mb-6">Tarjeta</h2>

              <div className="space-y-6 text-[15px] leading-7">
                <div className="text-center">
                  <p className="font-semibold">Valor de la tarjeta</p>

                  <div className="mt-3">
                    <p className="font-semibold">Octubre a 30/Enero</p>
                    <p>Precio adultos: <span className="font-medium">$ 88.000</span></p>
                    <p>Precio juvenil (13 a 17): <span className="font-medium">$ 77.000</span></p>
                    <p>Precio menores (3 a 12 años): <span className="font-medium">$ 48.500</span></p>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Febrero a 30/Abril</p>
                    <p>Precio adultos: <span className="font-medium">$ 97.000</span></p>
                    <p>Precio juvenil (13 a 17): <span className="font-medium">$ 85.000</span></p>
                    <p>Precio menores (3 a 12 años): <span className="font-medium">$ 52.000</span></p>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Mayo a 20/Julio</p>
                    <p>Precio adultos: <span className="font-medium">$ 106.000</span></p>
                    <p>Precio juvenil (13 a 17): <span className="font-medium">$ 92.000</span></p>
                    <p>Precio menores (3 a 12 años): <span className="font-medium">$ 57.000</span></p>
                  </div>
                </div>

                <hr className="border-t border-gray-200" />

                <div className="text-center">
                  <p className="font-semibold mb-2">Datos para el pago</p>
                  <p><span className="font-semibold">Titular:</span> Carlos Emanuel Catalán</p>
                  <p><span className="font-semibold">CUIT:</span> 20-35054365-2</p>
                  <p><span className="font-semibold">Billetera:</span> NaranjaX</p>
                  <p><span className="font-semibold">Alias:</span> MIA.15.AGOS26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tarjeta;