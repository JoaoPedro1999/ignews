import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="favicon.png" sizes="192x192" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
