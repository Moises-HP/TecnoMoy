import {Image} from "@nextui-org/image";
import tecnologia from "../assets/tecnologia.png";
import { MisionCard, VisionCard, ValueSeparator, ValueCard } from "../Components/Us/index.js"
import { valueValoresUs } from "../helpers/valueValoresUs.js"

export const Us = () => {
  return (
    <>
        <div className="w-full h-[600px] bg-gradient-to-b from-amber-500 to-orange-400 grid grid-cols-12 gap-4">
          <div className="mx-8 col-span-12 lg:col-span-6 text-center content-center">
              <span className="font-bold text-[28px] sm:text-[40px] mb-4 text-white">Acerca de Nosotros</span>
              <br/><br/>
              <span className="font-bold text-[28px] sm:text-[32px] mb-4 text-white">MoyTect surgió para optimizar el servicio y el seguimiento de las necesidades tecnológicas de nuestros clientes, además de lograr su confianza y satisfacción.</span>
          </div>
          <div className="mx-8 col-span-12 lg:col-span-6 text-center pt-8 content-center justify-self-center">
            <Image
                className='w-full h-[550px] animate__fadeIn'
                alt="Precarga de imagen"
                src={tecnologia}
            />
          </div>
        </div>

        <div className="mx-6 md:mx-16 lg:mx-26 xl:mx-36 grid grid-cols-12 gap-4">
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
