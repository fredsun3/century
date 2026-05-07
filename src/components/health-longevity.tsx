import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const herbsImg =
  'https://coze-coding-project.tos.coze.site/coze_storage_7636962343267696674/image/generate_image_4a9010dd-fd31-4285-b419-5253e368ddf9.jpeg?sign=1809655613-388dcaef8b-0-810400768ea5593a07f39604c9c668f9224cbc34d3b2ee42c41b011572af294e';

const tcmWisdom = [
  {
    title: '顺应四时',
    ancient: '「春夏养阳，秋冬养阴」——《黄帝内经》',
    modern: '现代医学证实，人体生物钟与季节变化密切相关，顺应自然节律可增强免疫力、调节内分泌。',
    icon: '🌸',
    tips: ['春季养肝，宜食绿色蔬菜', '夏季养心，适当出汗排毒', '秋季养肺，滋阴润燥', '冬季养肾，温补蓄能'],
  },
  {
    title: '饮食有节',
    ancient: '「饮食自倍，肠胃乃伤」——《黄帝内经》',
    modern: '现代营养学推荐"七分饱"原则，热量限制已被证实可延长寿命、延缓衰老。',
    icon: '🥢',
    tips: ['每餐七分饱，细嚼慢咽', '五味均衡，不偏食不暴食', '早餐要好，午餐要饱，晚餐要少', '忌食生冷，温热为宜'],
  },
  {
    title: '起居有常',
    ancient: '「起居有常，不妄作劳」——《黄帝内经》',
    modern: '规律作息维持昼夜节律，褪黑素正常分泌，有助心血管健康和免疫功能。',
    icon: '🌅',
    tips: ['子时入眠（23:00前）', '午时小憩（11:00-13:00）', '卯时起床（5:00-7:00）', '每日睡眠7-8小时'],
  },
  {
    title: '情志调摄',
    ancient: '「恬淡虚无，真气从之，精神内守，病安从来」——《黄帝内经》',
    modern: '心理因素与心血管疾病密切相关，积极心态可降低炎症水平，延长端粒长度。',
    icon: '☯️',
    tips: ['戒怒戒躁，心平气和', '培养兴趣，修身养性', '社交互动，避免孤独', '学会放下，知足常乐'],
  },
];

const seasonalFoods = [
  {
    season: '春',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50 dark:bg-green-900/20',
    foods: ['菠菜', '韭菜', '春笋', '枸杞芽'],
    effect: '养肝明目，升发阳气',
  },
  {
    season: '夏',
    color: 'from-red-400 to-rose-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
    foods: ['苦瓜', '莲子', '绿豆', '西瓜'],
    effect: '清心降火，消暑除烦',
  },
  {
    season: '秋',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    foods: ['梨', '百合', '银耳', '山药'],
    effect: '润肺生津，滋阴润燥',
  },
  {
    season: '冬',
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    foods: ['羊肉', '核桃', '黑芝麻', '红枣'],
    effect: '温补肾阳，蓄精养藏',
  },
];

const longevityHabits = [
  {
    habit: '每日步行',
    detail: '日行6000-10000步，降低心血管疾病风险30%',
    icon: '🚶',
    color: 'emerald',
  },
  {
    habit: '茶饮养生',
    detail: '绿茶富含茶多酚，抗氧化、降血脂、防癌',
    icon: '🍵',
    color: 'green',
  },
  {
    habit: '午间小憩',
    detail: '午睡20-30分钟，降低冠心病风险37%',
    icon: '😴',
    color: 'blue',
  },
  {
    habit: '蔬果为主',
    detail: '每天5份蔬果，减少慢性病风险20%以上',
    icon: '🥗',
    color: 'lime',
  },
  {
    habit: '社交活跃',
    detail: '良好社交可降低死亡风险50%，延缓认知衰退',
    icon: '👥',
    color: 'violet',
  },
  {
    habit: '终身学习',
    detail: '持续用脑可增加认知储备，降低阿尔茨海默风险',
    icon: '📚',
    color: 'amber',
  },
];

export function LongevitySection() {
  return (
    <section
      id="longevity"
      className="scroll-mt-20 bg-white py-20 dark:bg-emerald-950/30 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700 dark:bg-teal-900/20 dark:text-teal-300">
            <span>🌿</span> 养生长寿专题
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            中西合璧，养生长寿之道
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            融合数千年中医养生智慧与现代医学研究成果，构建科学、实用的长寿养生体系。
          </p>
        </div>

        {/* TCM + Modern */}
        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {/* Left: image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={herbsImg}
              alt="中医养生"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">千年智慧，现代验证</h3>
              <p className="text-sm text-emerald-100/80">
                中医养生理念正被现代医学不断验证，两者相辅相成，为健康长寿提供更完整的方案
              </p>
            </div>
          </div>

          {/* Right: key principles */}
          <div className="grid gap-4 sm:grid-cols-2">
            {tcmWisdom.map((item) => (
              <Card
                key={item.title}
                className="border-0 shadow-md dark:shadow-emerald-900/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <CardTitle className="text-base text-gray-900 dark:text-white">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-xs italic text-emerald-700 dark:text-emerald-400">
                    {item.ancient}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.modern}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* TCM detailed cards */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            四大养生法则详解
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {tcmWisdom.map((item) => (
              <Card
                key={item.title}
                className="overflow-hidden border-0 shadow-lg dark:shadow-emerald-900/20"
              >
                <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                      <p className="mt-1 text-xs italic text-emerald-700 dark:text-emerald-400">
                        {item.ancient}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {item.modern}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {item.tips.map((tip) => (
                      <div
                        key={tip}
                        className="flex items-start gap-2 rounded-lg bg-emerald-50 p-2.5 text-sm text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
                      >
                        <span className="mt-0.5 shrink-0">✦</span>
                        {tip}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Seasonal foods */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            四季饮食养生
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seasonalFoods.map((s) => (
              <div
                key={s.season}
                className={`rounded-2xl ${s.bg} p-6 transition-transform hover:-translate-y-1`}
              >
                <div
                  className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${s.color} text-xl font-bold text-white shadow-md`}
                >
                  {s.season}
                </div>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {s.foods.map((food) => (
                    <span
                      key={food}
                      className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300"
                    >
                      {food}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.effect}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Longevity habits */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            六大长寿习惯
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {longevityHabits.map((item) => (
              <div
                key={item.habit}
                className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-emerald-800 dark:bg-emerald-900/20"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="font-bold text-gray-900 dark:text-white">{item.habit}</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
