"use client";

import { BodyCard } from "@/components/BodyCard/BodyCard";
import { FinalPresetantionCard } from "@/components/FinalPresentationCard/FinalPresentationCard";
import { PresetantionCard } from "@/components/PresentationCard/PresentationCard";

import BodyImage1 from "../assets/body-image-1.jpg";
import BodyImage2 from "../assets/body-image-2.jpg";
import BodyImage3 from "../assets/body-image-3.png";
import { ComponentProps } from "react";
import { useZenklubTestimonialsLoader } from "@/hooks/useZenklubTestimonialsLoader";
import { TestimonyCard } from "@/components/TestimonyCard/TestimonyCard";
import { AboutCard } from "@/components/AboutCard/AboutCard";
import { useZenklubProfileLoader } from "@/hooks/useZenklubProfileLoader";

const HorizontalDivisor: React.FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div
    className={`border-t border-blue-950 w-full max-w-3xl ${className}`}
    {...props}
  />
);

export default function Home() {
  const { selectedTestimonies } = useZenklubTestimonialsLoader();

  const { profile } = useZenklubProfileLoader({
    slugId: "nelson-kenzo-tamashiro",
  });

  console.log({ profile });

  return (
    <main className="flex flex-col items-center">
      <PresetantionCard />

      <HorizontalDivisor className="mb-24" />

      <BodyCard
        title="Humanização"
        content="O sofrimento não é tão grande quando estamos acompanhados."
        image={BodyImage1}
      />

      <HorizontalDivisor className="border-t-0 mb-24" />

      <BodyCard
        title="Objetividade"
        content="Terapia cuidadosamente pensada."
        image={BodyImage2}
      />

      <HorizontalDivisor className="border-t-0 mb-24" />

      <BodyCard
        title="Conhecimento"
        content="Interpretação com profundidade e pragmatismo."
        image={BodyImage3}
      />

      {profile !== undefined && (
        <>
          <HorizontalDivisor className="m-24" />

          <AboutCard profile={profile} />
        </>
      )}

      {selectedTestimonies.length > 0 && (
        <>
          <HorizontalDivisor className="m-24" />

          <h1 className="text-5xl text-center">Últimos Depoimentos</h1>

          <HorizontalDivisor className="border-t-0 m-12" />

          <section className="flex flex-col items-center gap-12 w-full px-16">
            {selectedTestimonies.map((testimony) => (
              <div key={testimony.date.getTime()} className="">
                <TestimonyCard testimony={testimony} />
              </div>
            ))}
          </section>
        </>
      )}

      <HorizontalDivisor className="mt-24" />

      <FinalPresetantionCard />
    </main>
  );
}
