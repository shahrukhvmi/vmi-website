// pages/_app.js
import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
