import { ReactElement } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import myPic from '../../public/images/ceil.jpg';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../_app';
import Sidebar, { SIDEBAR_TYPE } from '../../components/Sidebar';
import { GetStaticProps } from 'next';

type SSGExternalContentProps = {
  itemId: string;
  itemData: unknown;
};

const SSGExternalContent: NextPageWithLayout = ({
  itemId,
  itemData,
}: SSGExternalContentProps) => {
  return (
    <>
      <Head>
        <title>SSG With External Content</title>
        <meta
          property="og:title"
          content="SSG With External Content"
          key="title"
        />
      </Head>

      <div>
        <h1>SSG With External Content</h1>
        <p>
          <a href="https://hackernews.api-docs.io/v0/overview/introduction">
            From Hackernews API
          </a>
        </p>
        <p>
          Using <code>getStaticProps</code>. It fetches the maxItem id at build
          time, then fetches the related content
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

        <hr />
        <h2>Using Image component with remote image</h2>
        <Image
          src="/images/ceil.jpg" // Route of the image file
          width={500} // Desired size with correct aspect ratio
          height={332} // Desired size with correct aspect ratio
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACaAOgDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAQACAwYF/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERAhL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A9SknU5gCEACAApoAUUioAEAAQCBCiSQIEAkgqkJAgkgkEBQQPoghUQIQApFAAigGaaEAkAQIUQIBJAEkBUkASA0CtGjQOrWdWgdTOoH1EkrISCKhUKAFIoChUIIIAkgokkASAJICoaLRaB0aLRaB0azaLUVrRrOjQb1MagfZCSsIIAhVQKKKazQVCCCCAqQGqFDRoELRoLRatZtA2s2q1m1A2s2i1m0Vq1m1m0WoNaNYtGorepz9Io9Agm3mghQVZNFFFZprNQVCrNop0aLRoHRo0aB1azq0Do0aLQNrNotFoG1m0Ws2optYtVrNqKrWbRazalVq1nWbRqVY3qc9RSPTBJ6vFCoVFFFVFAVmms0VWs2q1m1BWjRaLRTo0Ws6DWjWdGg1otZ0Wg1azazaLQNrNotZtRTaxarWLUrUNrNotZtZqw2s6LWdSrG9TnqSrHrAk93OmaazQVZprNRRWLWqxaAtZtNrFqKrRaLWbQNotZtZtFatFrNrNoN2s6zaL0UatZtZtF6Sq1azazazalWG1m0Ws2s1qG1m0Ws2s7rUNo0WjUqw6mdSVY9eEnS5AKRRWazWqxUBWK1WKKzazabWLUBaxabWLUVWs2q1i0U2i1m1m0o1aLWbWbSq1aLWdZtSrG7WbWbRalahtFotZtZ3VzDazarRazutZi0IM1qFBJSPYJB2ONM00VBms1qsUVmsVqsVBmudbrnUVm1i1qsVFZtZtVrNqAtZtVrNoqtFotZtFNotGjUrR0aNGpWsOjRqZ1rFoSZ1UEmWkkkHsQQ7XCKKaKDFZrVZqKxWK3WKg51it1zqKxWK3XOorFYrdYqKxWa1WaKzWa1WaiiggaQSZawJJNawJJlpJBlUkgf/2Q=="
          placeholder="blur"
          alt="a pic of paris"
        />

        <h2>Image component with imported image file</h2>
        <Image
          src={myPic}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </>
  );
};

export default SSGExternalContent;

SSGExternalContent.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.PAGES_DATA_FETCHING} />
      {page}
    </Layout>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  const apiUrl = 'https://hacker-news.firebaseio.com/v0';

  const resItemId = await fetch(`${apiUrl}/maxitem.json`);
  const itemId = await resItemId.json();

  const resData = await fetch(`${apiUrl}/item/${itemId}.json`);
  const itemData = await resData.json();

  return {
    props: {
      itemId,
      itemData,
    },
  };
};
