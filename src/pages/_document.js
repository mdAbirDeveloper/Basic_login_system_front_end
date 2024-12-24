import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased max-w-[1400px] mx-auto" style={{backgroundColor: "#000328", color: 'white'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
