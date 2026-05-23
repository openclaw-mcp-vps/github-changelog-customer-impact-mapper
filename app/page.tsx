export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Changelog
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Map GitHub Changes to{' '}
          <span className="text-[#58a6ff]">Customer Impact</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub repos, let AI analyze commits and PRs, and get polished customer-facing changelog drafts — ready to review and publish in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $18/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔗', title: 'GitHub Integration', desc: 'Webhooks & API — zero manual copy-paste.' },
          { icon: '🤖', title: 'AI Analysis', desc: 'Extracts customer-facing features from raw commits.' },
          { icon: '📋', title: 'Publish-Ready Drafts', desc: 'Review, edit, and publish changelogs instantly.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              'Unlimited repositories',
              'AI changelog generation',
              'GitHub webhook integration',
              'Review & publish workflow',
              'Email digest of changes',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI know what is customer-facing?',
              a: 'Our AI is trained to distinguish user-visible changes from internal refactors, infra work, and bug fixes — using commit messages, PR titles, labels, and descriptions as signals.',
            },
            {
              q: 'Which GitHub plans are supported?',
              a: 'All GitHub plans work — Free, Team, and Enterprise Cloud. We use the standard GitHub REST API and webhooks, so no special permissions are needed beyond repo read access.',
            },
            {
              q: 'Can I edit the generated changelog before publishing?',
              a: 'Yes. Every AI-generated draft goes into a review queue where you can edit, reorder, merge, or discard entries before publishing to your changelog page.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} GitHub Changelog Mapper · $18/mo · All rights reserved
      </footer>
    </main>
  )
}
