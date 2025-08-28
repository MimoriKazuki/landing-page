'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '特徴', href: '#features' },
  { label: '中身', href: '#curriculum' },
  { label: '実績', href: '#testimonials' },
  { label: '価格', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'glass-effect py-4 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-width">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-heading font-black gradient-text"
            >
              DevKnowHow
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-white/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#pricing')
              }}
              className="btn-primary"
            >
              今すぐ購入
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect mt-4 py-4">
          <div className="container-width">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="block py-3 text-white/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#pricing')
              }}
              className="btn-primary inline-block mt-4"
            >
              今すぐ購入
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}