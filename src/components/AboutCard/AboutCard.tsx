import { Profile } from "@/interfaces/Profile";
import Image from "next/image";
import React from "react";

interface AboutCardProps {
  profile: Profile;
}

export const AboutCard: React.FC<AboutCardProps> = ({ profile }) => {
  return (
    <article className="max-w-[400px] md:max-w-3xl shadow-xl flex flex-col items-center md:flex-row gap-12 px-8 py-32">
      <Image
        alt={profile.name}
        src={profile.imageUrl}
        width={256}
        height={256}
        className="rounded-md shadow-md"
      />
      <article className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="font-semibold text-3xl text-center md:text-left">
          {profile.name}
        </h1>
        <p className="font-medium text-xl text-center md:text-left">
          {profile.about}
        </p>
      </article>
    </article>
  );
};
