import Head from 'next/head';
import '~/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const title = '文字起こしばりぐっどくん';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
