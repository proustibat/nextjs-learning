import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";
import Head from "next/head";
import Sidebar, { SIDEBAR_TYPE } from "../../components/Sidebar";

type ISRProps = {
  itemId: string;
  itemData: unknown;
};

const ISR: NextPageWithLayout = ({ itemId, itemData }: ISRProps) => {
  return (
    <>
      <Head>
        <title>ISR</title>
        <meta property="og:title" content="ISR" key="title" />
      </Head>
      <div>
        <h1>ISR</h1>
        <p>
          <a href="https://hackernews.api-docs.io/v0/overview/introduction">
            From Hackernews API
          </a>
        </p>
        <p>
          Using <code>getStaticProps</code> with <code>revalidate</code>{" "}
          property. When a request is made to a page that was pre-rendered at
          build time, it will initially show the cached page. Any requests to
          the page after the initial request and before 10 seconds are also
          cached and instantaneous. After the 10-second window, the next request
          will still show the cached (stale) page. Next.js triggers a
          regeneration of the page in the background. Once the page generates
          successfully, Next.js will invalidate the cache and show the updated
          page. If the background regeneration fails, the old page would still
          be unaltered.
        </p>
        <p>Item id: {itemId}</p>
        <p>Item data</p>
        {itemData && (
          <ul>
            {Object.entries(itemData).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ISR;

ISR.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.PAGES_DATA_FETCHING} />
      {page}
    </Layout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  const apiUrl = "https://hacker-news.firebaseio.com/v0";

  const resItemId = await fetch(`${apiUrl}/maxitem.json`);
  const itemId = await resItemId.json();

  const resData = await fetch(`${apiUrl}/item/${itemId}.json`);
  const itemData = await resData.json();

  return {
    props: {
      itemId,
      itemData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
