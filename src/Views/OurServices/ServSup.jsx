import { Card, CardFooter } from "@nextui-org/card"
import {useTheme} from "next-themes";
export const ServSup = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="design-1div">
          <div className="design-2div"></div>
              <div className="design-3div">
                  <svg className="design-svg" fill={`${theme === 'light'?'white':'#161616'}`} viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="design-pathSvg" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"/>
                  </svg>
              </div>
          <div className="design-4div bottom-[50%]">
              <h2 className="ourService-h2 text-[25px] sm:text-[37px] md:text-[45px] leading-7 md:leading-8">Soporte</h2>
          </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-26 xl:mx-36 grid grid-cols-12 gap-4 pt-5 animate-fade-left animation-once animation-duration-2000 animation-ease-linear">
        <div className="col-span-12 pt-5">
            <span className="font-bold text-[28px] sm:text-[36px] mb-4 text-primary-500 span-ourService">Soporte</span>
            <p className="pt-7 text-justify text-[16px] md:text-[18px] font-medium">TecnoMoy se enorgullece de ofrecer una gama completa de servicios de soporte tecnológico diseñados para satisfacer las necesidades cambiantes de nuestros clientes. Nuestro equipo altamente capacitado y experimentado está comprometido a proporcionar soluciones de soporte integrales y personalizadas que garanticen el máximo rendimiento y la eficiencia de los sistemas tecnológicos de nuestros clientes.</p>
            <br/>
            <p className="pt-7 text-justify text-[16px] md:text-[18px] font-medium">Entre nuestros servicios de soporte destacados se encuentran:</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
          <div className="card1-sup"></div>
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Mantenimiento preventivo</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <div className="card2-sup"></div>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                <p className="text-black text-[18px] font-bold text-center">Actualizaciones y mejoras</p>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
          <div className="card3-sup"></div>
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Consultoría tecnológica</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-start-4 lg:col-span-6 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
              <div className="card4-sup"></div>
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Capacitación y educación</p>
              </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
