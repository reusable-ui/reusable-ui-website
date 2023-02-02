import { Html, Head, Main, NextScript } from 'next/document'
import { Styles } from '@cssfn/cssfn-react'



export default function Document() {
    return (
        <Html>
            <Head>
                <Styles />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
