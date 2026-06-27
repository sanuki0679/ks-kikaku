export const siteConfig = {
  name: "KS企画",
  tagline: "現場の困りごとを、わかりやすいWebアプリで解決します",
  email: "contact@example.com",
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

export const works = [
  {
    title: "和さぶろ 予約管理アプリ",
    category: "飲食店",
    summary: "電話・Web・LINEの予約を一元管理し、座席割当やキャンセル対応をスムーズに。",
    features: [
      "電話予約・Web予約・LINE予約の一元管理",
      "座席割当、予約一覧、キャンセル管理",
      "予約ミスや紙管理の削減",
    ],
    purpose: "飲食店の予約業務を整理し、スタッフの負担を減らす",
  },
  {
    title: "シフト管理アプリ",
    category: "飲食店・介護施設",
    summary: "スタッフの希望を集めて、店長が週単位でシフト表を作成できる仕組み。",
    features: [
      "スタッフが希望シフト・希望休を登録",
      "店長が週単位でシフト表を作成",
      "QRコード付きログインカードの発行",
    ],
    purpose: "紙やLINEでのシフト調整を、見やすいWeb画面に集約",
  },
  {
    title: "デイサービス 送迎記録アプリ",
    category: "介護施設",
    summary: "送迎の出発・到着をボタンで記録し、紙の運行記録をデジタル化。",
    features: [
      "出発・到着をボタンで記録",
      "GPS打刻、車両運行記録",
      "アルコールチェックの記録",
    ],
    purpose: "紙の運行記録をデジタル化し、記録漏れを防ぐ",
  },
  {
    title: "LINE連携・AI活用",
    category: "飲食店・介護施設",
    summary: "LINE公式アカウントを活用した予約受付や案内、将来のAI活用も視野に。",
    features: [
      "LINE公式アカウントの構築・運用",
      "LINEでの予約受付",
      "QRコードによる案内",
      "AI電話受付・OCRへの対応（予定）",
    ],
    purpose: "お客様とのやりとりを自動化し、スタッフの手間を減らす",
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
