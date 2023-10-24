import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes } from "react";

interface BodyCardProps {
  title: string;
  content: string;
  image: string | StaticImageData;
  className?: HTMLAttributes<any>["className"];
}

export const BodyCard: React.FC<BodyCardProps> = ({
  title,
  content,
  image,
  className = "",
}) => {
  return (
    <article
      className={`w-fit max-w-[400px] md:max-w-4xl shadow-xl flex flex-col md:flex-row items-center gap-12 p-8 ${className}`}
    >
      <Image
        alt={`${title}-${content}`}
        src={image}
        width={384}
        className="shadow-lg rounded-md"
      />
      <article className="flex flex-col gap-6">
        <h1 className="font-medium text-4xl text-center md:text-left">
          {title}
        </h1>
        <p className="text-2xl text-center md:text-left">{content}</p>
      </article>
    </article>
  );
};
