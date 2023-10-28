import { Testimony } from "@/interfaces/Testimony";
import { ZenklubRating } from "@/interfaces/ZenklubRating";
import { useEffect, useMemo, useState } from "react";

export const useZenklubTestimonialsLoader = () => {
  const [ratings, setRatings] = useState<ZenklubRating[]>([]);

  const testimonies = useMemo(() => {
    if (!Array.isArray(ratings)) {
      console.warn("Zenklub ratings expected to return array.");
      return [];
    }

    return ratings.map<Testimony>((rating) => ({
      content: rating.comment,
      date: new Date(rating.createdAt),
      origin: "Zenklub",
    }));
  }, [ratings]);

  const selectedTestimonies = testimonies
    .sort((left, right) => right.date.getTime() - left.date.getTime())
    .slice(0, 6);


  useEffect(() => {
    fetch(
      "https://api.zenklub.com.br/professionals/ratings?professionalId=649252db59d8f0001203dc5d&hasComment=true&isValid=true",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "pt-BR",
          authorization: "unknown",
        },
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setRatings(data.ratings);
      })
      .catch(() => setRatings([]));
  }, []);

  return { ratings, testimonies, selectedTestimonies };
};
