import Image from 'next/image';

const heroBg =
  'https://coze-coding-project.tos.coze.site/coze_storage_7636962343267696674/image/generate_image_65316e1e-3c6c-43c8-ac5f-beaefad8ff86.jpeg?sign=1809655614-0eb942bdb7-0-58830f4a18a8254cb86a324b60f2b0af55273faebb6b59c6dfc3c8fee0abe177';

const stats = [
  { value: '2.45亿', label: '中国高血压患者', icon: '🫀' },
  { value: '1300万', label: '每年新发中风', icon: '🧠' },
  { value: '80%', label: '中风可预防', icon: '🛡️' },
  { value: '100岁', label: '健康可期目标', icon: '🌿' },
];

export function HealthHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="健康山水"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/60 to-emerald-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-200 backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          科学预防 · 健康生活 · 长寿之道
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          守护心脑血管健康
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
            轻松阔过百年
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-emerald-100/80 sm:text-xl">
          脑中风、高血压是威胁国人健康的头号杀手。掌握科学防治方法，
          <br className="hidden sm:block" />
          践行养生长寿之道，百岁健康人生不再遥不可及。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#stroke"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
          >
            开始了解
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-90"
            >
              <path
                d="M8 3v10M3 8l5-5 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#longevity"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5"
          >
            养生长寿
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="mb-2 text-2xl">{stat.icon}</div>
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-emerald-200/70 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/50"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
