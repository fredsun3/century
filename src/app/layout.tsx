import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '百年健康 | 守护心脑血管健康，轻松阔过百年',
    template: '%s | 百年健康',
  },
  description:
    '全面介绍脑中风预防、高血压防治、养生长寿之道，助您轻松阔过百年，享受健康人生。',
  keywords: [
    '脑中风预防',
    '高血压防治',
    '养生长寿',
    '百年健康',
    '心脑血管健康',
    '健康生活',
    '中医养生',
    '长寿秘诀',
  ],
  authors: [{ name: '百年健康' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
