import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader } from "@nextui-org/card";
export const MisionCard = () => {
    return (
      <div className="col-span-12 md:col-span-6">
        <Card className="mt-8 shadow-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-justify">
            <span className="text-[#fff] p-4 bg-[#D36E00FF] rounded-full mb-4">
              <FontAwesomeIcon icon={faBullseye} className="text-[30px]" />
            </span>
            <h3 className="font-bold text-[27px] mb-5 text-primary-500">Misión</h3>
            <p>Nuestra misión es proporcionar soluciones tecnológicas integrales que impulsen la productividad, optimicen los procesos y faciliten el control de recursos para nuestros clientes. Nos comprometemos a agregar valor a sus productos y servicios a través de herramientas innovadoras y eficientes.</p>
          </CardHeader>
        </Card>
      </div>
    );
  };