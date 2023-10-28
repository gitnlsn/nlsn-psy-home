import React, { ComponentProps, PropsWithChildren } from "react";

interface BlogParagraphProps extends ComponentProps<"article"> {}

export const BlogBody: React.FC<BlogParagraphProps> = ({
  className,
  ...props
}) => {
  return (
    <article
      {...props}
      className={`mx-auto max-w-sm md:max-w-3xl ${className}`}
    />
  );
};
