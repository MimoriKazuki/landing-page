'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(0,240,255,0.1) 0%, rgba(139,92,246,0.1) 100%),
            radial-gradient(circle at 20% 50%, rgba(0,240,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139,92,246,0.15) 0%, transparent 50%),
            linear-gradient(180deg, rgba(11,14,19,0.95) 0%, rgba(11,14,19,1) 100%)
          `,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg/50 z-[1]" />
      
      <div className="container-width relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="glass-effect px-4 py-2 rounded-full border border-primary/20">
                <span className="text-primary font-semibold">🔥 限定特典付き</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
              最短で
              <span className="gradient-text">"実務の型"</span>
              が身につく。
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                一生モノの開発教材
              </span>
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed">
              現場で磨いた知見を凝縮。
              <br />
              <span className="text-primary font-bold">3ヶ月で設計→実装→公開</span>まで自走できる力を。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1" size={20} />
                <span className="text-white/90">要件定義〜運用までの実践的チェックリスト</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1" size={20} />
                <span className="text-white/90">AI×クラウドで開発速度2.3倍の実例コード</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1" size={20} />
                <span className="text-white/90">提案テンプレ・実装サンプル全て同梱</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#pricing')}
                className="btn-primary group flex items-center justify-center gap-2"
              >
                今すぐ教材を手に入れる
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('#curriculum')}
                className="glass-effect text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                教材の中身を見る
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-bg" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-bg" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-bg" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-bg" />
              </div>
              <div>
                <div className="text-white font-bold">137名が受講中</div>
                <div className="text-white/60 text-sm">★★★★★ 4.8/5.0</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,240,255,0.2)]">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold gradient-text">DevKnowHow</div>
                  <div className="text-white/80">システム開発ノウハウ教材</div>
                  <div className="inline-block glass-effect px-6 py-2 rounded-full">
                    <span className="text-primary font-mono font-bold">v2.0 最新版</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 glass-effect p-4 rounded-xl animate-float">
              <div className="text-primary font-mono font-bold text-2xl">2.3x</div>
              <div className="text-white/80 text-sm">開発速度UP</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-effect p-4 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-accent font-mono font-bold text-2xl">-35%</div>
              <div className="text-white/80 text-sm">バグ率削減</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}