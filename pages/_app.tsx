import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StreetLensHouston - Dashcam Uploader</title>
        <meta name="description" content="Anthony Buncio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📸</text></svg>"
        />
      </Head>

      <div className="bg-white">
        <Header />
        <div className="mt-16">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
