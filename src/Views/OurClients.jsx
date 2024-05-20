import { faClock, faSquareCheck, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader } from "@nextui-org/card"
import { useTheme } from "next-themes";
import { Carrousel } from "../Components/OurClients/Carrousel.jsx";

export const OurClients = () => {
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
              <h2 className="ourService-h2 text-[25px] sm:text-[37px] md:text-[45px] leading-7 md:leading-8">Nuestros clientes</h2>
          </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-26 xl:mx-36 grid grid-cols-12 gap-4 pt-5">
        <div className="col-span-12 pt-5">
            <span className="font-bold text-[28px] sm:text-[36px] mb-4 text-primary-500 span-ourService">Nuestros clientes</span>
            <p className="pt-7 text-justify text-[16px] md:text-[18px] font-medium">En TecnoMoy, nos enorgullecemos de trabajar con una amplia variedad de clientes que confían en nosotros para sus necesidades tecnológicas. Nos esforzamos por construir relaciones sólidas y duraderas, basadas en la confianza y la excelencia en el servicio.</p>
        </div>

        <div className="col-span-12 md:col-span-6 pt-5 animate-fade-left animation-once animation-duration-2000 animation-ease-linear">
            <Card className="py-7 mt-8">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <span className="text-[#fff] p-4 md:p-5 bg-[#D36E00FF] rounded-full mb-4"><FontAwesomeIcon icon={faThumbsUp} className="px-0.5 text-[30px] md:text-[35px]"/></span>
                    <h3 className="font-bold text-[16px] tsm:text-[19px] lg:text-[23px] mb-4 text-[#D36E00FF] underline">95%</h3>
                    <h3 className="font-bold text-[16px] sm:text-[19px] lg:text-[23px] mb-4 text-primary-500">Satisfacción del Cliente</h3>
                </CardHeader>
            </Card>
        </div>
        <div className="col-span-12 md:col-span-6 pt-5 animate-fade-left animation-once animation-duration-2000 animation-ease-linear">
            <Card className="py-7 mt-8">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <span className="text-[#fff] p-4 md:p-5 bg-[#D36E00FF] rounded-full mb-4"><FontAwesomeIcon icon={faSquareCheck} className="px-0.5 text-[30px] md:text-[35px]"/></span>
                    <h3 className="font-bold text-[16px] tsm:text-[19px] lg:text-[23px] mb-4 text-[#D36E00FF] underline">200+</h3>
                    <h3 className="font-bold text-[16px] sm:text-[19px] lg:text-[23px] mb-4 text-primary-500">Proyectos Completados</h3>
                </CardHeader>
            </Card>
        </div>
        <div className="col-span-12 md:col-span-6 pt-5 animate-fade-left animation-once animation-duration-2000 animation-ease-linear">
            <Card className="py-7 mt-8">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <span className="text-[#fff] p-4 md:p-5 bg-[#D36E00FF] rounded-full mb-4"><FontAwesomeIcon icon={faUserCheck} className="text-[30px] md:text-[33px]"/></span>
                    <h3 className="font-bold text-[16px] tsm:text-[19px] lg:text-[23px] mb-4 text-[#D36E00FF] underline">150+</h3>
                    <h3 className="font-bold text-[16px] sm:text-[19px] lg:text-[23px] mb-4 text-primary-500">Clientes Satisfechos</h3>
                </CardHeader>
            </Card>
        </div>
        <div className="col-span-12 md:col-span-6 pt-5 animate-fade-left animation-once animation-duration-2000 animation-ease-linear">
            <Card className="py-7 mt-8">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <span className="text-[#fff] p-4 md:p-5 bg-[#D36E00FF] rounded-full mb-4"><FontAwesomeIcon icon={faClock} className="px-0.5 text-[30px] md:text-[35px]"/></span>
                    <h3 className="font-bold text-[16px] tsm:text-[19px] lg:text-[23px] mb-4 text-[#D36E00FF] underline">10+</h3>
                    <h3 className="font-bold text-[16px] sm:text-[19px] lg:text-[23px] mb-4 text-primary-500">Años de Experiencia</h3>
                </CardHeader>
            </Card>
        </div>

        <div className="col-span-12 pt-5 animate-fade-up animation-once animation-duration-2000 animation-ease-linear">
            <p className="pt-7 text-justify text-[16px] md:text-[18px] font-medium">Lo que dicen nuestros clientes:</p>
        </div>
        <div className="col-span-12 pt-5 animate-fade-up animation-once animation-duration-2000 animation-ease-linear">
          <Carrousel/>
        </div>
      </div>
    </>
  )
}
