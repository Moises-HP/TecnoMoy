import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/react"

export const ValueCard = ({name, message}) => {
  return (
    <Card className="w-[150px] lg:w-[200px] xl:w-[300px] h-[200px] my-3 shadow-current mx-6">
      <CardHeader className="flex gap-3">
        <div className="flex">
          <p className="text-lg text-[#D36E00FF] font-bold">{name}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-justify">{message}</p>
      </CardBody>
      <Divider/>
    </Card>
  )
}
