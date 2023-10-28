import React, { ComponentProps, PropsWithChildren } from "react";

interface BlogParagraphProps extends ComponentProps<"p"> {}

export const BlogTitle: React.FC<BlogParagraphProps> = ({
  className,
  ...props
}) => {
  return <h1 {...props} className={`text-3xl my-4 ${className}`} />;
};
