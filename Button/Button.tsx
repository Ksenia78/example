import { FC } from "react";
import cn from "classnames";
import { ButtonProps, ButtonCut, ButtonVersion } from "./Button.type";

import "./Button.scss";

export const Button: FC<ButtonProps> = function ({
  children,
  className,
  disabled,
  version,
  cut,
  form,
  type,
  onClick,
  as: Tag = "button",
  isActive,
}) {
  return (
    <Tag
      className={cn("button", className, {
        "button-disabled": disabled,
        "button-primary": version === ButtonVersion.PRIMARY,
        "button-secondary": version === ButtonVersion.SECONDARY,
        "button-tertiary": version === ButtonVersion.TERTIARY,
        "button-option": version === ButtonVersion.OPTION,
        "button-cut_bottom_left": cut === ButtonCut.BOTTOM_LEFT,
        "button-cut_bottom_right": cut === ButtonCut.BOTTOM_RIGHT,
        "button-cut_bottom": cut === ButtonCut.BOTTOM,
        "button-active": isActive,
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
      form={form}
    >
      {children}
    </Tag>
  );
};

export default Button;
