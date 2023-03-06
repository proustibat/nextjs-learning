import { useState, useEffect, ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";
import Head from "next/head";
import Sidebar, { SIDEBAR_TYPE } from "../../components/Sidebar";

const Csr: NextPageWithLayout = () => {
  const [itemId, setItemId] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const apiUrl = "https://hacker-news.firebaseio.com/v0";

    fetch(`${apiUrl}/maxitem.json`)
      .then((res) => res.json())
      .then((id) => {
        setItemId(id);
        fetch(`${apiUrl}/item/${id}.json`)
          .then((res) => res.json())
          .then((data) => {
            setItemData(data);
            setLoading(false);
          });
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!setItemData) return <p>No data</p>;

  return (
    <>
      <Head>
        <title>Client side rendering</title>
        <meta property="og:title" content="Client side rendering" key="title" />
      </Head>

      <div>
        <h1>Client side rendering</h1>
        <p>
          <a href="https://hackernews.api-docs.io/v0/overview/introduction">
            From Hackernews API
          </a>
        </p>
        <p>
          Using <code>useEffect</code>. It fetches the maxItem id at time, then
          fetches the related content, at runtime
        </p>
        <p>Item id: {itemId}</p>
        <p>Item data</p>
        {itemData && (
          <ul>
            {Object.entries(itemData).map(([key, value]) => (
              <li key={key}>
                {key} : {value.toString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Csr;

Csr.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.PAGES_DATA_FETCHING} />
      {page}
    </Layout>
  );
};
