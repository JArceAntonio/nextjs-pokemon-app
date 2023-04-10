import Head from "next/head";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { Navbar } from "../ui";

type LayoutProps = {
  title?: string;
} & PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Jose Antonio Arce Fuertes" />
        <meta name="description" content="Información del pokemon" />
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
