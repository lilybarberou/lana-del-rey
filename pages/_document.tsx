import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

Document.getInitialProps = async (ctx: any) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await NextDocument.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
};

export default Document;
