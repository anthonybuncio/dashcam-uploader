import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { useSessionStorage } from "@/lib/hooks/useSessionStorage";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    //SHOULD LOOK FOR TOKEN TO AUTH AND SHOW USER
    if (typeof window !== "undefined" && localStorage.getItem("sl_user")) {
      const userData = localStorage.getItem("sl_user");
      setUser(JSON.parse(userData));
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>StreetLensHouston - Dashcam Uploader</title>
        <meta name="description" content="Anthony Buncio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SessionProvider session={session}>
        <Header />
        <Component user={user} params={router.query} {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
