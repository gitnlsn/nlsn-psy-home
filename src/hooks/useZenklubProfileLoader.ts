import { Profile } from "@/interfaces/Profile";
import { ZenklubSlug } from "@/interfaces/ZenklubSlug";
import { useEffect, useMemo, useState } from "react";

interface UseZenklubProfileLoaderProps {
  slugId: string;
}

export const useZenklubProfileLoader = ({
  slugId,
}: UseZenklubProfileLoaderProps) => {
  const [slug, setSlug] = useState<ZenklubSlug | undefined>(undefined);

  const profile = useMemo<Profile | undefined>(() => {
    if (slug === undefined) {
      return undefined;
    }

    return {
      name: slug.displayName,
      about: slug.summary,
      imageUrl: slug.imageUrl,
    };
  }, [slug]);

  useEffect(() => {
    fetch(`https://api.zenklub.com.br/professionals/slug/${slugId}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "pt-BR",
        authorization: "unknown",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) =>
        setSlug({
          id: data.id,
          displayName: data.displayName,
          description: data.description,
          imageUrl: data.imageUrl,
          summary: data.summary,
          isOnline: data.isOnline,
          rating: data.rating,
        })
      )
      .catch(() => setSlug(undefined));
  }, []);

  return {
    slug,
    profile,
  };
};
