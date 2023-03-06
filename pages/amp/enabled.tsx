import { ReactElement } from "react";
import Layout from "../../components/Layout";
import Sidebar, { SIDEBAR_TYPE } from "../../components/Sidebar";
import Head from "next/head";

export const config = { amp: true };

const Enabled = () => {
  return (
    <>
      <Head>
        <title>Next JS - AMP-first page</title>
        <meta property="og:title" content="Next JS - AMP enabled" key="title" />
      </Head>
      <div>
        <h1>My Title for AMP page</h1>
        <amp-carousel
          width="450"
          height="300"
          layout="responsive"
          type="slides"
          role="region"
          aria-label="Basic carousel"
        >
          <amp-img
            src="/images/amp/image1.jpg"
            width="450"
            height="300"
          ></amp-img>
          <amp-img
            src="/images/amp/image2.jpg"
            width="450"
            height="300"
          ></amp-img>
          <amp-img
            src="/images/amp/image3.jpg"
            width="450"
            height="300"
          ></amp-img>
        </amp-carousel>
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
export default Enabled;

Enabled.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.AMP} />
      {page}
    </Layout>
  );
};
