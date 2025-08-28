'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '初心者でも大丈夫ですか？',
    answer: 'はい、大丈夫です。基礎的なHTML/CSS/JavaScriptの知識があれば問題ありません。各章は段階的に学べる構成になっており、サンプルコードも豊富に用意しています。',
  },
  {
    question: 'どんな言語・フレームワークに対応していますか？',
    answer: 'JavaScript/TypeScript、React/Next.js、Node.js、Python、PHP、Ruby on Rails など主要な言語とフレームワークをカバーしています。言語に依存しない設計思想も学べます。',
  },
  {
    question: '返金保証はありますか？',
    answer: '30日間の完全返金保証があります。内容にご満足いただけない場合、理由を問わず全額返金いたします。返金手続きは購入時のメールから簡単に申請できます。',
  },
  {
    question: 'アップデートは無料ですか？',
    answer: 'はい、一度購入いただければ永続的に無料でアップデートを受けられます。技術トレンドに合わせて定期的に内容を更新しており、常に最新の情報を学べます。',
  },
  {
    question: 'サポートはありますか？',
    answer: 'Slackコミュニティでの質問サポートと、購入者限定の月1回のオンライン勉強会があります。また、特典として個別相談30分×2回も含まれています。',
  },
  {
    question: '企業での利用は可能ですか？',
    answer: '可能です。チームライセンスも用意しており、5名以上でのご購入の場合は割引があります。請求書発行にも対応しています。',
  },
  {
    question: '動画コンテンツはありますか？',
    answer: 'テキスト中心ですが、複雑な部分は解説動画も用意しています。合計10時間以上の動画コンテンツがあり、実装の様子を見ながら学習できます。',
  },
  {
    question: '学習時間の目安は？',
    answer: '1日1〜2時間の学習で約3ヶ月が目安です。週末にまとめて学習する場合は4〜5ヶ月程度。自分のペースで進められるので、忙しい方でも無理なく学習できます。',
  },
  {
    question: '教材の更新頻度は？',
    answer: '月1〜2回のペースで更新しています。新しい技術やツールが登場した際は、すぐに内容に反映。購入者にはメールで更新情報をお知らせします。',
  },
  {
    question: '決済方法は？',
    answer: 'クレジットカード（Visa/Mastercard/Amex/JCB）、デビットカード、Google Pay、Apple Payに対応。Stripeの安全な決済システムを使用しています。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block glass-effect px-6 py-2 rounded-full mb-6">
            <span className="text-primary font-bold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            よくある
            <span className="gradient-text">質問</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            購入前の疑問や不安を解消します
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-heading font-semibold text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'text-primary flex-shrink-0 transition-transform duration-300',
                    openIndex === index && 'rotate-180'
                  )}
                  size={24}
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-6 pb-6 text-white/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 mb-4">
            その他のご質問は
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="text-primary">support@example.com</span>
            <span className="text-white/60">までお問い合わせください</span>
          </a>
        </div>
      </div>
    </section>
  )
}