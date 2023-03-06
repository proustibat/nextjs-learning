import { ReactElement } from "react";
import Layout from "../../components/Layout";
import Sidebar, { SIDEBAR_TYPE } from "../../components/Sidebar";
import Head from "next/head";
import styles from "../../styles/pages-data-fetching.module.css";
import Link from "next/link";
import {NextPageWithLayout} from "../_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next JS - AMP</title>
        <meta property="og:title" content="AMP" key="title" />
      </Head>
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>
            AMP
            <a
              target="_blank"
              href="https://nextjs.org/docs/advanced-features/amp-support/introduction"
            >
              🔗
            </a>
          </h1>
          <p>
            See{" "}
            <a href="https://amp.dev/documentation/components/websites/amp-carousel">
              amp components documentation
            </a>
          </p>
          <div className={styles.grid}>
            <Link className={styles.card} href="/amp/enabled">
              {" "}
              <h3>Enabled &rarr;</h3>
              <p>
                The page has a user-accessible (optimized) version of the page
                and a search-engine indexable (unoptimized) version of the page
              </p>
            </Link>

            <Link className={styles.card} href="/amp/hybrid">
              <h3>Hybrid &rarr;</h3>
              <p>
                The page uses <code>useAmp</code> to differentiate between
                modes, it's a React Hook that returns <code>true</code> if the
                page is using AMP, and <code>false</code> otherwise.
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
      <Sidebar type={SIDEBAR_TYPE.AMP} />
      {page}
    </Layout>
  );
};
