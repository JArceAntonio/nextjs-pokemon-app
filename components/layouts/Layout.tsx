import Head from "next/head";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { Navbar } from "../ui";

type LayoutProps = {
  title?: string;
} & PropsWithChildren;

const origin = typeof window === "undefined" ? "" : window.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Jose Antonio Arce Fuertes" />
        <meta name="description" content="Información del pokemon" />
        <meta name="keywords" content="pokemon, pokedex" />
        <meta
          property="og:title"
          content={`Información sobre el Pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
