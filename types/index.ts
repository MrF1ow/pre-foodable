import { SVGProps } from "react";
import { IconType } from "react-icons";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface CardComponentProps {
  Icon: IconType;
  title: string;
  description: string;
}
