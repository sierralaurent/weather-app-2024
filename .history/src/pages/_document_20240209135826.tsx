import { Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
        rel="stylesheet" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
