import Image from "next/image";
import React from "react";
import { WhatsappButton } from "../custom-buttons/WhatsappButton";
import { ZenklubButton } from "../custom-buttons/ZenklubButton";
import { LinkedInButton } from "../custom-buttons/LinkedInButton";

import NelLogo from "../../assets/nel-logo.png";

export const PresetantionCard: React.FC = () => {
  return (
    <article className="w-screen h-screen flex flex-col justify-center gap-12 items-center p-4 md:flex-row">
      <Image
        src={NelLogo}
        alt="Nel-logo"
        width={256}
        className="border border-blue-900 shadow-xl rounded-3xl"
      />
      <article className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="font-semibold text-5xl text-center md:text-left">
          Nelson Kenzo Tamashiro
        </h1>
        <p className="font-medium text-4xl text-center md:text-left">
          Psicanálise lacaniana
        </p>

        <ul className="list-none flex flex-row items-center gap-3">
          <li>
            <WhatsappButton variant="outlined" contentType="icon" />
          </li>
          <li>
            <ZenklubButton variant="outlined" contentType="icon" />
          </li>
          <li>
            <LinkedInButton />
          </li>
        </ul>
      </article>
    </article>
  );
};
