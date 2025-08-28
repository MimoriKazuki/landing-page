export default function SocialProof() {
  const stats = [
    { label: '受講者数', value: '137名+' },
    { label: '平均評価', value: '4.8/5.0' },
    { label: '案件獲得率', value: '82%' },
    { label: '完走率', value: '94%' },
  ]

  return (
    <section className="py-12 border-t border-b border-white/5">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-mono font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-white/60 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}