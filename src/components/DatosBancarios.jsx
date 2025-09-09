import { Modal } from './Modal'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiIconoGift from './DatosBancariosIcon';
import Tarjeta from './Tarjeta';


const DatosBancarios = ({texto, claseContenedor, textSize}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className={`pt-20 flex flex-col justify-center items-center py-20 gap-y-5 bg-lightgray ${claseContenedor}`} >
      <div data-aos= 'fade-in'>
        <MiIconoGift/>
      </div>
        <div className={`flex flex-col items-center justify-center`}>
          <p className={`text-center text-xl px-5 md:px-0 py-5 text-white ${textSize}`} data-aos= 'fade-in'>{texto}</p>
          <Tarjeta/>
        </div>
    </div>
  )
}

export default DatosBancarios