import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const taichiImg =
  'https://coze-coding-project.tos.coze.site/coze_storage_7636962343267696674/image/generate_image_bf177d2b-33c8-47fb-9f44-9403d40b8429.jpeg?sign=1809655613-3e4781e055-0-2222bb684cd62c58d85f61a5516c4b3f1d28d3f701c3357a0798a68a62ee7ba3';

const blueZones = [
  {
    name: '冲绳',
    location: '日本',
    traits: ['豆制品为主食', ' Ikigai生活哲学', '紧密的社区关系', '适量运动融入日常'],
    longevity: '百岁老人比例全球最高',
    icon: '🇯🇵',
  },
  {
    name: '撒丁岛',
    location: '意大利',
    traits: ['地中海饮食', '家庭为核心', '步行放牧生活', '适度饮用红酒'],
    longevity: '男性百岁老人密度最高',
    icon: '🇮🇹',
  },
  {
    name: '尼科亚',
    location: '哥斯达黎加',
    traits: ['豆类玉米主食', '生活有明确目标', '饮水富含矿物质', '家庭社交紧密'],
    longevity: '中年死亡率全球最低',
    icon: '🇨🇷',
  },
  {
    name: '伊卡里亚',
    location: '希腊',
    traits: ['地中海饮食', '午睡习惯', '茶饮养生', '社交活动丰富'],
    longevity: '被称为"忘记死亡的地方"',
    icon: '🇬🇷',
  },
];

const centuryPrinciples = [
  {
    number: '01',
    title: '心态乐观',
    subtitle: '积极心理',
    desc: '乐观者比悲观者平均寿命长11-15%。培养感恩之心，保持好奇心，笑口常开。研究表明，积极情绪可降低皮质醇水平，增强免疫系统。',
    icon: '😊',
    practices: ['每天记录3件感恩的事', '保持好奇心和学习欲', '多笑、多交友', '接受衰老，不恐惧死亡'],
  },
  {
    number: '02',
    title: '适度运动',
    subtitle: '动则有益',
    desc: '将运动融入日常生活，不必高强度，贵在坚持。百岁老人的共同特点是：一生保持活跃，步行、园艺、家务都是运动。',
    icon: '🏃',
    practices: ['日行6000步以上', '太极拳、八段锦', '园艺、家务劳动', '坐1小时起身活动5分钟'],
  },
  {
    number: '03',
    title: '均衡饮食',
    subtitle: '食不过量',
    desc: '冲绳人遵循"腹八分目"原则——吃到八分饱即止。以植物性食物为主，减少红肉摄入，多食豆类、蔬果、全谷物。',
    icon: '🥗',
    practices: ['每餐七至八分饱', '植物性食物占2/3', '豆类每天必吃', '减少加工食品'],
  },
  {
    number: '04',
    title: '充足睡眠',
    subtitle: '子午觉',
    desc: '每晚7-8小时优质睡眠是长寿的基础。中医提倡"子午觉"——子时(23-1点)深睡，午时(11-13点)小憩。',
    icon: '🌙',
    practices: ['23点前入睡', '午睡20-30分钟', '睡前1小时远离手机', '保持卧室凉爽安静'],
  },
  {
    number: '05',
    title: '社交连接',
    subtitle: '不孤独',
    desc: '社交活跃的老人认知衰退速度慢70%，死亡风险降低50%。良好的人际关系是百岁老人最显著的共同特征。',
    icon: '🤝',
    practices: ['定期与亲友聚会', '参加社区活动', '志愿服务', '养宠物陪伴'],
  },
  {
    number: '06',
    title: '生活目标',
    subtitle: 'Ikigai',
    desc: '冲绳人称之为"Ikigai"——每天醒来的理由。拥有明确生活目标的老人，中风风险降低44%，死亡率降低15%。',
    icon: '🎯',
    practices: ['培养终身爱好', '传承经验给后辈', '设立小目标持续实现', '保持对生活的热情'],
  },
];

const healthChecklist = [
  {
    category: '定期体检',
    items: [
      { name: '血压监测', freq: '每日', important: true },
      { name: '血糖检测', freq: '每3月', important: true },
      { name: '血脂检查', freq: '每半年', important: false },
      { name: '心电图', freq: '每年', important: false },
      { name: '颈动脉超声', freq: '每年', important: true },
      { name: '肿瘤标志物', freq: '每年', important: false },
    ],
  },
  {
    category: '日常自检',
    items: [
      { name: '体重管理', freq: '每周', important: true },
      { name: '晨起脉率', freq: '每日', important: false },
      { name: '步数统计', freq: '每日', important: false },
      { name: '睡眠质量', freq: '每日', important: true },
      { name: '情绪状态', freq: '每日', important: false },
      { name: '饮食记录', freq: '每日', important: false },
    ],
  },
];

export function CenturySection() {
  return (
    <section
      id="century"
      className="scroll-mt-20 bg-gradient-to-b from-emerald-50 to-white py-20 dark:from-emerald-950 dark:to-emerald-950/30 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
            <span>✨</span> 百年之道
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            轻松阔过百年，从今天开始
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            全球百岁老人的长寿秘诀并非遥不可及，而是日复一日的健康习惯积累。
            掌握正确方法，百岁健康人生可期可待。
          </p>
        </div>

        {/* Hero image with quote */}
        <div className="mb-16 relative overflow-hidden rounded-2xl">
          <Image
            src={taichiImg}
            alt="太极养生"
            width={1200}
            height={600}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-900/50 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 sm:p-12 lg:p-16">
            <div className="max-w-lg">
              <blockquote className="mb-4 text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                &ldquo;上医治未病，中医治欲病，下医治已病。&rdquo;
              </blockquote>
              <cite className="text-sm text-emerald-200 not-italic">
                ——《黄帝内经》
              </cite>
              <p className="mt-4 text-sm text-emerald-100/80">
                预防胜于治疗。掌握科学的健康管理方法，让百岁人生不再遥不可及。
              </p>
            </div>
          </div>
        </div>

        {/* Blue Zones */}
        <div className="mb-16">
          <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-white">
            全球蓝区启示
          </h3>
          <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
            全球四个百岁老人密度最高的"蓝区"，揭示长寿的共通密码
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blueZones.map((zone) => (
              <Card
                key={zone.name}
                className="overflow-hidden border-0 shadow-md dark:shadow-emerald-900/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{zone.icon}</span>
                    <div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white">
                        {zone.name}
                      </CardTitle>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {zone.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-3 space-y-1.5">
                    {zone.traits.map((trait) => (
                      <li
                        key={trait}
                        className="flex items-start gap-1.5 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-1 shrink-0 text-emerald-500">●</span>
                        {trait}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg bg-emerald-50 p-2 text-xs font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                    {zone.longevity}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Six century principles */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            百年健康六大法则
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {centuryPrinciples.map((p) => (
              <Card
                key={p.number}
                className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-xl dark:shadow-emerald-900/20"
              >
                <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex shrink-0 items-center justify-center">
                      <span className="text-3xl">{p.icon}</span>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        法则 {p.number}
                      </div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white">
                        {p.title}
                      </CardTitle>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {p.desc}
                  </p>
                  <div className="space-y-2">
                    {p.practices.map((practice) => (
                      <div
                        key={practice}
                        className="flex items-center gap-2 rounded-lg bg-emerald-50/80 px-3 py-2 text-sm text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
                      >
                        <span className="text-emerald-500">✓</span>
                        {practice}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health checklist */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            健康管理清单
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {healthChecklist.map((cat) => (
              <Card
                key={cat.category}
                className="border-0 shadow-md dark:shadow-emerald-900/20"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    {cat.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-emerald-800"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              item.important
                                ? 'bg-red-500'
                                : 'bg-emerald-500'
                            }`}
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {item.name}
                          </span>
                          {item.important && (
                            <span className="rounded bg-red-50 px-1.5 py-0.5 text-xs font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400">
                              重要
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.freq}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
