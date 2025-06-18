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
  Building,
  Briefcase,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Clock,
  Lightbulb,
} from "lucide-react"

const pages = [
  { id: 1, title: "表紙", component: CoverPage },
  { id: 2, title: "目次", component: TableOfContentsPage },
  { id: 3, title: "会社概要", component: CompanyOverviewPage },
  { id: 4, title: "MVV", component: MVVPage },
  { id: 5, title: "弊社メンバー", component: MembersPage },
  { id: 6, title: "事業概要", component: BusinessOverviewPage },
  { id: 7, title: "母集団について", component: CandidatePoolPage },
  { id: 8, title: "導入事例①", component: CaseStudies1Page },
  { id: 9, title: "導入事例②", component: CaseStudies2Page },
  { id: 10, title: "エンジニア支援", component: EngineerSupportPage },
  { id: 11, title: "ご紹介の流れ", component: ProcessFlowPage },
  { id: 12, title: "料金について", component: PricingPage },
]

function CoverPage() {
  return (
    <div className="h-full w-full bg-white flex items-start justify-center pt-20 relative overflow-hidden">
      {/* コーナーのシンプルなアクセント */}
      <div className="absolute -top-32 -left-48 w-80 h-80 rotate-45 bg-blue-700/70 rounded-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-64 h-64 rotate-45 bg-blue-900 rounded-3xl pointer-events-none" />
      <div className="absolute -top-12 -left-4 w-52 h-52 rotate-45 bg-purple-400/40 rounded-3xl pointer-events-none" />

      <div className="absolute -bottom-32 -right-48 w-80 h-80 rotate-45 bg-blue-700/20 rounded-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rotate-45 bg-blue-900/90 rounded-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-4 w-52 h-52 rotate-45 bg-purple-500/60 rounded-3xl pointer-events-none" />

      {/* メインコンテンツ */}
      <div className="flex flex-col items-center text-center z-10 px-8">
        {/* 会社ロゴエリア */}
        <div className="mb-16">
          {/* 会社ロゴ画像を /public に配置 (例: /logo_makeculture.png) */}
          <Image
            src="/company_logo.png"
            alt="Make Culture Logo"
            width={256}
            height={96}
            className="mb-4 object-contain"
            priority
          />
        </div>

        {/* タイトル */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">中途紹介事業について</h1>

        {/* サブタイトル（削除済み） */}
      </div>
    </div>
  )
}

function TableOfContentsPage({ setCurrentPage }: { setCurrentPage?: (page: number) => void }) {
  const tableOfContents = [
    { page: 3, title: "会社概要", description: "基本情報・企業データ", icon: Building },
    { page: 4, title: "MVV", description: "ミッション・ビジョン・バリュー", icon: Target },
    { page: 5, title: "弊社メンバー", description: "代表・取締役紹介", icon: Users },
    { page: 6, title: "事業概要", description: "採用支援・開発支援事業", icon: Briefcase },
    { page: 7, title: "母集団について", description: "候補者データ・構成比", icon: TrendingUp },
    { page: 8, title: "導入事例", description: "成功事例・クライアント実績", icon: BookOpen },
    { page: 11, title: "ご紹介の流れ", description: "契約から成約までのプロセス", icon: CheckCircle },
    { page: 12, title: "料金について", description: "成果報酬モデル・価格体系", icon: DollarSign },
  ]

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-blue-50 to-purple-100 p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">目次</h2>
          <p className="text-xl text-gray-600">中途紹介事業のご案内</p>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-gray-100 text-gray-700">第{index + 1}章</Badge>
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

function CompanyOverviewPage() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* 右側にフルハイトで会社イメージ */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2">
        <Image
          src="/company_picture.jpg"         // ← 会社外観やオフィス写真を /public に配置
          alt="Make Culture Office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 内容エリア */}
      <div className="relative h-full md:w-1/2 flex items-center bg-gradient-to-br from-blue-50 to-purple-100 px-12 py-20 overflow-y-auto">
        <div className="max-w-xl space-y-8 text-gray-800">
          <h2 className="text-5xl font-extrabold">会社概要</h2>

          <ul className="space-y-6 text-lg leading-relaxed">
            <li className="flex flex-col">
              <span className="font-semibold text-blue-600 mb-1">会社名</span>
              <span>株式会社Make Culture</span>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-blue-600 mb-1">本社所在地</span>
              <span>東京都品川区西五反田7‑22‑17 TOCビル 11階</span>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-blue-600 mb-1">設立</span>
              <span>2023年5月</span>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-blue-600 mb-1">代表取締役</span>
              <span>熊崎 友</span>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-blue-600 mb-1">従業員数</span>
              <span>10名</span>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-blue-600 mb-1">資本金</span>
              <span>500万円</span>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-blue-600 mb-1">事業内容</span>
              <div className="space-y-1">
                <div>学生転職・学転インターン・学転ナレッジ</div>
                <div>コンサルティング / 人材紹介事業 / Web開発事業</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function MVVPage() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-500/30 to-indigo-500/30" />

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">私たちが目指しているもの</h2>

          <div className="flex justify-center">
            {[
              {
                title: "Mission",
                content: "企業における「あたりまえ」を再創造する",
                icon: <Target className="w-12 h-12" />,
                gradient: "from-red-500 to-pink-500",
              },
            ].map((item, index) => (
              <div key={index} className="relative group w-full max-w-sm mx-auto">
                {/* glowing backdrop */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} blur-xl opacity-40 group-hover:opacity-60 transition`} />
                
                {/* card */}
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl px-10 py-12 flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r from-white/20 to-white/5 ring-4 ring-white/40 mb-8">
                    {item.icon}
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg max-w-xs">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MembersPage() {
  const members = [
    {
      name: "熊崎 友",
      role: "代表取締役",
      img: "/20240807_MakeCulture様_0023.JPG",
      bio: "HR・財務・組織改善・事業改善領域を中心にクライアント課題を解決。",
    },
    {
      name: "坂入 健仁",
      role: "取締役",
      img: "/20240807_MakeCulture様_0025.JPG",
      bio: "採用コンサル・IT開発支援に従事。RPO / 採用コンサルを担当。",
    },
    {
      name: "上田 光心",
      role: "取締役",
      img: "/20240807_MakeCulture様_0017.JPG",
      bio: "学生視点から開発支援や採用支援を実施。コミュニティ創生などを担当。",
    },
  ]

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">弊社メンバー</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-64 h-64 mb-8 relative">
                <Image
                  src={member.img || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>

              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2">
                {member.role}
              </Badge>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">{member.name}</h3>

              <p className="text-gray-700 leading-relaxed max-w-xs">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BusinessOverviewPage() {
  return (
    <div className="h-full overflow-y-auto bg-white p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">事業概要</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          採用支援事業・開発支援事業の 2 軸で、企業の経営・採用・開発・営業など事業全般の課題解決に寄与。
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 ml-4">採用支援事業</h3>
            </div>
            <ul className="space-y-4 text-lg">
              {[
                "学生転職 — 長期インターン／新卒前の転職を支援し、企業との早期マッチングを実現",
                "学転インターン — 学生の実務経験機会を創出し、企業の若手採用を加速",
                "新卒・中途紹介事業 — スキル適合度の高い人材を紹介",
                "学転ナレッジ — 採用ノウハウを体系化したメディア運営",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-12 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 ml-4">開発支援事業</h3>
            </div>
            <ul className="space-y-4 text-lg">
              {["SES・ITコンサル事業", "受託開発事業"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-4" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function CandidatePoolPage() {
  const categories = [
    {
      title: "職種割合",
      data: [
        { label: "営業職", value: "48%", color: "bg-blue-500" },
        { label: "エンジニア", value: "44%", color: "bg-green-500" },
        { label: "事務職", value: "5%",  color: "bg-yellow-500" },
        { label: "その他", value: "3%",  color: "bg-gray-500" },
      ],
    },
    {
      title: "年齢構成",
      data: [
        { label: "20代", value: "48%", color: "bg-purple-500" },
        { label: "30代", value: "35%", color: "bg-indigo-500" },
        { label: "40代", value: "11%", color: "bg-pink-500" },
        { label: "50代", value: "6%", color: "bg-red-500" },
      ],
    },
    {
      title: "性別比率",
      data: [
        { label: "男性", value: "60%", color: "bg-blue-600" },
        { label: "女性", value: "40%", color: "bg-pink-600" },
      ],
    },
    {
      title: "地域",
      data: [
        { label: "関東", value: "55%", color: "bg-emerald-500" },
        { label: "関西", value: "20%", color: "bg-teal-500" },
        { label: "中部", value: "10%", color: "bg-cyan-500" },
        { label: "九州", value: "8%", color: "bg-sky-500" },
        { label: "その他", value: "7%", color: "bg-gray-500" },
      ],
    },
    {
      title: "流入経路",
      data: [
        { label: "リファラル", value: "40%", color: "bg-orange-500" },
        { label: "求人媒体", value: "35%", color: "bg-amber-500" },
        { label: "SNS", value: "20%", color: "bg-lime-500" },
        { label: "その他", value: "5%", color: "bg-gray-500" },
      ],
    },
  ]

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">母集団について</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.data.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="font-bold text-gray-800">{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function CaseStudies1Page() {
  const caseStudies = [
    {
      company: "株式会社TWOSTONE＆Sons",
      logo: "/logos/tss.jpg",
      size: "",
      business: "IT・HR",
      issue: "営業職採用の母集団形成と早期戦力化を図りたい。",
      solution: "営業2名を採用。両名とも MVP を受賞し、即戦力として会社に大きく貢献。"
    },
    {
      company: "株式会社M＆A総合研究所",
      logo: "/logos/masoken.png",
      size: "",
      business: "M&A",
      issue: "若手ハイパフォーマー営業を継続的に採用したい。",
      solution: "営業職1名をポテンシャル採用し、2年目で年収 2,000 万円を達成。"
    },
    {
      company: "株式会社ヤプリ",
      logo: "/logos/yappli.png",
      size: "",
      business: "SaaS",
      issue: "事業拡大フェーズでフィールドセールスを強化したい。",
      solution: "フィールドセールス1名／CS1名を採用。CSはリーダーへ昇格し、拡大フェーズを牽引。"
    },
    {
      company: "株式会社HATARABA",
      logo: "/logos/hataraba.png",
      size: "",
      business: "HR Tech",
      issue: "CS兼務のインサイドセールスを迅速に確保したい。",
      solution: "インサイドセールス1名を採用。アポ獲得体制を整備し利益を拡大、中心メンバーとして活躍中。"
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-white p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">導入事例</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center mr-4 bg-gray-100">
                  {study.logo ? (
                    <Image src={study.logo} alt={study.company} width={64} height={64} className="object-contain" />
                  ) : (
                    <span className="text-2xl font-bold text-blue-600">{study.company.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{study.company}</h3>
                  <p className="text-gray-500">{study.size}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600">事業内容：{study.business}</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">企業課題：</span>
                    {study.issue}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">導入成果：</span>
                    {study.solution}
                  </p>
                </div>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function CaseStudies2Page() {
  const caseStudies = [
    {
      company: "SBヒューマンキャピタル株式会社",
      logo: "/logos/sb.png",
      size: "",
      business: "IT・人材",
      issue: "自社サービスの追加機能開発を担うクラウドエンジニアを募集。",
      solution: "クラウドエンジニア1名を年収 700 万円で採用。チームリーダーとして活躍中。"
    },
    {
      company: "株式会社LITALICO",
      logo: "/logos/litalico.avif",
      size: "",
      business: "福祉・教育",
      issue: "プロダクト改善を推進できるフルスタックエンジニアを採用したい。",
      solution: "フルスタックエンジニア2名を採用（ポテンシャル＋年収800万ハイスキル）。両名ともプロダクト改善に寄与。"
    },
    {
      company: "株式会社SalesMarker",
      logo: "/logos/salesmarker.png",
      size: "",
      business: "SaaS",
      issue: "顧客基盤拡大に伴いアプリ基盤強化のためのバックエンドSEが必要。",
      solution: "バックエンドエンジニア1名を年収 600 万円で採用。技術理解が深く、スペシャリストとして活躍中。"
    },
    {
      company: "株式会社ヘッドウォータース",
      logo: "/logos/headwaters.jpeg",
      size: "",
      business: "SI・AI",
      issue: "AI×IoT案件増加に対応できるモバイルエンジニアを確保したい。",
      solution: "モバイル1名・インフラ2名を採用。新規案件獲得と Azure パートナー要件を満たし、現在も活躍中。"
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">導入事例</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center mr-4 bg-gray-100">
                  {study.logo ? (
                    <Image src={study.logo} alt={study.company} width={64} height={64} className="object-contain" />
                  ) : (
                    <span className="text-2xl font-bold text-purple-600">{study.company.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{study.company}</h3>
                  <p className="text-gray-500">{study.size}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-600">事業内容：{study.business}</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">企業課題：</span>
                    {study.issue}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">導入成果：</span>
                    {study.solution}
                  </p>
                </div>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function EngineerSupportPage() {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-green-50 to-blue-50 p-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">エンジニア支援について</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
          半年間の準委任（業務委託）契約でスキルとカルチャーフィットを確認した後、正社員へ転換するモデルで多数実績。
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Clock className="w-12 h-12" />,
                title: "半年準委任契約",
                desc: "スキル確認のち、正社員登用",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "実績豊富",
                desc: "バックエンドSE2名・フロントSE1名の登用実績",
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "課題解決",
                desc: "業界の求人倍率上昇、経験者人材不足、スキルミスマッチ課題を解決",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProcessFlowPage() {
  const steps = [
    {
      step: "01",
      title: "契約書締結",
      desc: "紹介基本契約・NDA",
    },
    {
      step: "02",
      title: "ヒアリング",
      desc: "ペルソナ・募集背景・採用計画",
    },
    {
      step: "03",
      title: "候補者選定とご提案",
      desc: "最適な人材をマッチング",
    },
    {
      step: "04",
      title: "選考とご成約",
      desc: "クロージング支援含む",
    },
  ]

  return (
    <div className="h-full overflow-y-auto bg-white p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">ご紹介の流れ</h2>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-2xl mr-8">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function PricingPage() {
  const pricingData = [
    { position: "営業職 / マーケ職 / 人事職など", fee: "理論年収の35%" },
    { position: "未経験エンジニア", fee: "60万円" },
    { position: "経験エンジニア", fee: "理論年収40%〜" },
    { position: "経営層・役員など", fee: "理論年収の50%〜（応相談）" },
  ]

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50 p-12 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">料金について</h2>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="grid grid-cols-2 gap-4">
              <h3 className="text-2xl font-semibold">ポジション</h3>
              <h3 className="text-2xl font-semibold">フィー</h3>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {pricingData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 gap-4 p-6 hover:bg-blue-50 transition-colors ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="text-gray-800 text-lg">{row.position}</div>
                <div>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-lg">
                    {row.fee}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-blue-50 border-t">
            <p className="text-gray-600 text-center text-lg">
              ※ 成果報酬ベース（内定決定後のお支払い）。実績ベースでのご相談など柔軟に対応いたします。
            </p>
          </div>
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
    <div className="w-full h-screen bg-white flex flex-col">
      {/* ヘッダー */}
      <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold">株式会社Make Culture　中途紹介事業</h1>
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
      <div className="flex-1 overflow-auto">
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
