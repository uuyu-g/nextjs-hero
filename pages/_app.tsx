import "./styles.css";
import { MessageProvider } from "../components/MessageProvider";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <MessageProvider>
      <Component {...pageProps} />
    </MessageProvider>
  );
}
