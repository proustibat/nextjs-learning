import { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';

import { NextPageWithLayout } from '../_app';
import Sidebar, { SIDEBAR_TYPE } from '../../components/Sidebar';

const SSG: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Static Content Without External Data</title>
      <meta
        property="og:title"
        content="Static Content Without External Data"
        key="title"
      />
    </Head>
    <div>
      <h1>Static Content Without External Data</h1>
    </div>
  </>
);
export default SSG;

SSG.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.PAGES_DATA_FETCHING} />
      {page}
    </Layout>
  );
};
