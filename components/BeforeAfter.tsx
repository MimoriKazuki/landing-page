'use client'

import { ArrowRight, TrendingUp, Clock, Bug, DollarSign } from 'lucide-react'

const beforeData = [
  { label: '開発期間', value: '6ヶ月', icon: Clock },
  { label: 'バグ率', value: '15%', icon: Bug },
  { label: '月収', value: '30万円', icon: DollarSign },
  { label: '案件獲得', value: '年2件', icon: TrendingUp },
]

const afterData = [
  { label: '開発期間', value: '2.5ヶ月', change: '-58%', icon: Clock },
  { label: 'バグ率', value: '3%', change: '-80%', icon: Bug },
  { label: '月収', value: '65万円', change: '+117%', icon: DollarSign },
  { label: '案件獲得', value: '年8件', change: '+300%', icon: TrendingUp },
]

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-gradient-to-b from-panel to-bg">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            受講前と受講後の
            <span className="gradient-text">劇的な変化</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            実際の受講者データから見る、確かな成果
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-heading font-bold mb-2 text-white/50">
                Before
              </h3>
              <p className="text-white/40">教材受講前の平均値</p>
            </div>
            
            <div className="space-y-4 opacity-50">
              {beforeData.map((item, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="text-white/40" size={24} />
                    <span className="text-white/60">{item.label}</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-white/40">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-heading font-bold mb-2 gradient-text">
                After
              </h3>
              <p className="text-white/80">教材受講後3ヶ月の平均値</p>
            </div>
            
            <div className="space-y-4">
              {afterData.map((item, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl flex items-center justify-between border border-primary/20 card-hover"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="text-primary" size={24} />
                    <span className="text-white">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-mono font-bold gradient-text">
                      {item.value}
                    </span>
                    {item.change && (
                      <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                        item.change.startsWith('+') 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {item.change}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="glass-effect p-1 rounded-full">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full">
              <span className="text-white/60">成長率</span>
              <ArrowRight className="text-primary" size={20} />
              <span className="text-2xl font-mono font-bold gradient-text">平均2.3倍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}