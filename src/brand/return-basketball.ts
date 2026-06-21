import type { Brand } from "./types";

/**
 * RETURN Basketball — the flagship public brand.
 *
 * Language policy: each section's TITLE block (eyebrow + headline), the
 * wordmark, the tagline, the hero headline, and tight domain labels stay in
 * English as the brand's identity anchors. All supporting copy is Japanese.
 *
 * Legal positioning is encoded in the copy: support / education / network
 * language only. RETURN itself never claims to treat, cure, or guarantee.
 * Medical care is always referenced through partner providers (提携医療機関).
 */
export const returnBasketball: Brand = {
  id: "return-basketball",
  mark: "RETURN",
  submark: "Basketball",
  parentOrg: "一般社団法人 再生医療ネットワーク",
  tagline: { line1: "More Than Recovery.", line2: "Return To Play." },

  theme: {
    colors: {
      bg: "5 5 5", // #050505
      fg: "255 255 255", // #FFFFFF
      muted: "163 163 163", // #A3A3A3
      accent: "255 106 0", // #FF6A00
      accentHover: "230 92 0", // #E65C00
      line: "38 38 38",
      surface: "12 12 12",
    },
    fonts: {
      display: "Playfair Display",
      body: "Inter",
    },
  },

  nav: [
    { label: "プログラム", href: "#method" },
    { label: "アスリート", href: "#stories" },
    { label: "リカバリー", href: "#network" },
    { label: "ネットワーク", href: "#partners" },
    { label: "パートナー", href: "#partners" },
  ],
  navCta: "アセスメントを予約",

  hero: {
    images: {
      // Single cinematic asset; the spotlight charges it from dimmed to vivid,
      // so moving the pointer lifts the athlete out of shadow.
      base: "/hero.jpg",
      reveal: "/hero.jpg",
      baseAlt: "発光する膝と骨格のオーバーレイをまとい、ドリブルするバスケットボール選手",
      revealAlt: "光に照らし出され、回復のエネルギーに満ちた同じ選手",
    },
    headline: { line1: "Recovery reveals", line2: "your next game" },
    subheadline:
      "安全で確かな競技復帰を目指すバスケットボールアスリートのための、エリートリカバリープログラム。",
    primaryCta: "リカバリーを始める",
    secondaryCta: "パートナーになる",
  },

  method: {
    eyebrow: "The Return Method",
    headline: "A structured path back to competition.",
    steps: [
      {
        index: "01",
        title: "Assessment",
        lines: ["動作分析", "超音波評価", "受傷歴の確認"],
      },
      {
        index: "02",
        title: "PRP Recovery",
        lines: ["エビデンスに基づくPRPプロトコル", "個別最適化されたプランニング"],
      },
      {
        index: "03",
        title: "Return To Play",
        lines: ["パフォーマンステスト", "再コンディショニング", "競技復帰の判定"],
      },
    ],
  },

  support: {
    eyebrow: "Who We Support",
    headline: "Built for every level of the game.",
    cards: [
      { title: "プロ選手", note: "トップリーグの競技者" },
      { title: "B.LEAGUE", note: "国内プロリーグ" },
      { title: "3x3アスリート", note: "ハーフコートの専門家" },
      { title: "学生アスリート", note: "大学・高校" },
      { title: "海外挑戦プロスペクト", note: "国境を越えるキャリア" },
      { title: "ストリートバスケアスリート", note: "アウトドア＆カルチャー" },
    ],
  },

  network: {
    eyebrow: "Recovery Is A Team Sport",
    headline: "No single step returns an athlete to play.",
    note: "PRPは長い道のりの中の、連携された一段階にすぎません。近道でも、特効でもない。すべての復帰は、専門家が順を追って積み上げた結果です。",
    nodes: [
      { label: "アスリート", role: "プランの中心" },
      { label: "スポーツドクター", role: "診断と医学的管理" },
      { label: "PRPプロトコル", role: "エビデンスに基づく回復サポート" },
      { label: "理学療法士", role: "動作の再建" },
      { label: "ストレングスコーチ", role: "再コンディショニングと負荷管理" },
      { label: "競技復帰", role: "復帰可否の判定" },
    ],
  },

  partners: {
    eyebrow: "Partner Network",
    headline: "An ecosystem, not a clinic.",
    categories: [
      { name: "スポーツ医療", slots: 4 },
      { name: "理学療法", slots: 4 },
      { name: "ストレングス＆コンディショニング", slots: 4 },
      { name: "バスケットボールアカデミー", slots: 4 },
      { name: "3x3チーム", slots: 4 },
      { name: "大学プログラム", slots: 4 },
    ],
  },

  stories: {
    eyebrow: "Athlete Stories",
    headline: "Setbacks, and the return that followed.",
    disclaimer:
      "これらは説明用のプレースホルダーです。回復の経過や結果はアスリートごとに異なり、提携医療機関が判断します。",
    items: [
      {
        condition: "膝蓋腱症",
        before: "着地のたびに痛みが走った。",
        after: "フルの練習量へ復帰。",
        tag: "膝",
      },
      {
        condition: "足関節捻挫",
        before: "横の動きへの自信を失っていた。",
        after: "ためらいなく切り返す。",
        tag: "足首",
      },
      {
        condition: "アキレス腱損傷",
        before: "長い道のりだった。",
        after: "両足で爆発的に跳ぶ。",
        tag: "アキレス腱",
      },
    ],
  },

  about: {
    eyebrow: "About",
    headline: "Built Around Recovery.",
    body: [
      "RETURN Basketballは、PRPに関する教育、品質基準、そしてアスリートの回復サポートに取り組む専門家ネットワークに支えられています。",
      "目的は、構造化されたリカバリーの道筋を通じてアスリートの競技復帰を支えること。各ステージのケアは、それを担う専門家と連携して進めます。",
    ],
  },

  footer: {
    columns: [
      {
        title: "ナビゲーション",
        items: [
          { label: "プログラム", href: "#method" },
          { label: "アスリート", href: "#stories" },
          { label: "ネットワーク", href: "#network" },
          { label: "パートナー", href: "#partners" },
        ],
      },
      {
        title: "コンタクト",
        items: [
          { label: "お問い合わせ", href: "#contact" },
          { label: "Instagram", href: "#instagram" },
          { label: "パートナー申込", href: "#partners" },
        ],
      },
      {
        title: "法務",
        items: [
          { label: "プライバシーポリシー", href: "#privacy" },
          { label: "利用規約", href: "#terms" },
        ],
      },
    ],
    legal:
      "RETURN Basketballは、リカバリー教育とパートナーネットワークです。医療サービスは提供しません。すべての医療行為は、独立した提携医療機関が行います。",
  },
};
