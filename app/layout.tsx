import type { Metadata } from "next";
import type { PropsWithChildren, FC } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from "next/font/google";
import '@/styles/global.scss';
import '@/styles/custom.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "OrbitAi.dev",
  description: "OrbitAi.dev",
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg?v=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          {props.children}
        </AntdRegistry>
      </body>
    </html>
  );
}

export default RootLayout;