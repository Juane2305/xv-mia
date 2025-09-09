import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const DressCodeEsmeralda = ({dressCode, icon}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="p-6 text-center rounded-md max-w-md mx-auto font-libertinus" data-aos="fade-in">
        <h2 className="text-lightgold font-vintageText text-4xl mb-3">Código de Vestimenta</h2>
        <p className="text-lightgold mb-6 mt-10 text-xl">{dressCode}</p>
        <div className="flex items-center gap-4 justify-center">
            <img src={icon} alt="Traje" className="w-32 h-32 " />   
        </div>
  </div>
  )
}

export default DressCodeEsmeralda;