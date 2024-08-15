import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import { reasonCards } from "@/config/information";
import ReasonCard from "./components/reason-card";
import SectionLayout from "@/layouts/section";

const Reasoning = () => {
  return (
    <SectionLayout>
      <div className="w-full text-center py-8">
        <h1 className={title({ size: "sm", color: "green" })}>
          Why Finding Good Healthy Food for the Right Price is Hard
        </h1>
      </div>
      <div className="flex flex-row gap-4">
        {reasonCards.map((card, index) => (
          <motion.div key={index} className="flex-1 min-w-0">
            <ReasonCard
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Reasoning;
