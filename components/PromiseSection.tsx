'use client'

import { Zap, Shield, Layers } from 'lucide-react'

const promises = [
  {
    icon: Layers,
    title: '実務の型が身につく',
    description: '要件定義から運用まで、現場で使える実践的なフローを体系化',
    features: [
      'プロジェクト管理テンプレート',
      '設計ドキュメント雛形',
      'コードレビューチェックリスト',
    ],
  },
  {
    icon: Zap,
    title: 'AI×クラウドで高速開発',
    description: '最新技術を活用した効率的な開発手法を実例付きで解説',
    features: [
      'GitHub Copilot活用術',
      'Vercel/Supabase実装例',
      'ChatGPT連携サンプル',
    ],
  },
  {
    icon: Shield,
    title: '失敗を防ぐ知識',
    description: '実際の失敗事例から学ぶ、トラブル回避のノウハウ',
    features: [
      'セキュリティチェックリスト',
      'パフォーマンス改善手法',
      'デバッグテクニック集',
    ],
  },
]

export default function PromiseSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-bg to-panel">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block glass-effect px-6 py-2 rounded-full mb-6">
            <span className="text-primary font-bold">解決策</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            この教材で得られる
            <span className="gradient-text">3つの約束</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            実務経験10年以上のエンジニアが培った知見を、
            誰でも実践できる形に体系化しました
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 group-hover:scale-110 transition-transform">
                  <promise.icon className="text-primary" size={32} />
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4">
                  {promise.title}
                </h3>
                
                <p className="text-white/70 mb-6">
                  {promise.description}
                </p>
                
                <ul className="space-y-3">
                  {promise.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}