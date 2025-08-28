'use client'

import { useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouPage() {
  useEffect(() => {
    // 購入完了の分析イベントを送信
    if (typeof window !== 'undefined') {
      console.log('Purchase completed')
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-width">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-effect rounded-3xl p-12">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-6">
              <CheckCircle className="text-green-500" size={48} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">
              ご購入
              <span className="gradient-text">ありがとうございます！</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              教材へのアクセス情報を、ご登録のメールアドレスに送信しました。
              <br />
              すぐに学習を開始できます。
            </p>
            
            <div className="glass-effect p-6 rounded-xl mb-8 text-left">
              <h2 className="font-heading font-bold text-xl mb-4">
                次のステップ
              </h2>
              <ol className="space-y-3 text-white/70">
                <li>1. メールをご確認ください（迷惑メールフォルダもご確認ください）</li>
                <li>2. メール内のリンクから教材にアクセス</li>
                <li>3. Slackコミュニティに参加</li>
                <li>4. 第1章から学習開始！</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block glass-effect px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                トップページに戻る
              </Link>
              
              <p className="text-white/60 text-sm">
                ご不明な点がございましたら、
                <a href="mailto:support@example.com" className="text-primary hover:underline">
                  support@example.com
                </a>
                までお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}