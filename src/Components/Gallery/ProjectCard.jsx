import { Card, CardFooter } from "@nextui-org/card";
import { Modal } from "./Modal";

export const ProjectCard = ({ title, imageUrl }) => (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 pt-5">
      <Card isFooterBlurred className="w-full h-[300px]">
        <Modal title={title} imageUrl={imageUrl}/>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">  
          <p className="text-black text-[18px] font-bold text-center">{title}</p>
        </CardFooter>
      </Card>
    </div>
  );