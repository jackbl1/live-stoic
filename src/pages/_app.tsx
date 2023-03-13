import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/global.css";
import { MetamaskProvider } from "../hooks/useMetamask";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetamaskProvider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </MetamaskProvider>
  );
}

export default MyApp;
