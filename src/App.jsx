import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Shield, Lock, FileText, BadgeCheck, Database, LineChart, Phone, Mail, ArrowRight } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#features', label: 'Funzioni' },
    { href: '#use-cases', label: 'Per Armerie' },
    { href: '#pricing', label: 'Prezzi' },
    { href: '#contatti', label: 'Contatti' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
              <Shield size={18} />
            </span>
            <span className="font-semibold text-slate-900 tracking-tight">Fortify CRM</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:vendite@fortifycrm.it" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
              <Mail size={16} />
              vendite@fortifycrm.it
            </a>
            <a href="#contatti" className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700">
              <Phone size={16} />
              Richiedi demo
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-lg text-slate-700 hover:bg-slate-50">
                  {l.label}
                </a>
              ))}
              <a href="#contatti" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700">
                <Phone size={16} /> Richiedi demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-10 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              <Shield size={14} /> CRM per armerie in Italia
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Sicurezza, conformità e vendite. In un unico CRM.
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Gestisci clienti, licenze e inventario con processi conformi al T.U.L.P.S. e alle normative europee. Tutto in modo semplice, tracciabile e pronto per audit.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contatti" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-5 py-3 rounded-lg shadow-sm hover:bg-blue-700">
                Richiedi una demo
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 font-medium px-5 py-3 rounded-lg hover:bg-slate-50">
                Scopri le funzioni
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><BadgeCheck className="text-emerald-600" size={18}/> GDPR & conformità</div>
              <div className="flex items-center gap-2"><Lock className="text-blue-600" size={18}/> Audit trail completo</div>
              <div className="flex items-center gap-2"><Database className="text-indigo-600" size={18}/> Magazzino e seriali</div>
              <div className="flex items-center gap-2"><FileText className="text-amber-600" size={18}/> Documenti e licenze</div>
            </div>
          </div>
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_70px_-20px_rgba(30,64,175,0.35)]">
              <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group p-6 rounded-xl border border-slate-200 bg-white/70 hover:bg-white transition-colors">
      <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    {
      icon: FileText,
      title: 'Gestione licenze e documenti',
      desc: 'Archiviazione sicura di porto d’armi, certificati medici, scadenze e controlli con reminder automatici.',
    },
    {
      icon: Database,
      title: 'Inventario e seriali',
      desc: 'Tracciamento completo di armi, munizioni e accessori con numeri di serie e movimenti di magazzino.',
    },
    {
      icon: Shield,
      title: 'Conformità normativa',
      desc: 'Flussi preimpostati per T.U.L.P.S., antiriciclaggio e registri obbligatori. Sempre aggiornato.',
    },
    {
      icon: Lock,
      title: 'Sicurezza di livello enterprise',
      desc: 'Ruoli e permessi, log attività, crittografia e backup automatici in data center UE.',
    },
    {
      icon: LineChart,
      title: 'Vendite e clienti',
      desc: 'Pipeline commerciale, preventivi, fatture e reportistica per far crescere il tuo business.',
    },
    {
      icon: BadgeCheck,
      title: 'GDPR by design',
      desc: 'Consensi, minimizzazione dei dati e gestione richieste degli interessati integrati nel sistema.',
    },
  ]
  return (
    <section id="features" className="py-14 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Tutto ciò che serve a un’armeria moderna</h2>
          <p className="mt-3 text-slate-600">Strumenti nati per il settore, costruiti con focus su sicurezza, tracciabilità e semplicità d’uso.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <Feature key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      title: 'Vendita al dettaglio',
      points: ['Anagrafiche clienti e KYC', 'Gestione preventivi e fatture', 'Integrazione POS e IVA italiana'],
    },
    {
      title: 'Tiro a segno e poligoni',
      points: ['Abbonamenti e accessi', 'Gestione armi a noleggio', 'Registri e responsabilità'],
    },
    {
      title: 'Distribuzione e B2B',
      points: ['Catalogo e disponibilità in tempo reale', 'Ordini fornitore', 'Reportistica avanzata'],
    },
  ]
  return (
    <section id="use-cases" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Creato per i tuoi flussi</h2>
          <p className="mt-3 text-slate-600">Adattabile alle diverse realtà: negozi, poligoni e distributori.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                {c.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Base', price: '€49/mese', desc: 'Per piccole armerie', features: ['Fino a 3 utenti', 'Gestione clienti', 'Report base'] },
    { name: 'Pro', price: '€129/mese', desc: 'Per crescita e team', features: ['Utenti illimitati', 'Magazzino avanzato', 'Audit trail & permessi'] },
    { name: 'Enterprise', price: 'Su richiesta', desc: 'Per catene e grandi volumi', features: ['SLA e onboarding', 'Single Sign-On', 'Supporto dedicato'] },
  ]
  return (
    <section id="pricing" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Prezzi semplici e trasparenti</h2>
          <p className="mt-3 text-slate-600">Prova gratuita 14 giorni. Nessuna carta richiesta.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
              <h3 className="font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 text-3xl font-semibold text-slate-900">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contatti" className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700">
                Inizia ora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contatti" className="py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Parla con noi</h2>
            <p className="mt-3 text-slate-600">Prenota una demo personalizzata: ti mostriamo come Fortify CRM si adatta alla tua armeria.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <a href="mailto:vendite@fortifycrm.it" className="inline-flex items-center gap-2 hover:text-slate-900"><Mail size={18}/> vendite@fortifycrm.it</a>
              <a href="tel:+390200000000" className="inline-flex items-center gap-2 hover:text-slate-900"><Phone size={18}/> +39 02 0000 0000</a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-700">Nome e Cognome</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mario Rossi" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="mario@azienda.it" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Messaggio</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Raccontaci delle tue esigenze…" />
              </div>
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700">
                Invia richiesta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"><Shield size={16} /></span>
          <span>© {new Date().getFullYear()} Fortify CRM</span>
        </div>
        <div className="text-sm text-slate-500">Dati ospitati in UE • Sicurezza by design • GDPR compliant</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
