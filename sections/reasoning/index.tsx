import { motion } from "framer-motion";
import {Spacer} from "@nextui-org/spacer";

import { title } from "@/components/primitives";
import { reasonCards } from "@/config/information";
import CardComponent from "./components/card-component";

const Reasoning = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col text-center">
        <h1 className={title({ size: "sm", color: "green", fullWidth: true })}>
          Why Finding Good Healthy Food for the Right Price is Hard
        </h1>
        <Spacer y={4} />
        <div className="flex flex-row">
          {reasonCards.map((card, index) => (
            <CardComponent
              key={index}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasoning;
