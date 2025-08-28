import { Mail, Twitter, Github, Linkedin } from 'lucide-react'

const footerLinks = [
  {
    title: '教材について',
    links: [
      { label: 'カリキュラム詳細', href: '#curriculum' },
      { label: '受講者の声', href: '#testimonials' },
      { label: '価格・特典', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'サポート',
    links: [
      { label: 'お問い合わせ', href: 'mailto:support@example.com' },
      { label: 'Slackコミュニティ', href: '#' },
      { label: '利用規約', href: '#' },
      { label: 'プライバシーポリシー', href: '#' },
    ],
  },
  {
    title: '会社情報',
    links: [
      { label: '運営会社', href: '#' },
      { label: '特定商取引法', href: '#' },
      { label: 'ブログ', href: '#' },
      { label: '採用情報', href: '#' },
    ],
  },
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-white/5">
      <div className="container-width py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
              DevKnowHow
            </h3>
            <p className="text-white/60 mb-6">
              最短で実務の型が身につく
              <br />
              一生モノの開発教材
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="glass-effect p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <social.icon className="text-white/60 hover:text-primary transition-colors" size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-heading font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-sm text-center md:text-left">
              © 2024 DevKnowHow. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-primary text-sm transition-colors"
              >
                利用規約
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-primary text-sm transition-colors"
              >
                プライバシーポリシー
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-primary text-sm transition-colors"
              >
                特定商取引法
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-block glass-effect px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/60 text-sm">
                  システム稼働中 / SSL保護
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}