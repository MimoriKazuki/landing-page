'use client'

import { useState } from 'react'
import { Book, Code, Cloud, Database, GitBranch, Layout, Rocket, Shield } from 'lucide-react'

const modules = [
  {
    icon: Layout,
    title: '第1章: システム開発の全体像',
    topics: ['開発フローの理解', '要件定義の進め方', 'プロジェクト管理'],
    duration: '3時間',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: '第2章: 設計パターンと実装',
    topics: ['MVCアーキテクチャ', 'Clean Architecture', 'DDD実践'],
    duration: '5時間',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: '第3章: データベース設計',
    topics: ['正規化と非正規化', 'インデックス最適化', 'マイグレーション'],
    duration: '4時間',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    title: '第4章: クラウド活用術',
    topics: ['AWS/GCP/Azure比較', 'サーバーレス実装', 'CI/CD構築'],
    duration: '4時間',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: GitBranch,
    title: '第5章: チーム開発手法',
    topics: ['Git-flow戦略', 'コードレビュー', 'アジャイル実践'],
    duration: '3時間',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Shield,
    title: '第6章: セキュリティ対策',
    topics: ['OWASP Top10対策', '認証・認可', 'データ暗号化'],
    duration: '3時間',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: '第7章: デプロイと運用',
    topics: ['Docker/k8s', '監視・ログ', 'スケーリング'],
    duration: '4時間',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Book,
    title: '第8章: 実践プロジェクト',
    topics: ['ECサイト構築', 'SaaS開発', '提案書作成'],
    duration: '8時間',
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function Curriculum() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="curriculum" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block glass-effect px-6 py-2 rounded-full mb-6">
            <span className="text-primary font-bold">カリキュラム</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            現場で使える
            <span className="gradient-text">実践的な8章構成</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            基礎から応用まで、段階的に学べる体系的なカリキュラム
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />
              
              <div className="glass-effect p-6 rounded-2xl h-full card-hover">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${module.color} bg-opacity-20 mb-4`}>
                  <module.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-lg font-heading font-bold mb-2">
                  {module.title}
                </h3>
                
                <div className="text-sm text-primary mb-4">
                  {module.duration}
                </div>
                
                <div
                  className={`space-y-2 overflow-hidden transition-all duration-300 ${
                    hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {module.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary text-xs mt-1">▶</span>
                      <span className="text-white/70 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`${hoveredIndex === index ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                  <div className="text-white/50 text-sm">
                    {module.topics.length}個のトピック
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block glass-effect px-8 py-4 rounded-full">
            <span className="text-white/80">
              総学習時間: <span className="text-primary font-bold font-mono">34時間</span> / 
              全<span className="text-primary font-bold font-mono">186</span>レッスン
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}