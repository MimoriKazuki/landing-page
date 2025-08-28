'use client'

import { ArrowRight, Clock, Users, TrendingUp } from 'lucide-react'

export default function CTASection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-panel to-bg relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0,240,255,0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139,92,246,0.4) 0%, transparent 50%)
          `,
        }}
      />
      
      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block glass-effect px-6 py-2 rounded-full mb-6 border border-warning/30">
            <span className="text-warning font-bold">
              ⚠️ 残り7名で値上げ
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8">
            今すぐ始めて
            <br />
            <span className="gradient-text">3ヶ月後には別人に</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            迷っている時間がもったいない。
            <br />
            今この瞬間から、あなたの開発人生が変わります。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="glass-effect p-4 rounded-xl">
              <Clock className="text-primary mx-auto mb-2" size={32} />
              <div className="text-white/80 font-bold">即座にアクセス</div>
              <div className="text-white/60 text-sm">購入後すぐに学習開始</div>
            </div>
            <div className="glass-effect p-4 rounded-xl">
              <Users className="text-primary mx-auto mb-2" size={32} />
              <div className="text-white/80 font-bold">137名が実践中</div>
              <div className="text-white/60 text-sm">仲間と共に成長</div>
            </div>
            <div className="glass-effect p-4 rounded-xl">
              <TrendingUp className="text-primary mx-auto mb-2" size={32} />
              <div className="text-white/80 font-bold">平均2.3倍成長</div>
              <div className="text-white/60 text-sm">確かな実績</div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('#pricing')}
            className="btn-primary text-lg py-5 px-12 group inline-flex items-center gap-3"
          >
            <span>今すぐ教材を手に入れる</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </button>
          
          <div className="mt-8">
            <div className="inline-block glass-effect px-6 py-3 rounded-full">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-bg" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-bg" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-bg" />
                </div>
                <span className="text-white/80 text-sm">
                  <span className="text-primary font-bold">12名</span>が今見ています
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 glass-effect rounded-2xl border border-primary/20 max-w-xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
              30日間返金保証
            </h3>
            <p className="text-white/70">
              内容にご満足いただけない場合は、
              <br />
              理由を問わず全額返金いたします。
              <br />
              <span className="text-white/90 font-semibold">
                あなたにリスクはありません。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}