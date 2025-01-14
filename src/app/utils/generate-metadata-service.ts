export const generateMetadata = (title: string, description: string, pageUrl: string) => {
    return {
        title: title,
        description: description,
        keywords: ['Starknet', 'Debugger', 'Cairo', 'Transaction', 'Gas profiler', 'Stack trace', 'Debugging'],
        // don't change it's base url
        metadataBase: new URL('https://walnut.dev/'),
        openGraph: {
            title: title,
            description: description,
            images: [
                {
                    url: 'https://walnut.dev/seo.png',
                    width: 520,
                    height: 160,
                    alt: 'Walnut logo',
                },
            ],
            locale: 'en_US',
            type: 'website',
            url: pageUrl,
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: ['https://walnut.dev/seo.png'],
        },
        icons: {
            icon: '/favicon/favicon.ico',
            shortcut: '/favicon/favicon.ico',
            apple: '/favicon/apple-touch-icon.png',
        },
    };
};
