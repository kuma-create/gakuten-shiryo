"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  MessageCircle,
  Lightbulb,
  Clock,
  AlertCircle,
  Building,
  Briefcase,
  UserCheck,
  FileText,
  Award,
  Brain,
  Heart,
  Zap,
  Trophy,
  Rocket,
  DollarSign,
  X,
} from "lucide-react"
import { ChevronLeft, ChevronRight, Brush, Activity, Layers,Paintbrush, Mail, UserCircle  } from "lucide-react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Chart.js 要素登録（本番ビルドで ArcElement が抜け落ちるのを防ぐ）
ChartJS.register(ArcElement, Tooltip, Legend);


const pages = [
  { id: 1, title: "表紙", component: CoverPage },
  { id: 2, title: "目次", component: TableOfContentsPage },
  { id: 3, title: "会社概要", component: OverviewPage },
  { id: 4, title: "メンバー紹介", component: MembersPage },
  { id: 5, title: "ミッション・ビジョン", component: MissionVisionPage },
  { id: 6, title: "創業ストーリー①", component: FoundingStory1Page },
  { id: 6, title: "新卒採用の必要性", component: FoundingStory5Page },
  { id: 7, title: "登録学生データ", component: DemographicsPage },
  { id: 8, title: "学生転職の強み", component: StrengthsPage },
  { id: 9, title: "導入事例", component: CaseStudiesPage },
  { id: 10, title: "料金プラン", component: PricingPage },
]

function CoverPage() {
  return (
    <div className="h-full w-full bg-white flex items-start justify-center pt-20 relative overflow-hidden">
      {/* コーナーのシンプルなアクセント */}
      <div className="absolute -top-32 -left-48 w-80 h-80 rotate-45 bg-red-700/70 rounded-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-64 h-64 rotate-45 bg-red-900 rounded-3xl pointer-events-none" />
      <div className="absolute -top-12 -left-4  w-52 h-52 rotate-45 bg-rose-400/40 rounded-3xl pointer-events-none" />

      <div className="absolute -bottom-32 -right-48 w-80 h-80 rotate-45 bg-red-700/20 rounded-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rotate-45 bg-red-900/90 rounded-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-4  w-52 h-52 rotate-45 bg-rose-500/60 rounded-3xl pointer-events-none" />

      {/* メインコンテンツ */}
      <div className="flex flex-col items-center text-center z-10 px-8">
        {/* 会社ロゴ */}
        <div className="mb-24">
          <Image
            src="/company_logo.png"
            alt="Make Culture ロゴ"
            width={220}
            height={80}
            priority
          />
        </div>

        {/* タイトル */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
          株式会社Make Culture
        </h1>

        {/* サービス名 */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-600">
          学生転職のご案内<span className="text-base font-normal ml-2"></span>
        </h2>

        {/* サービスロゴ */}
        <Image
          src="/service_logo.png"
          alt="学生転職ロゴ"
          width={420}
          height={500}
          priority
        />
      </div>
    </div>
  )
}

function TableOfContentsPage({ setCurrentPage }: { setCurrentPage?: (page: number) => void }) {
  const tableOfContents = [
    { page: 3, title: "会社概要", description: "基本情報に関して", icon: Building },
    { page: 4, title: "メンバー紹介", description: "創業メンバー・役員紹介", icon: Users },
    { page: 5, title: "事業背景", description: "現在の新卒採用事情", icon: Star },
    { page: 7,  title: "登録学生データ", description: "学歴・実務経験などの構成", icon: Users },
    { page: 8,  title: "強み",        description: "他サービスとの違い", icon: Target },
    { page: 9,  title: "導入事例",    description: "採用成功事例", icon: BookOpen },
    { page: 10, title: "料金プラン",   description: "成果報酬モデルなど", icon: DollarSign },
  ]

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-rose-50 to-red-100 p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">アジェンダ</h2>
          <p className="text-xl text-gray-600">学生転職を知ってもらうために</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {tableOfContents.map((item, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => setCurrentPage && setCurrentPage(item.page)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-gray-100 text-gray-700">第{item.page - 2}章</Badge>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}



export default function Page() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const CurrentPageComponent = pages[currentPage].component

  return (
    <div className="w-full h-screen bg-white relative">
      {/* ヘッダー */}
      <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold">株式会社Make Culture　学生転職</h1>
          <Badge variant="secondary" className="bg-gray-600 text-white">
            {currentPage + 1} / {pages.length}
          </Badge>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="bg-gray-700 border border-gray-600 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 rounded text-sm flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              前へ
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className="bg-gray-700 border border-gray-600 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 rounded text-sm flex items-center"
            >
              次へ
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 overflow-auto" style={{ height: "calc(100vh - 120px)" }}>
        <CurrentPageComponent setCurrentPage={setCurrentPage} />
      </div>

      {/* フッター */}
      <div className="bg-gray-100 px-6 py-2 flex items-center justify-between">
        <div className="text-sm text-gray-600">{pages[currentPage].title}</div>
        <div className="flex space-x-1">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}



// ─────────── 学生転職ホワイトペーパー各ページ ───────────

function OverviewPage() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* 右側にフルハイトで会社イメージ */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2">
        <Image
          src="/company_picture.jpg"
          alt="Make Culture オフィス周辺"
          fill
          className="object-cover"
          priority
        />
        {/* オーバーレイで暗くして文字を読みやすく */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 内容エリア */}
      <div className="relative h-full md:w-1/2 flex items-center bg-gradient-to-br from-rose-50 to-red-100 px-12 py-20 overflow-y-auto">
        <div className="max-w-xl space-y-8 text-gray-800">
          <h2 className="text-5xl font-extrabold">会社概要</h2>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>
              <span className="font-semibold">社名：</span>
              株式会社Make Culture
            </li>
            <li>
              <span className="font-semibold">所在地：</span>
              東京都品川区西五反田 TOCビル
            </li>
            <li>
              <span className="font-semibold">資本金：</span>
              500万円
            </li>
            <li>
              <span className="font-semibold">代表取締役：</span>
              熊崎 友
            </li>
            <li>
              <span className="font-semibold">設立：</span>
              2023年5月
            </li>
            <li>
              <span className="font-semibold">事業内容：</span>
              人材紹介プラットフォーム
              <span className="font-semibold">『学生転職』</span> ほか
            </li>
          </ul>

          <div className="mt-10">
            <button
              onClick={() => window.open('https://www.makeculture.jp/', '_blank')}
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition-colors"
            >
              公式サイトを見る
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MissionVisionPage() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* 背景ヒーローイメージ */}
      <div className="absolute inset-0">
        <Image
          src="/company_picture.jpg"
          alt="都会に映えるMake Cultureの象徴"
          fill
          className="object-cover object-center opacity-30 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-red-500/30" />
      </div>

      {/* コンテンツカード */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-12 md:p-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
            事業背景・想い
          </h2>

          <p className="text-xl font-semibold text-center text-gray-700 mb-10">
            “文化の破壊と創造” ─ Make Culture の原点
          </p>

          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <p>
              日本には伝統と呼ばれる素晴らしい文化が多数存在します。
            </p>
            <p>
              その一方で、時代とともにアップデートするべき文化が今もなお
              <span className="font-bold">“あたりまえ”</span> として残り続けています。
            </p>
            <p>
              ガラケーからスマートフォンへアップデートされ、新しい文化としての
              <span className="font-bold">“あたりまえ”</span> となったように、
              本来時代が変われば <span className="font-bold">“あたりまえ”</span> も変化していくものです。
            </p>
            <p>
              我々は古くから残るアップデートするべき文化を一度破壊し、
              時代に合わせて創造し続けます。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ──────────── メンバー紹介ページ ──────────── */
function MembersPage() {
  const members = [
    {
      name: "熊崎 友",
      role: "代表取締役",
      img: "/20240807_MakeCulture様_0023.JPG",          // ← 実写真を /public に配置
      bio: [
        "コンサルタントとして HR, 財務, 組織改善、事業改善領域を中心にクライアント課題を解決。",
        "大手飲食業から地方のニッチな業界まで幅広い企業の本質課題を発見し、解決策を講じる。",
        "現在は HR 領域の改革に向けプロダクトを作成中。",
      ],
    },
    {
      name: "坂入 健仁",
      role: "取締役",
      img: "/20240807_MakeCulture様_0025.JPG",
      bio: [
        "ネオキャリアにて看護業界向け採用コンサル、人材紹介を経験。",
        "その後ブランディングエンジニアに転職し大手 SIer〜ベンチャーまで開発支援に従事。",
        "現在は採用課題を抱える企業の RPO や採用コンサル〜紹介事業まで採用業務全体を支援。",
      ],
    },
    {
      name: "上田 光心",
      role: "取締役",
      img: "/20240807_MakeCulture様_0017.JPG",
      bio: [
        "慶應義塾大学経済学部在学中。学生視点からクライアントの開発支援や採用支援に従事。",
        "企業へ学生視点のキャリア／社会課題を提言しつつ、学生側のキャリア支援・教育・コミュニティ創生などに携わる。",
      ],
    },
  ]

  return (
    <div className="h-full overflow-y-auto bg-white p-12">
      <div className="max-w-6xl mx-auto">
        {/* 見出し */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 underline decoration-4 underline-offset-8">
          弊社メンバー
        </h2>

        {/* メンバーグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {members.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* 円形写真 */}
              <div className="w-72 h-72 mb-8 relative">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover rounded-full border-4 border-gray-200"
                />
              </div>

              {/* 役職 & 名前 */}
              <p className="text-lg font-semibold text-gray-600 mb-2">{m.role}</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">{m.name}</h3>

              {/* バイオ */}
              <div className="space-y-2 text-sm text-gray-700 leading-relaxed max-w-xs">
                {m.bio.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceOutlinePage() {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">サービス概要 ―『学生転職』</h2>
        <div className="grid grid-cols-2 gap-8 text-lg">
          <div className="space-y-4">
            <p>
              『学生転職』は企業が学生に直接スカウトを送る
              <span className="font-bold text-blue-600">逆オファー型就活サイト</span> です。
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>求人掲載・スカウト送信・応募管理をワンストップで提供</li>
              <li>職務経歴書提出必須で、成果を出した学生のみ登録</li>
              <li>新卒一律ではなく能力を反映した年俸オファーが可能</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">閲覧できる学生情報</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>学歴・専攻・卒業年</li>
              <li>インターン・起業などの実務経歴</li>
              <li>志望業界・職種</li>
              <li>スキルセット・ポートフォリオ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function FoundingStory1Page() {
  return (
    <div className="h-full flex flex-col bg-white p-12 overflow-y-auto">
    {/* 見出し */}
    <h2 className="text-3xl font-extrabold underline underline-offset-8 mb-10">
      企業に必要な人材
    </h2>

    {/* 経営幹部層バー */}
    <div className="bg-gray-200 text-center py-3 mb-12">
      <span className="text-xl font-bold text-red-600">経営幹部層</span>
    </div>

    {/* ロール一覧 */}
    <div className="flex flex-wrap items-start justify-center space-x-8">
      {/* コミュニケーター */}
      <div className="w-60 flex-shrink-0 space-y-4 text-center">
        <div className="bg-gray-100 text-lg font-bold py-2">その他</div>
        <div className="flex justify-center">
          <Users className="w-24 h-24 stroke-[1.3]" />
        </div>
        <p className="text-lg font-bold">コミュニケーター</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          社内の下から上まで全体像を見て<br />
          企業のために動ける存在
        </p>
      </div>

      {/* → */}
      <ArrowRight className="w-10 h-10 text-gray-400 mt-20" />

      {/* アーティスト */}
      <div className="w-60 flex-shrink-0 space-y-4 text-center">
        <div className="bg-gray-100 text-lg font-bold py-2">0→1</div>
        <div className="flex justify-center">
          <Paintbrush className="w-24 h-24 stroke-[1.3]" />
        </div>
        <p className="text-lg font-bold">アーティスト</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          企業文化や企業の叶えたい将来像をもとに<br />
          アイディアを形にする
        </p>
      </div>

      {/* → */}
      <ArrowRight className="w-10 h-10 text-gray-400 mt-20" />

      {/* コンサルタント */}
      <div className="w-60 flex-shrink-0 space-y-4 text-center">
        <div className="bg-gray-100 text-lg font-bold py-2">1→10</div>
        <div className="flex justify-center">
          <MessageCircle className="w-24 h-24 stroke-[1.3]" />
        </div>
        <p className="text-lg font-bold">コンサルタント</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          アーティストが作った歪な形を修正し<br />
          パッケージ化する
        </p>
      </div>

      {/* → */}
      <ArrowRight className="w-10 h-10 text-gray-400 mt-20" />

      {/* ソルジャー */}
      <div className="w-60 flex-shrink-0 space-y-4 text-center">
        <div className="bg-gray-100 text-lg font-bold py-2">10→100</div>
        <div className="flex justify-center">
          <Activity className="w-24 h-24 stroke-[1.3]" />
        </div>
        <p className="text-lg font-bold">ソルジャー</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          コンサルタントが整形したパッケージを<br />
          より大きくグロースする
        </p>
      </div>
    </div>

    {/* 課題バナー */}
    <div className="mt-16 flex justify-center">
      <div className="relative">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-sm font-bold border border-gray-400">
          課題
        </span>
        <div className="bg-gray-50 border border-gray-400 px-8 py-6">
          <p className="text-2xl font-bold text-red-600 text-center leading-relaxed">
            企業において『若手経営幹部』がいない
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}


/* ──────────── 切り替え──────────── */
function FoundingStory5Page() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* 右側：フルハイト画像 */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <Image
          src="/32542797_l.jpg"          // ← /public に配置した実画像
          alt="経営幹部候補採用イメージ"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 左側：テキストエリア */}
      <div className="relative h-full md:w-1/2 flex flex-col justify-center bg-white px-12 py-20 space-y-10">
        {/* 小見出し */}
        <h4 className="text-lg font-bold underline underline-offset-4 decoration-2">
          新卒の可能性
        </h4>

        {/* サブタイトル */}
        <h2 className="text-3xl font-extrabold">だからこそ、、、</h2>

        {/* メインメッセージ */}
        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          経営幹部生を
          <br />
          <span className="text-red-600">新卒</span>で採用したい
        </h1>
      </div>
    </div>
  )
}


function DemographicsPage() {
  const [intro, setIntro] = useState(true);
  return (
    <div className="h-full overflow-y-auto bg-white">

      <section className="relative h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-rose-300 to-red-500 px-6 md:px-20">
        {/* ───── 動く背景デコ ───── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-ping-slow" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-90 animate-ping-slow animation-delay-2000" />
        </div>

        {/* ───── Intro Layer ───── */}
        {intro && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
              学生転職で実現する
            </h3>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              次世代のハイキャリア採用
            </h1>

            {/* サービスロゴ */}
            <Image
              src="/service_logo.png"
              alt="学生転職ロゴ"
              width={260}
              height={100}
              priority
            />

            {/* CTA */}
            <button
              onClick={() => setIntro(false)}
              className="mt-6 px-8 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-rose-50 transition transform hover:-translate-y-1"
            >
              次の時代を試す
            </button>
          </div>
        )}

        {/* ───── Main Content (copy + image) ───── */}
        <div
          className={`relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl transition-opacity duration-700 ${
            intro ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* コピーエリア */}
          <div className="flex-1 space-y-6 text-white text-center md:text-left">
            {[
              "学生転職なら",
              "5年後、10年後の",
              "企業を任せられる",
              "幹部候補生を採用できる",
            ].map((line, idx) => (
              <h3
                key={line}
                className="text-4xl md:text-5xl font-extrabold tracking-tight animate-slide-up"
                style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
              >
                {line}
              </h3>
            ))}
          </div>

          {/* 画像エリア */}
          <div className="flex-1">
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <Image
                src="/handshake.jpg"
                alt="幹部候補採用イメージ"
                width={700}
                height={500}
                className="object-cover w-full h-auto rounded-2xl shadow-xl"
                priority
              />
              {/* 赤のオーバーレイ */}
              <div className="absolute inset-0 bg-red-700/40 rounded-2xl mix-blend-multiply" />
            </div>
          </div>
        </div>

        {/* ───── カスタムアニメーション ───── */}
        <style jsx>{`
          @keyframes ping-slow {
            0%   { transform: scale(1);   opacity: 0.6; }
            50%  { transform: scale(1.1); opacity: 0.3; }
            100% { transform: scale(1);   opacity: 0.6; }
          }
          .animate-ping-slow {
            animation: ping-slow 8s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }

          @keyframes slide-up {
            0%   { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0);    opacity: 1; }
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.98); }
            to   { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </section>


      {/* --- Section 4 : デモ画面 ------------------------------------------- */}
      <section
        id="demo"
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-gray-50"
      >
        <div className="w-full max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
            デモ画面
          </h3>
          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg text-gray-700">
              学生転職の実際の画面は別タブでご覧いただけます。
            </p>
            <button
              onClick={() => window.open('https://all-gakuseitenshoku.vercel.app/', '_blank')}
              className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transition-colors"
            >
              デモサイトを別タブで開く
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* --- Section 5 : 学生層チャート ---------------------------------- */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-white">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
          登録学生の構成
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
          {/* 学歴 */}
          <div className="flex flex-col items-center">
            <Pie
              data={{
                labels: ["東大・京大", "早慶上智", "MARCH", "国公立", "その他"],
                datasets: [
                  {
                    data: [17.6, 26.8, 28.5, 13.8, 13.4],
                    backgroundColor: ["#67e8f9", "#38bdf8", "#0ea5e9", "#475569", "#7e22ce"],
                    borderWidth: 0,
                  },
                ],
              }}
              options={{ plugins: { legend: { position: "right" } } }}
            />
            <p className="mt-4 text-xl font-bold">学歴</p>
          </div>

          {/* インターン経験 */}
          <div className="flex flex-col items-center">
            <Pie
              data={{
                labels: ["営業", "エンジニア", "マーケティング", "コンサル", "事務", "その他"],
                datasets: [
                  {
                    data: [41.6, 18.4, 20.0, 11.2, 5.6, 3.2],
                    backgroundColor: ["#67e8f9", "#38bdf8", "#0ea5e9", "#475569", "#7e22ce", "#a855f7"],
                    borderWidth: 0,
                  },
                ],
              }}
              options={{ plugins: { legend: { position: "right" } } }}
            />
            <p className="mt-4 text-xl font-bold">インターン経験</p>
          </div>

          {/* 経験層 */}
          <div className="flex flex-col items-center">
            <Pie
              data={{
                labels: ["長期インターン", "アルバイト", "学生起業"],
                datasets: [
                  {
                    data: [66.7, 22.5, 10.8],
                    backgroundColor: ["#0ea5e9", "#38bdf8", "#67e8f9"],
                    borderWidth: 0,
                  },
                ],
              }}
              options={{ plugins: { legend: { position: "right" } } }}
            />
            <p className="mt-4 text-xl font-bold">経験層</p>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-600 text-sm">
          ※ 2025年6月時点での集計データ
        </p>
      </section>

    </div>
  )
}

/* ──────────── 学生転職の強みページ ──────────── */
function StrengthsPage() {
  const strengths = [
    {
      icon: Trophy,
      title: "厳選エリート学生",
      desc: "厳格な審査を通過した学生だけが登録。成果主義で未来を切り拓くハイポテンシャル人材。",
    },
    {
      icon: Rocket,
      title: "ダイレクトリーチ",
      desc: "高い成長意欲を持つ幹部候補へ即アプローチ。スピード採用とカルチャーフィットを両立。",
    },
    {
      icon: Briefcase,
      title: "年俸オファーで差別化",
      desc: "実力に見合った年俸提示で競合をリード。学生側のモチベーションも最大化。",
    },
  ];

  const details = [
    {
      title: "厳選エリート学生",
      image: "/strength1.jpg", // ← 後で実画像を配置
      bullets: [
        "成績上位10%以内の学生のみ登録",
        "実務成果物の提出でスキル検証済み",
        "全国200以上の大学から集う多様なバックグラウンド",
      ],
    },
    {
      title: "ダイレクトリーチ",
      image: "/strength2.jpg",
      bullets: [
        "スカウト送信から最短1日で面談設定",
        "高度なフィルタ & AIレコメンドでマッチ率70%超",
        "採用コストを平均40%削減",
      ],
    },
    {
      title: "年俸オファーで差別化",
      image: "/strength3.jpg",
      bullets: [
        "年俸レンジの可視化で意思決定を高速化",
        "学生の納得感とエンゲージメントを向上",
        "オファー辞退率を半減",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen px-6 py-24 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white">
      {/* ─── 動く背景ブロブ ─── */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob-slow" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob-slow animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-slow animation-delay-4000" />

      {/* ─── 見出し ─── */}
      <div className="relative z-10 text-center max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-md">
          学生転職の
          <span className="text-yellow-300 px-2">3</span>
          大強み
        </h2>
        <p className="mt-4 text-xl text-white/90">
          次世代ハイキャリア採用を実現するコアバリュー
        </p>
      </div>

      {/* ─── 強みカード ─── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 w-full max-w-6xl">
        {strengths.map(({ icon: Icon, title, desc }, idx) => (
          <div
            key={idx}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl hover:shadow-red-500/40 transition duration-300 ease-out hover:-translate-y-2"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 mb-6 group-hover:scale-110 transition-transform">
              <Icon className="w-12 h-12 text-yellow-300 drop-shadow" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* ─── CTA ─── */}
      <button
        onClick={() => window.open('https://all-gakuseitenshoku.vercel.app/', '_blank')}
        className="mt-20 relative z-10 inline-flex items-center px-10 py-4 bg-yellow-400 text-red-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 hover:-translate-y-1 transition-transform"
      >
        未来を共に創る
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>

      {/* ─── 詳細スクロール ─── */}
      <section className="relative z-10 w-full max-w-6xl mx-auto mt-32 space-y-24 px-4 md:px-0">
        {details.map((d, idx) => (
          <div
            key={idx}
            className="snap-center flex flex-col md:flex-row items-center gap-12"
          >
            {/* 画像 */}
            <div className="flex-1">
              <Image
                src={d.image}
                alt={d.title}
                width={800}
                height={600}
                className="object-cover w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* テキスト */}
            <div className="flex-1 text-white space-y-6">
              <h3 className="text-4xl font-bold">{d.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-white/90">
                {d.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* ─── カスタム Keyframes ─── */}
      <style jsx>{`
        @keyframes blob-slow {
          0%, 100% {
            transform: scale(1) translate(0, 0) rotate(0deg);
          }
          33% {
            transform: scale(1.1) translate(30px, -20px) rotate(15deg);
          }
          66% {
            transform: scale(0.9) translate(-25px, 20px) rotate(-10deg);
          }
        }
        .animate-blob-slow {
          animation: blob-slow 12s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

function CaseStudiesPage() {
  /* モーダル用の選択状態 */
  const [selectedStudy, setSelectedStudy] = useState<null | typeof caseStudies[0]>(null)

  /* 企業側の導入事例データ */
  const caseStudies = [
    {
      name: "ROBOT PAYMENT",
      tagline: "インターン経験者を即戦力マネージャーとして年収1,000万円で採用",
      image: "/robot_payment.jpg",   // ← /public に画像を配置
      challenges: [
        "事業拡大に伴い経営層まで担える若い力が欲しい",
        "新卒採用強化に伴いリーダーとなれる経験を求めている",
        "事業開発や既存のバリューアップを内部で行いたい",
      ],
      outcome: [
        "インターン経験者を即戦力マネージャーとして新卒のマネジメントに活用",
        "新規事業開発や経営側への参画ができそうな人材を急募",
      ],
    },
    {
      name: "丸井グループ",
      tagline: "新規事業推進に若い想像力を活用し母集団形成コストを50%削減",
      image: "/marui_group.jpg",
      challenges: [
        "新規事業アイデア創出のため若手タレントが不足",
        "採用ブランディングに掛かるコストの高止まり",
      ],
      outcome: [
        "学生の創造力を生かしたプロジェクトを複数始動",
        "従来の半分の採用コストで必要人材を確保",
      ],
    },
    {
      name: "TWOSTONE & Sons",
      tagline: "学生起業・インターン経験者を新規事業責任者候補として採用",
      image: "/twostone.jpg",
      challenges: [
        "0→1フェーズを推進できる事業責任者候補が不足",
        "採用スピードを落とさずカルチャーフィットも担保したい",
      ],
      outcome: [
        "学生起業経験者を主体とした採用でスピード採用を実現",
        "早期戦力化とカルチャーフィットを両立",
      ],
    },
  ]

  /* 学生側の成功事例（簡易） */
  const studentStories = [
    {
      name: "エンジニア経験者",
      highlight: "Python自己開発とインターンで実務経験を積み即戦力エンジニアへ",
      bullets: [
        "ITwitterライクのSNSアプリを個人開発",
        "Processingで障害物回避ゲームを制作",
        "ICPCプログラミングコンテスト出場",
        "チームでVRジェットコースタープロジェクトに参加",
        "PythonでCookpadデータを解析し関連料理表示機能を実装",
        "HTMLで初心者向けレースゲームWebサイトを構築",
      ],
    },
    {
      name: "営業インターン経験者",
      highlight: "人材系ベンチャーで立ち上げ期から中心メンバーとして活躍",
      bullets: [
        "新規開拓・既存顧客双方で成果を創出",
        "toC,toB両面の対応",
        "新規事業企画と体制構築",
        "インターン生のマネジメントと教育を担当",
        "総売上700万円を達成",
      ],
    },
  ]

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-indigo-50 to-purple-50 p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 企業側 ─────────────────── */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">導入事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedStudy(cs)}
                className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1"
              >
                <Image
                  src={cs.image}
                  alt={cs.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-52 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{cs.name}</h3>
                  <p className="text-sm">{cs.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 学生側 ─────────────────── */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">学生の事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentStories.map((st, idx) => (
              <Card key={idx} className="bg-white shadow-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">{st.name}</h3>
                <p className="font-semibold text-red-500">{st.highlight}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {st.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* ── モーダル ───────────────── */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-10 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="md:w-1/2">
                <Image
                  src={selectedStudy.image}
                  alt={selectedStudy.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
                <h3 className="text-3xl font-bold text-gray-800">{selectedStudy.name}</h3>
                <p className="text-lg text-gray-700">{selectedStudy.tagline}</p>

                <h4 className="text-xl font-bold mt-6">採用課題</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedStudy.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold mt-6">導入の成果</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedStudy.outcome.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PricingPage() {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-slate-100 p-12 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">料金プラン</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ---- 27卒 キャンペーンプラン ---- */}
          <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col items-center text-center border-4 border-yellow-400">
            <Badge className="mb-4 bg-yellow-400 text-gray-900 text-sm px-4 py-1 rounded-full">
              期間限定キャンペーン
            </Badge>
            <h3 className="text-2xl font-extrabold mb-2 text-red-600">27卒 無料プラン</h3>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-bold">2027年卒の学生</span>を
              <span className="font-bold text-red-600">1名まで無料</span>で採用可能！
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-8 list-disc list-inside text-left">
              <li>求人掲載 / スカウト送信 / 応募管理 全て無料</li>
              <li>期間：2025/7/1 〜 2026/6/30</li>
              <li>2名目以降は通常成果報酬が適用</li>
            </ul>
            <p className="text-xs text-gray-500">
              ※ キャンペーン適用には事前申請が必要です
            </p>
          </div>

          {/* ---- サブスクリプションプラン ---- */}
          <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">通常プラン</h3>
            <p className="text-lg text-gray-700 mb-6">
              月額
              <span className="font-bold text-blue-600"> 10万円 </span>
              （年間契約一括 <span className="font-bold text-blue-600">120万円</span>）
            </p>
            <p className="text-sm text-gray-500">
              ※ 途中解約時の返金はいたしかねます。詳細は個別ご相談ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

