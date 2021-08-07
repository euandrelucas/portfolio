import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script async src="https://arc.io/widget.min.js#nYrskAcR"></script>
        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=610ee33bdd84d90012da784b&product=sticky-share-buttons' async='async'></script>
        </Head>
      <Component {...pageProps} />
    </>
  )
}
