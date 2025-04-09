import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Fikri Natadiwirya Maulana - Portfolio" />
        {/* Add favicon links here if you have them */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}