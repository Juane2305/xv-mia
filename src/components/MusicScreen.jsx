import React, { useState, useEffect } from "react";
import MusicPlayer from "./MusicPlayer";

export default function MusicScreen({ templateId, cancion }) {
  const localStorageKey = `musicChoice-${templateId}`;

  const [showModal, setShowModal] = useState(false);
  const [initialPlay, setInitialPlay] = useState(false);

  useEffect(() => {
      setShowModal(true);
  }, []);

  const handleChoice = (choice) => {
    if (choice === "withMusic") {
      setInitialPlay(true);
      localStorage.setItem(localStorageKey, "withMusic");
    } else {
      setInitialPlay(false);
      localStorage.setItem(localStorageKey, "withoutMusic");
    }
    setShowModal(false);
  };

  return (
    <>
      <MusicPlayer cancion={cancion} initialPlay={initialPlay} />

      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-white w-80 p-6 rounded-md text-center">
            <h2 className="text-2xl font-semibold mb-4 cursor-default">
              ¿Deseas ingresar con música?
            </h2>
            <div className="flex flex-col gap-4">
              <button
                className="bg-red-950 text-white py-2 rounded cursor-pointer transition"
                onClick={() => handleChoice("withMusic")}
              >
                Con música
              </button>
              <button
                className="bg-gray-400 text-white py-2 rounded cursor-pointer hover:bg-gray-500 transition"
                onClick={() => handleChoice("withoutMusic")}
              >
                Sin música
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}