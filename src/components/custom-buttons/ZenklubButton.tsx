import React, { ComponentProps } from "react";
import { Button } from "../Button/Button";
import Link from "next/link";
import { ZenklubIcon } from "../icons/zenklub";

interface ZenklubButtonProps {
  variant: ComponentProps<typeof Button>["variant"];
  contentType: ComponentProps<typeof Button>["contentType"];
}

export const ZenklubButton: React.FC<ZenklubButtonProps> = ({
  variant,
  contentType,
}) => {
  if (contentType === "text") {
    return (
      <Link href="https://zenklub.com.br/psicanalistas/nelson-kenzo-tamashiro/">
        <Button variant={variant} contentType={contentType}>
          <ZenklubIcon className="h-8 w-8" />
          <p>Agendar</p>
        </Button>
      </Link>
    );
  }

  return (
    <Link href="https://zenklub.com.br/psicanalistas/nelson-kenzo-tamashiro/">
      <Button variant={variant} contentType={contentType}>
        <ZenklubIcon className="h-8 w-8" />
      </Button>
    </Link>
  );
};
