import React, { ComponentProps, PropsWithChildren } from "react";

interface BlogParagraphProps extends ComponentProps<"span"> {}

export const BlogHighlight: React.FC<BlogParagraphProps> = ({
  className,
  ...props
}) => {
  return <span {...props} className={`font-semibold ${className}`} />;
};
