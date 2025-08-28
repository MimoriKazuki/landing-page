'use client'

import { Check, X, Sparkles, Shield, Clock } from 'lucide-react'

const features = [
  '全8章・186レッスンのフルアクセス',
  '実装サンプルコード（15プロジェクト分）',
  'プロジェクトテンプレート・雛形',
  'AI活用レシピ集（ChatGPT/Copilot）',
  'クラウドサービス設定ガイド',
  '無制限アップデート（永続版）',
  '30日間返金保証',
  'Slackコミュニティ参加権',
]

const bonuses = [
  {
    icon: Sparkles,
    title: '特典1: 提案書テンプレート集',
    value: '29,800円相当',
    description: '実際に受注した10案件の提案書をそのまま提供',
  },
  {
    icon: Shield,
    title: '特典2: セキュリティ監査ツール',
    value: '19,800円相当',
    description: 'OWASP準拠の自動診断ツールライセンス1年分',
  },
  {
    icon: Clock,
    title: '特典3: 個別相談30分×2回',
    value: '20,000円相当',
    description: 'キャリアや技術選定について個別アドバイス',
  },
]

const competitors = [
  { name: 'A社オンライン講座', price: '198,000円', support: '3ヶ月', update: '×' },
  { name: 'B社プログラミングスクール', price: '398,000円', support: '6ヶ月', update: '×' },
  { name: '本教材', price: '19,800円', support: '無期限', update: '◎' },
]

export default function Pricing() {
  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
    }
  }

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-bg to-panel">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block glass-effect px-6 py-2 rounded-full mb-6">
            <span className="text-primary font-bold">価格</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            投資価値の高い
            <span className="gradient-text">特別価格</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            一度の投資で、一生使える開発スキルを手に入れる
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary/20 to-transparent w-64 h-64 rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="inline-block bg-danger/20 text-danger px-4 py-1 rounded-full text-sm font-bold mb-4">
                      期間限定 60%OFF
                    </div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-white/40 line-through text-2xl">49,800円</span>
                      <span className="text-5xl font-mono font-bold gradient-text">19,800</span>
                      <span className="text-2xl text-white/60">円</span>
                    </div>
                    <div className="text-white/60">（税込）</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleCheckout}
                    className="w-full btn-primary text-lg py-5 mb-4"
                  >
                    今すぐ購入する
                  </button>

                  <div className="text-center text-white/60 text-sm">
                    30日間返金保証 / 安心のStripe決済
                  </div>
                </div>

                <div className="lg:border-l lg:border-white/10 lg:pl-12">
                  <h3 className="text-xl font-heading font-bold mb-6">
                    今だけの限定特典
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {bonuses.map((bonus, index) => (
                      <div key={index} className="glass-effect p-4 rounded-xl">
                        <div className="flex items-start gap-4">
                          <bonus.icon className="text-primary mt-1" size={24} />
                          <div className="flex-1">
                            <div className="font-bold text-white mb-1">
                              {bonus.title}
                            </div>
                            <div className="text-primary font-bold text-sm mb-1">
                              {bonus.value}
                            </div>
                            <div className="text-white/60 text-sm">
                              {bonus.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="glass-effect p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="text-sm text-white/60 mb-2">特典総額</div>
                    <div className="text-3xl font-mono font-bold gradient-text">
                      69,600円相当
                    </div>
                    <div className="text-white/80 mt-2">
                      本体価格よりも特典の方が高額！
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-heading font-bold text-center mb-8">
              他社サービスとの比較
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white/60">サービス</th>
                    <th className="text-center p-4 text-white/60">価格</th>
                    <th className="text-center p-4 text-white/60">サポート</th>
                    <th className="text-center p-4 text-white/60">アップデート</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, index) => (
                    <tr
                      key={index}
                      className={`border-b border-white/5 ${
                        index === competitors.length - 1
                          ? 'bg-gradient-to-r from-primary/10 to-accent/10'
                          : ''
                      }`}
                    >
                      <td className="p-4 text-white/80">{comp.name}</td>
                      <td className="text-center p-4">
                        <span className={index === competitors.length - 1 ? 'gradient-text font-bold' : 'text-white/60'}>
                          {comp.price}
                        </span>
                      </td>
                      <td className="text-center p-4 text-white/60">{comp.support}</td>
                      <td className="text-center p-4">
                        <span className={comp.update === '◎' ? 'text-primary' : 'text-white/30'}>
                          {comp.update}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl mt-8 text-center bg-gradient-to-r from-warning/10 to-danger/10 border border-warning/20">
            <div className="text-warning font-bold mb-2">
              ⚠️ 残り7名で値上げ予定
            </div>
            <div className="text-white/80">
              品質維持のため、定期的に価格改定を行っています
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}