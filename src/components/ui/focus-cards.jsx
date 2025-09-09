import React, { useState, useRef } from "react";
import { cn } from "../../utils/cn";


export const Card = React.memo(({ card, index, hovered, setHovered, onOpen }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => onOpen(index)}
    className={cn(
      "md:rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden cursor-pointer",
      // Aumentamos el alto visible para que luzcan mejor antes de abrir
      "h-72 md:h-[28rem] w-full transition-transform duration-300 ease-out",
      hovered === index && "scale-105"
    )}
    role="button"
    aria-label={`Abrir imagen ${card.index}`}
  >
    <img
      src={card.img}
      alt={`Imagen ${card.index}`}
      className="object-cover absolute inset-0 w-full h-full select-none"
      draggable={false}
    />
  </div>
));

Card.displayName = "Card";


export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // Swipe handling (mobile)
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const openAt = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);
  const prev = () => setCurrent((c) => (c - 1 + cards.length) % cards.length);
  const next = () => setCurrent((c) => (c + 1) % cards.length);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const THRESHOLD = 50; // px para decidir swipe
    if (touchDeltaX.current > THRESHOLD) {
      prev();
    } else if (touchDeltaX.current < -THRESHOLD) {
      next();
    }
    touchStartX.current = 0;
    touchDeltaX.current = 0;
  };

  return (
    <div>
      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.index}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onOpen={openAt}
          />
        ))}
      </div>

      {/* Estilos de animación para el lightbox */}
      <style>{`
        @keyframes lightbox-in {
          0% { opacity: 0; transform: scale(.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes lightbox-image-in {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Lightbox / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative max-w-[95vw] max-h-[90vh] w-full md:w-auto animate-[lightbox-in_220ms_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              aria-label="Cerrar"
              onClick={close}
              className="absolute -top-10 right-0 md:-top-12 md:-right-12 text-white/90 hover:text-white transition focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 11-1.414 1.414L12 12l-4.361 4.361a1 1 0 11-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Imagen con swipe en mobile */}
            <div
              className="relative flex items-center justify-center select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={cards[current]?.img}
                alt={`Imagen ${cards[current]?.index}`}
                className="max-h-[80vh] md:max-h-[82vh] max-w-[95vw] object-contain rounded-lg shadow-2xl animate-[lightbox-image-in_220ms_ease-out]"
                draggable={false}
              />

              {/* Controles en desktop */}
              <button
                aria-label="Anterior"
                onClick={prev}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                aria-label="Siguiente"
                onClick={next}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Indicadores (opcional, pequeños puntos) */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full",
                    i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  )}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir a la imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}