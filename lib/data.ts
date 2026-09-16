export const siteConfig = {
  name: "KS企画",
  tagline: "現場の困りごとを、わかりやすいWebアプリで解決します",
  email: "sanuki0679@gmail.com",
  description:
    "飲食店・介護施設向けの業務改善Webアプリを開発しています。予約管理、シフト管理、送迎記録など、現場の紙や電話に頼っていた作業をデジタル化します。",
};

export const navItems = [
  { label: "トップ", href: "#top" },
  { label: "できること", href: "#services" },
  { label: "制作実績", href: "#works" },
  { label: "開発者紹介", href: "#about" },
  { label: "相談の流れ", href: "#process" },
  { label: "問い合わせ", href: "#contact" },
];

export const services = [
  {
    title: "予約・受付のデジタル化",
    description:
      "電話予約、Web予約、LINE予約をひとつにまとめ、予約ミスやダブルブッキングを減らします。",
    icon: "calendar",
  },
  {
    title: "シフト・勤怠の管理",
    description:
      "スタッフの希望シフトを集めて、店長が週単位でシフト表を作成。紙のやりとりがなくなります。",
    icon: "shift",
  },
  {
    title: "介護・送迎の記録",
    description:
      "出発・到着の記録、運行記録、アルコールチェックなど、現場で必要な記録をスマホで残せます。",
    icon: "transport",
  },
  {
    title: "LINE連携・自動化",
    description:
      "LINE公式アカウントでの予約受付や案内、QRコードの活用など、お客様とのやりとりを楽にします。",
    icon: "line",
  },
];

export type Work = {
  id: "reservation" | "shift" | "transport";
  title: string;
  category: string;
  summary: string;
  challenge: string;
  outcome: string;
  features: string[];
  status?: "運用中" | "開発中" | "試作";
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  video?: {
    src: string;
    type: string;
    poster?: string;
    label: string;
    caption: string;
  };
};

export const works: Work[] = [
  {
    id: "reservation",
    title: "和さぶろ 予約管理アプリ",
    category: "飲食店",
    summary: "いろいろな窓口から入る予約を、ひとつの画面に。",
    challenge: "電話・Web・LINEに分かれた予約をまとめて把握し、座席の割当や変更に対応したい。",
    outcome: "予約一覧から受付内容を確認し、座席の割当やキャンセルを管理できます。",
    features: [
      "電話・Web・LINE予約の一元管理",
      "予約一覧と座席の割当",
      "キャンセルの管理",
    ],
    video: {
      src: "/works/reservation-demo.webm",
      type: "video/webm",
      poster: "/works/reservation-demo-poster.webp",
      label: "予約の登録から空席の確認、座席の割当までを操作するデモ動画（音声なし）",
      caption: "操作デモ動画・約1分（架空のサンプルデータ／音声なし）",
    },
  },
  {
    id: "shift",
    title: "シフト管理アプリ",
    category: "飲食店・介護施設",
    summary: "希望の提出から週ごとのシフト作成まで、ひとつにつなぐ。",
    challenge: "紙やLINEで届く希望シフト・希望休を集めて、シフト表にまとめる手間を減らしたい。",
    outcome: "スタッフがWebから希望を登録し、管理者が週単位のシフト表を作成できます。",
    features: [
      "スタッフが希望シフト・希望休を登録",
      "店長が週単位でシフト表を作成",
      "QRコード付きログインカードの発行",
    ],
  },
  {
    id: "transport",
    title: "デイサービス 送迎記録アプリ",
    category: "介護施設",
    summary: "送迎の出発・到着を、その場でスマホに記録。",
    challenge: "紙の運行記録をデジタル化し、送迎時の記録漏れを防ぎたい。",
    outcome: "出発・到着をボタンで記録。車両の運行やアルコールチェックの記録もWebで管理できます。",
    features: [
      "出発・到着をボタンで記録",
      "GPS打刻、車両運行記録",
      "アルコールチェックの記録",
    ],
  },
];

export const aboutPoints = [
  "飲食店・介護施設の現場課題を、Webアプリで解決することを専門としています",
  "難しい専門用語は使わず、現場の方がそのまま使える画面を大切にしています",
  "小さな改善から始められ、必要に応じて機能を追加していく開発スタイルです",
  "ココナラでのご依頼、直接のご相談どちらにも対応しています",
];

export const processSteps = [
  {
    step: 1,
    title: "無料相談",
    description: "現在の困りごとや、理想の運用イメージをお聞きします。",
  },
  {
    step: 2,
    title: "ヒアリング・ご提案",
    description: "現場の流れを確認し、必要な機能と費用の目安をご提案します。",
  },
  {
    step: 3,
    title: "開発・確認",
    description: "画面の確認をしながら開発を進め、使いやすさを一緒に調整します。",
  },
  {
    step: 4,
    title: "導入・サポート",
    description: "導入後の使い方サポートや、追加機能のご相談にも対応します。",
  },
];
