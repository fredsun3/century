import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 静态导出，用于 GitHub Pages 部署
  output: 'export',
  // 项目页面部署在 /century/ 子路径下
  basePath: '/century',
  // 静态导出推荐：URL 以 / 结尾，匹配 GitHub Pages 的目录结构
  trailingSlash: true,
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
