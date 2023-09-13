import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({subsets:["latin"]});

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>D3 Properties</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;