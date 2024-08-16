import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoIosNutrition } from "react-icons/io";
import { FaDollarSign, FaHandHoldingDollar } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import { PiJarLabelFill } from "react-icons/pi";

export const reasonCards = [
  {
    Icon: MdOutlineLocalGroceryStore,
    title: "Too Many Options",
    description:
      "There are too many options to choose from when it comes to finding healthy food.",
  },
  {
    Icon: IoIosNutrition,
    title: "Nutritional Information",
    description: "Nutritional information is not always easy to understand.",
  },
  {
    Icon: FaDollarSign,
    title: "Price Discrepancies",
    description:
      "The price of healthy food can vary significantly between stores.",
  },
];

export const featureCards = [
  {
    Icon: FaHandHoldingDollar,
    title: "Price Comparison",
    description: "Compare prices of food between stores.",
  },
  {
    Icon: FaSearchLocation,
    title: "Find Food",
    description: "Find food at the best prices.",
  },
  {
    Icon: PiJarLabelFill,
    title: "Nutritional Information",
    description: "Understand the nutritional information of food.",
  },
];

export const faqQuestions = [
  {
    question: "What is Foodable?",
    answer:
      "Foodable is a platform that helps you find healthy food at the right price.",
  },
  {
    question: "How does Foodable work?",
    answer:
      "Foodable works by allowing you to compare prices of food between stores.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by joining our waitlist. We will notify you when we launch.",
  },
  {
    question: "How does Foodable help me understand nutritional information?",
    answer:
      "We are working on creating an algorithm that will give you an index of how healthy a food item is based on its nutritional information.",
  },
];
