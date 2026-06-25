import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 静态导出，用于 GitHub Pages 部署
  output: 'export',
  // 项目页面部署在 /century/ 子路径下
  basePath: '/century',
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    // GitHub Pages 不支持 Next.js 图片优化服务
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
