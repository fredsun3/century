import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const strokeTypes = [
  {
    title: '缺血性中风',
    subtitle: '脑梗死',
    desc: '占中风的80%以上，因脑血管堵塞导致脑部缺血缺氧，引起脑组织坏死。常见原因包括动脉粥样硬化、心源性栓塞等。',
    color: 'from-red-500 to-orange-500',
    icon: '🧠',
  },
  {
    title: '出血性中风',
    subtitle: '脑出血',
    desc: '因脑血管破裂导致出血，压迫脑组织。虽然发病率较低，但致死率和致残率极高，高血压是其最主要的诱因。',
    color: 'from-rose-500 to-red-600',
    icon: '💥',
  },
];

const fastSigns = [
  {
    letter: 'F',
    word: 'Face',
    cn: '面部',
    desc: '面部不对称，口角歪斜',
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  },
  {
    letter: 'A',
    word: 'Arm',
    cn: '手臂',
    desc: '单侧手臂无力或麻木',
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  },
  {
    letter: 'S',
    word: 'Speech',
    cn: '语言',
    desc: '言语不清或理解困难',
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  },
  {
    letter: 'T',
    word: 'Time',
    cn: '时间',
    desc: '立即拨打120急救',
    color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  },
];

const riskFactors = [
  { factor: '高血压', level: '高危', percent: '54%', desc: '最重要的可干预危险因素' },
  { factor: '糖尿病', level: '高危', percent: '23%', desc: '加速动脉粥样硬化进程' },
  { factor: '心房颤动', level: '高危', percent: '18%', desc: '导致心源性脑栓塞' },
  { factor: '吸烟', level: '中危', percent: '15%', desc: '损伤血管内皮细胞' },
  { factor: '高血脂', level: '中危', percent: '20%', desc: '促进动脉斑块形成' },
  { factor: '肥胖', level: '中危', percent: '12%', desc: '增加代谢综合征风险' },
];

const preventionStrategies = [
  {
    icon: '💊',
    title: '规律用药',
    items: [
      '高血压患者严格遵医嘱服药，不可自行停药',
      '房颤患者坚持抗凝治疗，预防血栓形成',
      '高血脂患者规范使用他汀类药物',
      '定期复查，根据医嘱调整用药方案',
    ],
  },
  {
    icon: '🥗',
    title: '健康饮食',
    items: [
      '每日食盐摄入不超过5克',
      '多吃新鲜蔬果，每天至少500克',
      '选择全谷物，减少精制碳水',
      '限制饱和脂肪酸，优选植物油',
    ],
  },
  {
    icon: '🏃',
    title: '适量运动',
    items: [
      '每周至少150分钟中等强度有氧运动',
      '推荐快走、游泳、太极拳等',
      '避免剧烈运动和突然用力',
      '运动前做好热身，循序渐进',
    ],
  },
  {
    icon: '😌',
    title: '情绪管理',
    items: [
      '保持心态平和，避免大喜大悲',
      '学会减压，培养兴趣爱好',
      '保证充足睡眠，每晚7-8小时',
      '戒烟限酒，远离不良嗜好',
    ],
  },
];

export function StrokeSection() {
  return (
    <section id="stroke" className="scroll-mt-20 bg-white py-20 dark:bg-emerald-950/30 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700 dark:bg-red-900/20 dark:text-red-300">
            <span>🧠</span> 脑中风专题
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            认识脑中风，科学早预防
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            脑中风（脑卒中）是我国居民第一大致死致残原因，每12秒就有一人发生中风，
            每21秒就有一人死于中风。但80%的中风是可以预防的。
          </p>
        </div>

        {/* Stroke types */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {strokeTypes.map((type) => (
            <Card
              key={type.title}
              className="overflow-hidden border-0 shadow-lg dark:shadow-emerald-900/20"
            >
              <div
                className={`h-2 bg-gradient-to-r ${type.color}`}
              />
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{type.icon}</span>
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {type.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {type.subtitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {type.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAST warning signs */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            牢记 FAST 原则，快速识别中风
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fastSigns.map((sign) => (
              <div
                key={sign.letter}
                className={`rounded-2xl p-6 ${sign.color} transition-transform hover:-translate-y-1`}
              >
                <div className="mb-3 text-4xl font-black">{sign.letter}</div>
                <div className="mb-1 text-sm font-bold uppercase tracking-wider opacity-70">
                  {sign.word}
                </div>
                <div className="mb-2 text-lg font-bold">{sign.cn}</div>
                <div className="text-sm opacity-80">{sign.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-center dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-800 dark:text-red-300">
              ⚠️ 中风急救黄金时间窗仅 <span className="text-lg font-bold">4.5</span> 小时，
              一旦出现以上症状，请立即拨打 <span className="text-lg font-bold">120</span>！
            </p>
          </div>
        </div>

        {/* Risk factors */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            中风六大危险因素
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {riskFactors.map((rf) => (
              <div
                key={rf.factor}
                className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-emerald-800 dark:bg-emerald-900/20"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {rf.factor}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                      rf.level === '高危'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                    }`}
                  >
                    {rf.level}
                  </span>
                </div>
                <div className="mb-2 text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {rf.percent}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{rf.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention strategies */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            四大预防策略
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {preventionStrategies.map((strategy) => (
              <Card
                key={strategy.title}
                className="border-0 shadow-md transition-shadow hover:shadow-lg dark:shadow-emerald-900/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{strategy.icon}</span>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">
                      {strategy.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {strategy.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="mt-0.5 shrink-0 text-emerald-500"
                        >
                          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
                          <path
                            d="M6 9l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
