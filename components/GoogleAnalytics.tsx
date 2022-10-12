import React from 'react';
import Script from 'next/script';



export const GoogleAnalytics = () => {
    const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    if (!googleAnalyticsId) return null;
    return (
        <>
            <Script strategy="beforeInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
            
            <Script strategy="beforeInteractive" id='g-analytics'>{
`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${googleAnalyticsId}');
`
            }</Script>
        </>
    )
}
