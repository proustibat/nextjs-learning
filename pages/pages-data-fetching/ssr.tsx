import { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../_app';
import Sidebar, { SIDEBAR_TYPE } from '../../components/Sidebar';
import { GetServerSideProps } from 'next';

type SSRProps = {
  itemId: string;
  itemData: unknown;
};

const SSR: NextPageWithLayout = ({ itemId, itemData }: SSRProps) => {
  return (
    <>
      <Head>
        <title>SSR with data from external API</title>
        <meta
          property="og:title"
          content="SSR with data from external API"
          key="title"
        />
      </Head>
      <div>
        <h1>SSR with data from external API</h1>
        <p>
          <a href="https://hackernews.api-docs.io/v0/overview/introduction">
            From Hackernews API
          </a>
        </p>
        <p>
          Using <code>getServerSideProps</code>. It fetches the maxItem id then
          fetches the related content, on the server on every request
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
export default SSR;

SSR.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.PAGES_DATA_FETCHING} />
      {page}
    </Layout>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  const apiUrl = 'https://hacker-news.firebaseio.com/v0';

  const resItemId = await fetch(`${apiUrl}/maxitem.json`);
  const itemId = await resItemId.json();

  const resData = await fetch(`${apiUrl}/item/${itemId}.json`);
  const itemData = await resData.json();

  // Pass data to the page via props
  return {
    props: {
      itemId,
      itemData,
    },
  };
};
