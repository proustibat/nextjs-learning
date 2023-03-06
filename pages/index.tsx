import { ReactElement } from "react";
import Layout from "../components/Layout";
import Sidebar, { SIDEBAR_TYPE } from "../components/Sidebar";
import Highlight, { defaultProps } from "prism-react-renderer";
const code = `Route (pages)                                                     Size     First Load JS
┌ ○ /                                                             1.42 kB        76.9 kB
├   /_app                                                         0 B            73.2 kB
├ ○ /404                                                          181 B          73.4 kB
├ ○ /amp (310 ms)                                                 2.3 kB         81.1 kB
├ ○ /amp/enabled (3363 ms)                                        AMP                AMP
├ ○ /amp/hybrid (3544 ms)                                         1.89 kB        80.8 kB
├ ○ /pages-data-fetching                                          2.33 kB        81.2 kB
├ ○ /pages-data-fetching/csr                                      1.82 kB        77.3 kB
├ ● /pages-data-fetching/isr (ISR: 10 Seconds) (862 ms)           1.9 kB         77.4 kB
├ ● /pages-data-fetching/ssg-external-content (891 ms)            3.29 kB        82.2 kB
├ ○ /pages-data-fetching/ssg-no-data                              1.46 kB        76.9 kB
├ λ /pages-data-fetching/ssr                                      1.69 kB        77.2 kB
├ ● /pages-data-fetching/top-stories/stories/[id] (2242 ms)       1.72 kB        77.2 kB
├   ├ /pages-data-fetching/top-stories/stories/35037723 (474 ms)
├   ├ /pages-data-fetching/top-stories/stories/35037371 (445 ms)
├   ├ /pages-data-fetching/top-stories/stories/35035100 (440 ms)
├   ├ /pages-data-fetching/top-stories/stories/35038061 (426 ms)
├   └ /pages-data-fetching/top-stories/stories/35031545
└ ○ /tailwind                                                     2.03 kB        77.5 kB
+ First Load JS shared by all                                     75.2 kB
  ├ chunks/framework-2c79e2a64abdb08b.js                          45.2 kB
  ├ chunks/main-198e4a74b74d7dc2.js                               26.8 kB
  ├ chunks/pages/_app-0cf4fc2c94b972d5.js                         326 B
  ├ chunks/webpack-ee7e63bc15b31913.js                            815 B
  └ css/28521155f3f8e158.css                                      2.04 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)`;
const Home = () => (
  <div>
    <h1>home</h1>
    <Highlight {...defaultProps} code={code} language="bash">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>
);

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar type={SIDEBAR_TYPE.MAIN} />
      {page}
    </Layout>
  );
};
