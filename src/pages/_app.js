import "@/styles/globals.css";
import MainLayout from "./Layout/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
