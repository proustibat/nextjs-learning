import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../../_app';
import Layout from '../../../../components/Layout';
import Head from 'next/head';
import Sidebar, { SIDEBAR_TYPE } from '../../../../components/Sidebar';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';

type SSGExternalPathsProps = {
  itemId: string;
  itemData: unknown;
};

const SSGExternalPaths: NextPageWithLayout = ({
  itemId,
  itemData,
}: SSGExternalPathsProps) => {
  return (
    <>
      <Head>
        <title>SSG With External Content and pre-rendering pages</title>
        <meta
          property="og:title"
          content="SSG With External Content and pre-rendering pages"
          key="title"
        />
      </Head>
      <div>
        <h1>SSG With External Content and pre-rendering pages</h1>
        <p>
          <a href="https://hackernews.api-docs.io/v0/overview/introduction">
            From Hackernews API
          </a>
        </p>
        <p>
          Using <code>getStaticPaths</code>. It fetches the last top stories Id
          then fetches the data for the 3 last. The 3 pages will be pre-rendered
          at build time.
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
        <br />
        <h1>Those pages are pre-rendered on build</h1>
        <ul>
          {[35037723, 35035100, 35037371, 35031545, 35038061].map((id) => (
            <li key={id}>
              <Link href={`/pages-data-fetching/top-stories/stories/${id}`}>
                {id}
              </Link>
            </li>
          ))}
        </ul>
        <br />
        <h1>Those pages are NOT pre-rendered on build</h1>
        <ul>
          {[35004503, 35025664, 34987658, 34988748, 34998921].map((id) => (
            <li key={id}>
              <Link href={`/pages-data-fetching/top-stories/stories/${id}`}>
                {id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

SSGExternalPaths.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.PAGES_DATA_FETCHING} />
      {page}
    </Layout>
  );
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const apiUrl = 'https://hacker-news.firebaseio.com/v0';

  // const res = await fetch(`${apiUrl}/topstories.json`);
  // const storiesIds = (await res.json()).slice(0, 5);
  const storiesIds = [35037723, 35035100, 35037371, 35031545, 35038061];
  console.log(storiesIds);

  // Get the paths we want to pre-render based on storiesId
  const paths = storiesIds.map((id) => ({
    params: { id: id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

export default SSGExternalPaths;

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apiUrl = 'https://hacker-news.firebaseio.com/v0';

  // params contains the story `id`.
  const itemId = params.id;

  const resData = await fetch(`${apiUrl}/item/${itemId}.json`);
  const itemData = await resData.json();

  return {
    props: {
      itemId,
      itemData,
    },
  };
};
