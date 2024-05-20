import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader } from "@nextui-org/card";

export const ValueCard = ({ title }) => {
    return (
      <div className="col-span-12 lg:col-span-3 sm:col-span-6">
        <Card className="mt-4">
          <CardHeader className="pb-0 py-6 px-4 text-justify items-center">
            <span className="text-[#fff] p-2 bg-[#D36E00FF] rounded-full mr-4">
              <FontAwesomeIcon icon={faCircleCheck} className="text-[25px]" />
            </span>
            <h3 className="font-bold text-[18px] lg:text-[17px] xl:text-[18px] text-primary-500">{title}</h3>
          </CardHeader>
        </Card>
      </div>
    );
  };