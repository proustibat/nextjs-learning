import { ReactElement } from "react";
import Layout from "../../components/Layout";
import Sidebar, { SIDEBAR_TYPE } from "../../components/Sidebar";
import { useAmp } from "next/amp";
import Head from "next/head";
import Image from "next/image";
import {NextPageWithLayout} from "../_app";

export const config = { amp: "hybrid" };

const Hybrid: NextPageWithLayout = () => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Next JS - AMP-first page</title>
        <meta property="og:title" content="Next JS - AMP enabled" key="title" />
      </Head>
      <div>
        <h1>My Title for AMP page</h1>
        {isAmp ? (
          <amp-img
            width="500"
            height="332"
            src="/images/ceil.jpg"
            alt="a cool image"
            layout="responsive"
          />
        ) : (
          <Image
            src="/images/ceil.jpg"
            width={500}
            height={332}
            alt="a pic of paris"
          />
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam
          vehicula consequat. Proin scelerisque dui a nisi dapibus efficitur.
          Fusce sit amet nisl volutpat, blandit massa sed, rutrum orci.
          Phasellus at lectus fermentum, bibendum nibh eget, lacinia turpis.
          Praesent consectetur enim ut augue rhoncus, eget dignissim ligula
          tempor. Pellentesque molestie orci sodales placerat semper. Praesent
          est sem, volutpat vel blandit a, rutrum non enim. Pellentesque sodales
          varius lacus nec laoreet.
        </p>
      </div>
    </>
  );
};
export default Hybrid;

Hybrid.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.AMP} />
      {page}
    </Layout>
  );
};
