import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nelson Kenzo Tamashiro",
  description:
    "Psicanálise lacaniana, transtorno obsessivo compulsivo, TOC, ansiedade, depressão, esquizofrenia, suicídio, ideação suicída, LGBT, LGBTQI, LGBTQI+, LGBTQIA, transsexual, trangênero, gênero, transtorno de personalidade, transtorno de humorm, autoconhecimento.",
  authors: [
    { name: "nelson kenzo tamashiro", url: "https://github.com/gitnlsn" },
    {
      name: "nelson kenzo tamashiro",
      url: "https://www.linkedin.com/in/nelson-kenzo-tamashiro/",
    },
    {
      name: "nelson kenzo tamashiro",
      url: "https://zenklub.com.br/psicanalistas/nelson-kenzo-tamashiro/",
    },
  ],
  abstract:
    "Lacanian psychoanalysis, obsessive compulsive disorder, OCD, anxiety, depression, schizophrenia, suicide, suicidal ideation, LGBT, LGBTQI, LGBTQI+, LGBTQIA, transsexual, transgender, gender, personality disorder, mood disorder, self-knowledge.",
  category: "Psicanálise",
  keywords: [
    "psicanálise",
    "psicanálise lacaniana",
    "transtorno obsessivo compulsivo",
    "TOC",
    "ansiedade",
    "depressão",
    "esquizofrenia",
    "suicídio",
    "ideação suicída",
    "LGBT",
    "LGBTQI",
    "LGBTQI+",
    "LGBTQIA",
    "transsexual",
    "trangênero",
    "gênero",
    "transtorno de personalidade",
    "transtorno de humorm",
    "autoconhecimento.",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
          rel="stylesheet"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      {/* Body */}
      <body className="min-h-screen bg-beige-light text-slate-800 duration-100">
        {children}
      </body>
    </html>
  );
}
