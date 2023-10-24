import Link from "next/link";
import { Button } from "../Button/Button";
import { LinkedInIcon } from "../icons/linkedin";
import React from "react";

export const LinkedInButton: React.FC = () => {
  return (
    <Link href="https://br.linkedin.com/in/nelson-kenzo-tamashiro">
      <Button variant="outlined" contentType="icon">
        <LinkedInIcon className="h-8 w-8 p-2" />
      </Button>
    </Link>
  );
};
