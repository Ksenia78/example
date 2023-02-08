import { ElementType } from "react";

export enum ButtonVersion {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  OPTION = "option",
}

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export enum ButtonCut {
  BOTTOM_LEFT = "left",
  BOTTOM_RIGHT = "right",
  BOTTOM = "bottom",
}

export type ButtonProps = {
  as?: ElementType;
  className?: string;
  type?: `${ButtonType}`;
  cut?: `${ButtonCut}`;
  version?: `${ButtonVersion}`;
  block?: boolean;
  disabled?: boolean;
  form?: string;
  isActive?: boolean;
  onClick?: () => void;
};
