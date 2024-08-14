import { motion } from "framer-motion";
import { Spacer } from "@nextui-org/spacer";

import { title } from "@/components/primitives";
import { reasonCards } from "@/config/information";
import CardComponent from "./components/card-component";

const Reasoning = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col text-center">
        <h1 className={title({ size: "sm", color: "green" })}>
          Why Finding Good Healthy Food for the Right Price is Hard
        </h1>
        <div className="flex flex-row gap-4">
          {reasonCards.map((card, index) => (
            <motion.div key={index} className="flex-1 min-w-0">
              <CardComponent
                Icon={card.Icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasoning;
