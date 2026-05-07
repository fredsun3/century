export function HealthFooter() {
  return (
    <footer className="bg-emerald-900 py-12 text-emerald-100 dark:bg-emerald-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M16 8c-1 3-4 5-4 8s2 5 4 8c2-3 4-5 4-8s-3-5-4-8z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
              百年健康
            </div>
            <p className="text-sm leading-relaxed text-emerald-300/70">
              致力于传播科学的健康知识，帮助更多人掌握预防脑中风、防治高血压、养生长寿的方法，
              轻松阔过百年。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-bold text-white">快速导航</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#stroke" className="text-emerald-300/70 transition-colors hover:text-white">
                  认识脑中风
                </a>
              </li>
              <li>
                <a href="#hypertension" className="text-emerald-300/70 transition-colors hover:text-white">
                  防治高血压
                </a>
              </li>
              <li>
                <a href="#longevity" className="text-emerald-300/70 transition-colors hover:text-white">
                  养生长寿
                </a>
              </li>
              <li>
                <a href="#century" className="text-emerald-300/70 transition-colors hover:text-white">
                  百年之道
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="mb-4 font-bold text-white">健康提示</h4>
            <p className="text-sm leading-relaxed text-emerald-300/70">
              本网站内容仅供健康科普参考，不构成任何医疗建议。
              如有身体不适，请及时前往正规医疗机构就诊，遵医嘱治疗。
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-6 text-center text-xs text-emerald-300/50">
          <p>百年健康 — 科学预防 · 健康生活 · 长寿之道</p>
        </div>
      </div>
    </footer>
  );
}
