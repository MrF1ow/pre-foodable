import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import { reasonCards } from "@/config/information";
import ReasonCard from "./components/reason-card";
import SectionLayout from "@/layouts/section";

const Reasoning = () => {
  return (
    <SectionLayout color="#1BED95">
      <div className="w-full text-center" style={{ paddingBottom: "2rem" }}>
        <h1 className={title({ size: "sm", color: 'black' })}>
          Why Finding Good Healthy Food for the Right Price is Hard
        </h1>
      </div>
      <div className="flex flex-row gap-4 h-[400px]">
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
