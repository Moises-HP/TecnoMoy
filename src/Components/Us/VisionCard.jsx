import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader } from "@nextui-org/card";

export const VisionCard = () => {
    return (
      <div className="col-span-12 md:col-span-6">
        <Card className="mt-8 shadow-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-justify">
            <span className="text-[#fff] p-4 bg-[#D36E00FF] rounded-full mb-4">
              <FontAwesomeIcon icon={faEye} className="text-[30px]" />
            </span>
            <h3 className="font-bold text-[27px] mb-4 text-primary-500">Visión</h3>
            <p>Nuestra visión es convertirnos en la principal elección de nuestros clientes cuando buscan servicios que agreguen valor a sus proyectos. Nos esforzamos por ofrecer soluciones integrales y personalizadas que satisfagan plenamente sus necesidades y expectativas.</p>
          </CardHeader>
        </Card>
      </div>
    );
  };