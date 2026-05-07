import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const bpLevels = [
  {
    label: '正常血压',
    systolic: '<120',
    diastolic: '<80',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    advice: '保持健康生活方式',
  },
  {
    label: '正常高值',
    systolic: '120-139',
    diastolic: '80-89',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    advice: '改善生活方式，定期监测',
  },
  {
    label: '1级高血压',
    systolic: '140-159',
    diastolic: '90-99',
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    advice: '生活方式干预+评估用药',
  },
  {
    label: '2级高血压',
    systolic: '160-179',
    diastolic: '100-109',
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    advice: '药物治疗+生活方式改善',
  },
  {
    label: '3级高血压',
    systolic: '≥180',
    diastolic: '≥110',
    color: 'text-red-800 dark:text-red-300',
    bg: 'bg-red-100 dark:bg-red-900/30',
    border: 'border-red-300 dark:border-red-700',
    advice: '立即就医，强化治疗',
  },
];

const dashDiet = [
  {
    category: '谷物',
    daily: '6-8份',
    icon: '🌾',
    examples: '全麦面包、糙米、燕麦、小米',
    tip: '优选全谷物，少选精制谷物',
  },
  {
    category: '蔬菜',
    daily: '4-5份',
    icon: '🥬',
    examples: '菠菜、西兰花、胡萝卜、番茄',
    tip: '每餐至少一半是蔬菜',
  },
  {
    category: '水果',
    daily: '4-5份',
    icon: '🍎',
    examples: '苹果、香蕉、橙子、蓝莓',
    tip: '整果优于果汁，注意糖分',
  },
  {
    category: '低脂乳制品',
    daily: '2-3份',
    icon: '🥛',
    examples: '脱脂牛奶、低脂酸奶',
    tip: '补充钙质，有助降压',
  },
  {
    category: '优质蛋白',
    daily: '≤6份',
    icon: '🐟',
    examples: '鱼类、禽肉、豆类、坚果',
    tip: '减少红肉，每周至少2次鱼',
  },
  {
    category: '油脂',
    daily: '2-3份',
    icon: '🫒',
    examples: '橄榄油、菜籽油、坚果',
    tip: '限饱和脂肪，远离反式脂肪',
  },
];

const exerciseGuide = [
  {
    type: '有氧运动',
    icon: '🚶',
    intensity: '中等强度',
    examples: '快走、慢跑、游泳、骑车',
    frequency: '每周5次，每次30分钟',
    hr: '最大心率的60-70%',
  },
  {
    type: '抗阻训练',
    icon: '💪',
    intensity: '低中等强度',
    examples: '弹力带、哑铃、自重训练',
    frequency: '每周2-3次，隔天进行',
    hr: '注意呼吸节奏，避免憋气',
  },
  {
    type: '柔韧训练',
    icon: '🧘',
    intensity: '低强度',
    examples: '拉伸、瑜伽、太极拳',
    frequency: '每周2-3次',
    hr: '动作缓慢，避免过度拉伸',
  },
];

const dailyTips = [
  {
    time: '06:30',
    title: '晨起一杯水',
    desc: '空腹饮用200ml温开水，稀释血液，降低血液粘稠度',
    icon: '💧',
  },
  {
    time: '07:00',
    title: '血压晨测',
    desc: '排尿后、服药前、早餐前测量血压，记录数值',
    icon: '📊',
  },
  {
    time: '08:00',
    title: '低盐早餐',
    desc: '选择燕麦、鸡蛋、牛奶等低盐高蛋白食物',
    icon: '🍳',
  },
  {
    time: '10:00',
    title: '起身活动',
    desc: '避免久坐，每隔1小时起身活动5分钟',
    icon: '🚶',
  },
  {
    time: '12:00',
    title: '清淡午餐',
    desc: '蔬菜占一半，主食选粗粮，烹饪少油少盐',
    icon: '🥗',
  },
  {
    time: '15:00',
    title: '午后茶歇',
    desc: '适量饮用菊花茶、决明子茶，辅助降压',
    icon: '🍵',
  },
  {
    time: '18:00',
    title: '适度运动',
    desc: '饭后1小时进行30分钟快走或太极拳',
    icon: '🏃',
  },
  {
    time: '20:00',
    title: '血压晚测',
    desc: '睡前测量血压，了解全天血压波动',
    icon: '📈',
  },
  {
    time: '22:00',
    title: '按时就寝',
    desc: '保证7-8小时睡眠，睡前避免情绪激动',
    icon: '😴',
  },
];

export function HypertensionSection() {
  return (
    <section
      id="hypertension"
      className="scroll-mt-20 bg-gradient-to-b from-emerald-50 to-white py-20 dark:from-emerald-950 dark:to-emerald-950/30 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
            <span>🫀</span> 高血压专题
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            防治高血压，守住健康防线
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            高血压是脑中风最重要的危险因素，被称为"无声杀手"。
            中国有2.45亿高血压患者，但知晓率仅51.6%，控制率仅16.8%。
          </p>
        </div>

        {/* BP classification */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            血压水平分类与建议
          </h3>
          <div className="overflow-x-auto">
            <div className="grid gap-3 min-w-[640px]">
              {/* Header */}
              <div className="grid grid-cols-5 gap-3 text-sm font-bold text-gray-500 dark:text-gray-400">
                <div>分类</div>
                <div>收缩压(mmHg)</div>
                <div>舒张压(mmHg)</div>
                <div>级别</div>
                <div>建议</div>
              </div>
              {bpLevels.map((level) => (
                <div
                  key={level.label}
                  className={`grid grid-cols-5 gap-3 rounded-xl border ${level.border} ${level.bg} p-4 text-sm transition-transform hover:-translate-y-0.5`}
                >
                  <div className={`font-bold ${level.color}`}>{level.label}</div>
                  <div className="font-mono font-bold text-gray-900 dark:text-white">
                    {level.systolic}
                  </div>
                  <div className="font-mono font-bold text-gray-900 dark:text-white">
                    {level.diastolic}
                  </div>
                  <div>
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold ${level.bg} ${level.color}`}
                    >
                      {level.label}
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{level.advice}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DASH Diet */}
        <div className="mb-16">
          <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-white">
            DASH 饮食法
          </h3>
          <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
            得舒饮食（DASH）被证实可有效降低血压，连续多年被评为最佳饮食法
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dashDiet.map((item) => (
              <Card
                key={item.category}
                className="border-0 shadow-md transition-shadow hover:shadow-lg dark:shadow-emerald-900/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <CardTitle className="text-base text-gray-900 dark:text-white">
                        {item.category}
                      </CardTitle>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {item.daily}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {item.examples}
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">
                    💡 {item.tip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Exercise guide */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            运动降压指南
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {exerciseGuide.map((ex) => (
              <Card
                key={ex.type}
                className="border-0 shadow-md dark:shadow-emerald-900/20"
              >
                <CardHeader>
                  <div className="text-center">
                    <span className="text-4xl">{ex.icon}</span>
                    <CardTitle className="mt-2 text-lg text-gray-900 dark:text-white">
                      {ex.type}
                    </CardTitle>
                    <span className="inline-block mt-1 rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {ex.intensity}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      推荐项目
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {ex.examples}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      运动频率
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {ex.frequency}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      心率/注意
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {ex.hr}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily schedule */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            高血压患者一日健康时刻表
          </h3>
          <div className="relative mx-auto max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-[52px] top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-800 md:left-1/2 md:-translate-x-0.5" />

            <div className="space-y-4">
              {dailyTips.map((tip, i) => (
                <div
                  key={tip.time}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Time badge */}
                  <div className="z-10 flex shrink-0 items-center justify-center w-[44px]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-md shadow-emerald-500/20">
                      {tip.time}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/20 ${
                      i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="flex items-center gap-2 md:justify-start">
                      <span className="text-lg">{tip.icon}</span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {tip.title}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
