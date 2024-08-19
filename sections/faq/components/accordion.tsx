import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { faqQuestions } from "@/config/information";

const AccordionComponent = () => {
  return (
    <Accordion>
      {faqQuestions.map((question, index) => (
        <AccordionItem key={index} title={question.question}>
          {question.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
