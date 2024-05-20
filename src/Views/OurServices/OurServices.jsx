import { Card, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import support from '../../assets/support.png'
import website from '../../assets/website.svg'
import {useTheme} from "next-themes";
import { Link } from "react-router-dom";

export const OurServices = () => {
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
              <h2 className="ourService-h2 text-[25px] sm:text-[37px] md:text-[45px] leading-7 md:leading-8">Nuestros servicios</h2>
          </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-26 xl:mx-36 grid grid-cols-12 gap-4 pt-5">
        <div className="col-span-12 pt-5">
            <span className="font-bold text-[28px] sm:text-[36px] mb-4 text-primary-500 span-ourService">Nuestros Servicios</span>
            <p className="pt-7 text-justify text-[16px] md:text-[18px] font-medium">En TecnoMoy nos especializamos en ofrecer servicios orientados al soporte y creación de páginas web. Desde la resolución ágil de problemas técnicos hasta el desarrollo completo de sitios web a medida, nuestro equipo altamente capacitado está comprometido en brindar soluciones eficaces y de calidad que impulsen la presencia digital de nuestros clientes.</p>
        </div>

        <div className="col-span-12 col-start-1 sm:col-span-6 md:col-span-5 md:col-start-2 pt-5">
          <Link to="/nuestros-servicios/soporte">
            <Card isFooterBlurred className="w-full h-[300px]">
                <Image
                    removeWrapper
                    isZoomed
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                    src={support}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                    <p className="text-black text-[18px] font-bold">Soporte</p>
                </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-5 pt-5">
          <Link to="/nuestros-servicios/paginas-web">
            <Card isFooterBlurred className="w-full h-[300px]">
                <Image
                    removeWrapper
                    isZoomed
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                    src={website}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                    <p className="text-black text-[18px] font-bold">Páginas Web</p>
                </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </>
  )
}