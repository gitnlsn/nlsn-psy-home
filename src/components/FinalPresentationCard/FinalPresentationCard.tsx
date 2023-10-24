import Image from "next/image";
import React from "react";
import { WhatsappButton } from "../custom-buttons/WhatsappButton";

import NelLogo from "../../assets/nel-logo.png";
import { ZenklubButton } from "../custom-buttons/ZenklubButton";

export const FinalPresetantionCard: React.FC = () => {
  return (
    <article className="w-screen h-screen flex flex-col justify-center gap-12 items-center p-4 md:flex-row">
      <Image
        src={NelLogo}
        alt="Nel-logo"
        width={256}
        className="border border-blue-900 shadow-xl rounded-3xl"
      />
      <article className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="font-medium text-5xl text-center md:text-left">
          Psicanálise lacaniana
        </h1>

        <ul className="list-none flex flex-row flex-wrap items-center gap-3">
          <li>
            <WhatsappButton variant="primary" contentType="text" />
          </li>
          <li>
            <ZenklubButton variant="outlined" contentType="text" />
          </li>
        </ul>
      </article>
    </article>
  );
};
