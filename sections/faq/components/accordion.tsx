import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { faqQuestions } from "@/config/information";

const AccordionComponent = () => {
  return (
    <Accordion className="w-full max-w-full">
      {faqQuestions.map((question, index) => (
        <AccordionItem key={index} title={question.question}>
          <div className="max-w-full text-wrap break-words">
            {question.answer}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
