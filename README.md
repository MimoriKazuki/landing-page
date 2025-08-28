# システム開発ノウハウ教材 LP

高コンバージョン率を目指したランディングページ（Next.js + TypeScript + Tailwind CSS）

## 特徴

- ✨ ダークテーマベースのモダンなデザイン
- 🎨 グラスモーフィズム・グラデーション効果
- 📱 完全レスポンシブ対応
- ⚡ 高速パフォーマンス（LCP ≤ 2.5s）
- 🔍 SEO最適化・構造化データ対応
- 💳 Stripe決済統合
- 📊 CVR 6.0%以上を目標設計

## セクション構成

1. **ヒーローセクション** - 強力なベネフィット訴求
2. **ソーシャルプルーフ** - 実績数値の表示
3. **課題共感** - ターゲットの悩みを可視化
4. **解決策提示** - 教材の3つの約束
5. **カリキュラム** - 8章構成の詳細
6. **ビフォーアフター** - 受講前後の変化
7. **受講者の声** - レビューカルーセル
8. **価格・特典** - Stripe決済統合
9. **FAQ** - よくある質問
10. **CTA** - 最終クロージング
11. **フッター** - リンク・問い合わせ

## セットアップ

### 1. 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 2. 環境変数の設定

\`.env.example\`を\`.env.local\`にコピーして、Stripeの情報を設定：

\`\`\`bash
cp .env.example .env.local
\`\`\`

\`\`\`env
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
STRIPE_PRICE_ID=price_xxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx
\`\`\`

### 3. 開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

[http://localhost:3000](http://localhost:3000) でアクセス可能

## ビルド・本番環境

\`\`\`bash
npm run build
npm run start
\`\`\`

## デプロイ

### Vercel（推奨）

1. Vercelにプロジェクトをインポート
2. 環境変数を設定
3. デプロイ

\`\`\`bash
npx vercel
\`\`\`

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: CSS Transitions
- **決済**: Stripe Checkout
- **アイコン**: Lucide React
- **フォント**: Inter, Noto Sans JP

## パフォーマンス目標

- **LCP**: ≤ 2.5秒
- **CLS**: ≤ 0.02
- **TTI**: ≤ 3.2秒
- **JSバンドル**: ≤ 180KB (gzip)

## カスタマイズ

### カラーテーマの変更

\`styles/globals.css\`のCSS変数を編集：

\`\`\`css
:root {
  --primary: 198 100% 52%; /* メインカラー */
  --accent: 264 84% 62%;   /* アクセントカラー */
}
\`\`\`

### コンテンツの更新

各コンポーネント内のテキスト・データを直接編集

## ライセンス

Private