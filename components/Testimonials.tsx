'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: '田中 健太',
    role: 'フリーランスエンジニア',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    content: 'この教材のおかげで、案件獲得率が3倍になりました。特にAI活用の章は目から鱗でした。今では月80万円を安定して稼げています。',
    highlight: '月収30万→80万円',
  },
  {
    name: '佐藤 美咲',
    role: '社内DX推進担当',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    content: '体系的にまとまっていて、社内システムの開発が格段に早くなりました。チェックリストは本当に便利で、ミスが激減しました。',
    highlight: '開発速度2.5倍',
  },
  {
    name: '山田 翔',
    role: 'スタートアップCTO',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    content: 'プロダクト開発の型が身につき、チーム全体の生産性が向上しました。新人教育にも活用させていただいています。',
    highlight: 'チーム生産性40%向上',
  },
  {
    name: '鈴木 あかり',
    role: 'Web制作会社勤務',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    content: '独学では絶対に学べない実務ノウハウが満載でした。昇進試験にも合格し、年収が150万円アップしました！',
    highlight: '年収150万円UP',
  },
  {
    name: '高橋 大輝',
    role: 'SIer→フリーランス転身',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    content: 'SIerから独立する際の不安が一気に解消されました。クラウド活用術のおかげでインフラコストが70%削減できました。',
    highlight: 'コスト70%削減',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block glass-effect px-6 py-2 rounded-full mb-6">
            <span className="text-primary font-bold">受講者の声</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            <span className="gradient-text">137名</span>
            が実感した成果
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            実際に教材を活用して成果を出した方々の生の声
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-effect p-8 md:p-12 rounded-2xl">
            <Quote className="text-primary/20 absolute top-6 left-6" size={48} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                {testimonials[currentIndex].content}
              </p>

              <div className="inline-block glass-effect px-4 py-2 rounded-full mb-6">
                <span className="text-primary font-bold">
                  {testimonials[currentIndex].highlight}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="font-heading font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/60">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="glass-effect p-3 rounded-full hover:bg-white/10 transition-colors"
              aria-label="前のレビュー"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`レビュー ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="glass-effect p-3 rounded-full hover:bg-white/10 transition-colors"
              aria-label="次のレビュー"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-center p-4 rounded-xl transition-all ${
                index === currentIndex
                  ? 'glass-effect scale-110'
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/50 to-accent/50" />
              <div className="text-xs text-white/60">{testimonial.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}