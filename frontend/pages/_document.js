import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='theme-color' content='#000000' />

          {/*Twitter card data*/}
          <meta name='twitter:card' content='summary_large_image' />
          {/*CDN for Bootstrap*/}
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
            integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2'
            crossOrigin='anonymous'></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        {/*JavaScript and Jquery for bootstrap*/}
        <script
          src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
          integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
          crossOrigin='anonymous'></script>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx'
          crossOrigin='anonymous'></script>
      </Html>
    );
  }
}
