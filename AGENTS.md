# 项目上下文

### 项目概览

**百年健康** — 一个健康科普网站，详细介绍脑中风预防、高血压防治、养生长寿之道，帮助用户轻松阔过百年。

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── layout.tsx      # 根布局 (中文 lang, 健康主题 metadata)
│   │   ├── page.tsx        # 首页 (组装各内容模块)
│   │   └── globals.css     # 全局样式 (绿色健康主题色)
│   ├── components/         # 业务组件
│   │   ├── health-nav.tsx      # 粘性导航栏 (客户端组件, 滚动高亮)
│   │   ├── health-hero.tsx     # Hero 首屏 (山水背景, 数据统计)
│   │   ├── health-stroke.tsx   # 脑中风预防板块 (FAST原则, 危险因素, 预防策略)
│   │   ├── health-hypertension.tsx  # 高血压防治板块 (血压分级, DASH饮食, 运动指南, 时刻表)
│   │   ├── health-longevity.tsx    # 养生长寿板块 (中医智慧, 四季饮食, 长寿习惯)
│   │   ├── health-century.tsx      # 百年之道板块 (蓝区启示, 六大法则, 管理清单)
│   │   ├── health-footer.tsx       # 页脚
│   │   └── ui/              # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

## 构建与测试命令

```bash
pnpm install          # 安装依赖
pnpm dev              # 启动开发环境 (端口5000)
pnpm build            # 构建生产版本
pnpm start            # 启动生产环境
pnpm ts-check         # TypeScript 类型检查
pnpm lint:build       # ESLint 代码检查
pnpm validate         # 并行执行 ts-check + lint:build
```

## 页面结构

单页滚动式网站，包含以下板块：

1. **导航栏** — 粘性顶部导航，滚动时高亮当前板块
2. **Hero 首屏** — 山水背景图 + 核心数据统计
3. **认识中风** — 中风类型 / FAST预警 / 危险因素 / 预防策略
4. **防治高血压** — 血压分级 / DASH饮食 / 运动指南 / 一日时刻表
5. **养生长寿** — 中医四大法则 / 四季饮食 / 六大长寿习惯
6. **百年之道** — 蓝区启示 / 六大健康法则 / 健康管理清单
7. **页脚** — 免责声明与快速导航

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码
- 禁止隐式 `any` 和 `as any`
- 仅交互组件使用 `'use client'`，内容展示组件保持服务端组件

### next.config 配置规范

- 配置的路径不要写死绝对路径，必须使用动态拼接

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据
2. 必须使用 `'use client'` + useEffect + useState 确保动态内容仅在客户端挂载后渲染
3. 禁止使用 head 标签，优先使用 metadata

## UI 设计与组件规范

- 使用 shadcn/ui 组件库，位于 `src/components/ui/` 目录下
- 主题色为绿色系（emerald/teal），体现健康与生命力
- 卡片组件统一使用 `border-0 shadow-md` 风格
- 响应式设计：移动端优先，断点 sm/md/lg
