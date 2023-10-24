import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "px-2 py-2 border border-slate-700 shadow-sm rounded-lg font-medium flex flex-row gap-2 items-center justify-center",
  variants: {
    variant: {
      primary: "bg-slate-800 text-beige-light hover:bg-slate-900",
      outlined: "bg-beige-light text-slate-800 hover:bg-beige-dark",
    },
    contentType: {
      text: "",
      icon: "rounded rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    contentType: "text",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  variant,
  contentType,
  ...props
}) => {
  return (
    <button {...props} className={button({ variant, contentType })}></button>
  );
};
