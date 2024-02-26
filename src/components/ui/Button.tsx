"use client";

import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  isDisabled,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled || false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon ? (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon}
            fill
            alt="right icon"
            className="object-contain"
          />
        </div>
      ) : null}
    </button>
  );
};

export default Button;
