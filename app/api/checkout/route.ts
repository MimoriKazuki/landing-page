import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // 環境変数が設定されていない場合のダミーレスポンス
    // 実際の使用時はStripeのキーを環境変数に設定する必要があります
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PRICE_ID) {
      console.warn('Stripe環境変数が設定されていません。デモモードで動作しています。')
      
      // デモ用のレスポンス
      return NextResponse.json({
        url: '#demo-checkout',
        message: 'デモモード: 実際の決済を行うにはStripeの設定が必要です',
      })
    }

    // 動的インポートでStripeを読み込み
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
    })

    const origin = req.headers.get('origin') || 'http://localhost:3000'
    
    // Stripe Checkoutセッションを作成
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
      allow_promotion_codes: true,
      metadata: {
        product_name: 'システム開発ノウハウ教材',
      },
      customer_email: req.headers.get('email') || undefined,
      locale: 'ja',
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'チェックアウトセッションの作成に失敗しました' },
      { status: 500 }
    )
  }
}