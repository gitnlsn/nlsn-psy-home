import React, { ComponentProps } from "react";
import { Button } from "../Button/Button";
import { WhatsappIcon } from "../icons/whatsapp";
import Link from "next/link";

interface WhatsappButtonProps {
  variant: ComponentProps<typeof Button>["variant"];
  contentType: ComponentProps<typeof Button>["contentType"];
}

export const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  variant,
  contentType,
}) => {
  if (contentType === "text") {
    return (
      <Link href="https://wa.link/h1wux9">
        <Button variant={variant} contentType={contentType}>
          <WhatsappIcon className="h-8 w-8 p-1" />
          <p>Entrar em contato</p>
        </Button>
      </Link>
    );
  }

  return (
    <Link href="https://wa.link/h1wux9">
      <Button variant={variant} contentType={contentType}>
        <WhatsappIcon className="h-8 w-8 p-1" />
      </Button>
    </Link>
  );
};
