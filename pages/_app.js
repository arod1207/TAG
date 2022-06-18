import { UserProvider } from "../Context/UserContext/UserContext";
import { ContractProvider } from "../Context/ContractContext/ContractContext";
import { MoralisProvider } from "react-moralis";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </MoralisProvider>
  );
}

export default MyApp;
