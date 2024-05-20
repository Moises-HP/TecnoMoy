import { Card, CardFooter } from "@nextui-org/card"
import { useTheme } from "next-themes";
import website from '../assets/website.svg'
import { Image } from "@nextui-org/image";
export const Gallery = () => {
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
              <h2 className="ourService-h2 text-[25px] sm:text-[37px] md:text-[45px] leading-7 md:leading-8">Galería</h2>
          </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-26 xl:mx-36 grid grid-cols-12 gap-4 pt-5">
        <div className="col-span-12 pt-5">
            <span className="font-bold text-[28px] sm:text-[36px] mb-4 text-primary-500 span-ourService">Galería</span>
            <p className="pt-7 text-justify text-[16px] md:text-[18px] font-medium">En TecnoMoy, nos enorgullecemos de nuestros logros y de los proyectos que hemos desarrollado junto a nuestros clientes. Nuestra galería de proyectos anteriores ofrece una visión detallada de nuestro trabajo y de cómo hemos ayudado a diversas empresas a alcanzar sus objetivos tecnológicos.</p>
            <br/>
            <p className="pt-7 text-justify text-[16px] md:text-[18px] font-medium">Explora nuestra galería para descubrir cómo hemos transformado las ideas de nuestros clientes en realidades exitosas. Cada proyecto cuenta una historia de colaboración, dedicación y resultados excepcionales que destacan la calidad de nuestro trabajo y la satisfacción de nuestros clientes.</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Tienda de Ropa</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Reservas en un Restaurante</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Institución Académica</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Sistema de Reservas</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Agencia de Medios</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Empresa de Logística</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Empresa de Turismo</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Telemedicina</p>
              </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
          <Card isFooterBlurred className="w-full h-[300px]">
            <Image
                removeWrapper
                isZoomed
                alt="Card example background"
                className="z-0 w-full h-full scale-125-translate-y-6 object-cover"
                src={website}
            />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
                  <p className="text-black text-[18px] font-bold text-center">Telemedicina</p>
              </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
