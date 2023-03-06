import Head from "next/head";
import styles from "../styles/layout.module.css";
import { ReactNode } from "react";
import { useAmp } from "next/amp";
import {shadowsIntoLightTwo} from "../fonts";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Layouts Example</title>
        <meta property="og:title" content="Next JS With a layout" key="title" />
        <meta charSet="utf-8" />
        {!isAmp && (
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        )}
        <meta name="og:title" content="Next JS - Learning" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/learn%20NextJS.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="google" content="nositelinkssearchbox" />

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className={[styles.main].join(" ")} >{children}</main>
      <style jsx global>{`
      html {
        font-family: ${shadowsIntoLightTwo.style.fontFamily};
      }
    `}</style>
    </>
  );
}

export default Layout
