import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta name="description" />
                    <title> Get Home Improvement & Contractors | EasyBids </title>
                    <meta
                        name="description"
                        content="Avail Home Improvement &amp; Remodeling Services from trusted &amp; verified service providers &amp; contractors. EasyBids connects local contractors for all home services."
                    />
                    <meta
                        name="keywords"
                        content="home improvement services, movers, home remodel services,  kitchen remodelling, roofing, plumbing, AC, architects, Heating, painting, home repairs &amp; maintenance services."
                    />
                    <meta name="robots" content="noindex, nofollow" />

                    <meta
                        itemprop="name"
                        content="Get Home Improvement &amp; Contractors | EasyBids"
                    />
                    <meta
                        itemprop="description"
                        content="Avail Home Improvement &amp; Remodeling Services from trusted &amp; verified service providers &amp; contractors. EasyBids connects local contractors for all home services."
                    />
                    <meta
                        property="og:image"
                        content="https://i.ibb.co/0J63D07/easybids-profile.jpg"
                    />
                    <meta
                        property="og:title"
                        content="Get Home Improvement &amp; Contractors | EasyBids"
                    />
                    <meta
                        property="og:description"
                        content="Avail Home Improvement &amp; Remodeling Services from trusted &amp; verified service providers &amp; contractors. EasyBids connects local contractors for all home services."
                    />
                    <meta property="og:url" content="http://www.easybids.com/" />
                    <meta
                        property="og:image"
                        content="https://i.ibb.co/0J63D07/easybids-profile.jpg"
                    />
                    <meta property="og:site_name" content="@easybids" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="http://www.easybids.com/" />
                    <meta
                        name="twitter:title"
                        content="Get Home Improvement &amp; Contractors | EasyBids"
                    />
                    <meta
                        name="twitter:description"
                        content="Avail Home Improvement &amp; Remodeling Services from trusted &amp; verified service providers &amp; contractors. EasyBids connects local contractors for all home services."
                    />
                    <meta name="twitter:creator" content="@easybids" />
                    <meta
                        name="twitter:image"
                        content="https://i.ibb.co/0J63D07/easybids-profile.jpg"
                    />
                    <link rel="canonical" href="http://www.easybids.com/" />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                    />
                   
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="./assets/images/easybids/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="./assets/images/easybids/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="./assets/images/easybids/favicon-16x16.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.10.0/rellax.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
                    <scipt src="./scripts/index.js"></scipt>
                    <script src="./scripts/main.js"></script>
{/*    
                    <script type="text/javascript">
                        (function(w,d,v3){
                        w.chaportConfig = {
                        appId : '5eac26d13cb8db4623af0d95'
                        };
                        if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
                    </script> */}
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-154734979-1"></script>
    {/* <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'UA-154734979-1');
    </script> */}
    <script
            dangerouslySetInnerHTML={{
              __html: `[window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-154734979-1');]`
            }}
          />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
