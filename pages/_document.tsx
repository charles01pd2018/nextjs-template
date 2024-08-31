import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Site Logo */}
          <link rel="icon" href="/favicon.ico" />
          {/* Imported Fonts */}
          {/* <link
            rel="preload"
            href="/static/fonts/{PUT_YOUR_FONT_HERE}"
            as="font"
            crossOrigin=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
