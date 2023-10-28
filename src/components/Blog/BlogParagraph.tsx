import React, { ComponentProps, PropsWithChildren } from "react";

interface BlogParagraphProps extends ComponentProps<"p"> {}

export const BlogParagraph: React.FC<BlogParagraphProps> = ({
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={`text-lg mb-3 last:mb-0 text-justify ${className}`}
    />
  );
};
