import {Image} from "@nextui-org/image";
import tecnologia from "../assets/tecnologia.png";
import { MisionCard, VisionCard, ValueSeparator, ValueCard } from "../Components/Us/index.js"
import { valueValoresUs } from "../helpers/valueValoresUs.js"

export const Us = () => {
  return (
    <>
        <div className="w-full h-[400px] lg:h-[600px] bg-gradient-to-b from-amber-500 to-orange-400 grid grid-cols-12 gap-4 ">
          <div className="mx-8 col-span-12 md:col-span-6 text-center content-center">
              <span className="font-bold text-[28px] lg:text-[32px] xl:text-[40px] text-white animate-fade-left animation-once animation-duration-2000 animation-ease-linear">Acerca de Nosotros</span>
              <br/><br/>
              <span className="font-bold text-[22px] lg:text-[26px] xl:text-[34px] text-white animate-fade-left animation-once animation-duration-2000 animation-ease-linear">MoyTect surgió para optimizar el servicio y el seguimiento de las necesidades tecnológicas de nuestros clientes, además de lograr su confianza y satisfacción.</span>
          </div>
          <div className="col-span-12 hidden md:grid md:col-span-6 text-center content-center justify-self-center">
            <Image
                className='w-auto h-[350px] lg:h-[400px] xl:h-[550px] animate-fade-left animation-once animation-duration-1000 animation-ease-linear'
                alt="Precarga de imagen"
                src={tecnologia}
            />
          </div>
        </div>

        <div className="mx-6 md:mx-16 lg:mx-26 xl:mx-36 grid grid-cols-12 gap-4 animate-fade-up animation-once animation-duration-2000 animation-ease-linear">
          <MisionCard />
          <VisionCard />
          <ValueSeparator />
          {valueValoresUs.map((title, index) => (
            <ValueCard key={index} title={title} />
          ))}
        </div>
    </>
  )
}
