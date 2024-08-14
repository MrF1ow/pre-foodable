import { CardComponentProps } from "@/types";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const CardComponent = ({ Icon, title, description }: CardComponentProps) => {
  return (
    <Card
      className="w-[200px] h-[150px]"
    >
      <CardHeader className="flex items-center justify-center">
        <Icon size={48} />
      </CardHeader>
      <CardBody className="text-center">
        <h3 className="text-lg font-bold text-[#1BED95]">{title}</h3>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
