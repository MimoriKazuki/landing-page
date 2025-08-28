'use client'

import { AlertCircle, Clock, Puzzle, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: Puzzle,
    title: '独学で勉強しても実務に活かせない',
    description: '断片的な知識だけでは、実際のプロジェクトでつまずいてしまう',
    color: 'text-red-500',
  },
  {
    icon: Clock,
    title: '最新の開発スピードに追いつけない',
    description: 'AI活用やクラウドサービスの波に乗れず、競争力が低下',
    color: 'text-orange-500',
  },
  {
    icon: TrendingDown,
    title: '何から学べばいいか分からない',
    description: '情報が多すぎて、効率的な学習パスが見えない',
    color: 'text-yellow-500',
  },
  {
    icon: AlertCircle,
    title: '失敗を恐れて手が動かない',
    description: 'ベストプラクティスや落とし穴を知らず、一歩が踏み出せない',
    color: 'text-purple-500',
  },
]

export default function ProblemCards() {
  return (
    <section id="features" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            こんな
            <span className="gradient-text">悩み</span>
            ありませんか？
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            多くの開発者が直面する課題。あなたも一人で悩んでいませんか？
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`${problem.color} p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                  <problem.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">
                    {problem.title}
                  </h3>
                  <p className="text-white/60">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}