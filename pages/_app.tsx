import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const router = useRouter();

  console.log(`_APP ROUTER LOAD FOR ${router.pathname}`, router);
  console.log(`_APP PAGE PROPS`, pageProps);
  return (
    <>
      <Head>
        <title>StreetLensHouston - Dashcam Uploader</title>
        <meta name="description" content="Anthony Buncio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SessionProvider session={session}>
        <Header />
        <Component params={router.query} {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
};

export default App;
