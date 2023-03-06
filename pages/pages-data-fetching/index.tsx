import { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../_app';
import styles from '../../styles/pages-data-fetching.module.css';
import Sidebar, { SIDEBAR_TYPE } from '../../components/Sidebar';
import { addProductJsonLd } from '../../json-ld/example';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next JS - pages and data fetching</title>
        <meta
          property="og:title"
          content="Next JS - pages and data fetching"
          key="title"
        />
        <link
          rel="canonical"
          href="https://prstbt-nextjs-learning.vercel.app/pages-data-fetching"
          key="canonical"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>
            Pages & Data fetching{' '}
            <a
              target="_blank"
              href="https://nextjs.org/docs/basic-features/pages"
            >
              🔗
            </a>
          </h1>
          <div className={styles.grid}>
            <Link
              className={styles.card}
              href="/pages-data-fetching/ssg-no-data"
            >
              {' '}
              <h3>Static Generation, no data &rarr;</h3>
              <p>
                By default, generates a single HTML file per page during build
                time
              </p>
            </Link>

            <Link
              className={styles.card}
              href="/pages-data-fetching/ssg-external-content"
            >
              <h3>SSG&rarr;</h3>
              <p>
                Content depends on external data, uses{' '}
                <code>getStaticProps</code>, at build time
              </p>
            </Link>

            <Link
              className={styles.card}
              href="/pages-data-fetching/top-stories/stories/35037723"
            >
              <h3>SSG + pre-rendering &rarr;</h3>
              <p>
                Page paths depend on external data. Uses{' '}
                <code>getStaticPaths</code> and <code>getStaticProps</code>, at
                build time.
              </p>
            </Link>

            <Link className={styles.card} href="/pages-data-fetching/ssr">
              <h3>SSR &rarr;</h3>
              <p>
                Getting data with <code>getServerSideProps</code>, on every
                request
              </p>
            </Link>

            <Link className={styles.card} href="/pages-data-fetching/isr">
              <h3>ISR &rarr;</h3>
              <p>
                Incremental Static Regeneration with <code>revalidate</code>
              </p>
            </Link>

            <Link className={styles.card} href="/pages-data-fetching/csr">
              <h3>Csr &rarr;</h3>
              <p>
                Client site rendering with <code>useEffect</code>
              </p>
            </Link>
          </div>
        </main>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            font-size: 0.9rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.PAGES_DATA_FETCHING} />
      {page}
    </Layout>
  );
};
