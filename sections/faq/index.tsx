import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import SectionLayout from "@/layouts/section";
import AccordionComponent from "./components/accordion";

const Faq = () => {
  return (
    <SectionLayout>
      <div
        className="w-full text-center flex justify-center"
        style={{ paddingBottom: "2rem" }}
      >
        <h1 className={title({ size: "sm", color: "black" })}>
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className='w-full'>
          <AccordionComponent />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Faq;
