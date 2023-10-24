import { Testimony } from "@/interfaces/Testimony";
import { format } from "date-fns";

interface TestimonyCardProps {
  testimony: Testimony;
}

export const TestimonyCard: React.FC<TestimonyCardProps> = ({
  testimony: { content, date, origin },
}) => {
  const formattedDate = format(date, "yyyy/MM/dd");

  return (
    <article className="flex flex-col gap-3 p-4 shadow-xl">
      <p className="text-sm self-start">{`${formattedDate} - ${origin}`}</p>
      <p className="text-lg">{content}</p>
    </article>
  );
};
