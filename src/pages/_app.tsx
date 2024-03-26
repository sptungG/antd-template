import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import Loader from "@/components/loader/Loader";
import "@/styles/globals.css";

const ConfigProviders = dynamic(() => import("@/components/providers/ConfigProviders"), {
  loading: () => <Loader />,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProviders>
      <Component {...pageProps} />
    </ConfigProviders>
  );
};

export default App;
