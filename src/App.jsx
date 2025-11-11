import { useState } from 'react'
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, LucideCheckCircle, ArrowRight } from 'lucide-react'

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-black text-white"><Camera size={20} /></div>
            <span className="font-semibold">Stellar Frames</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#work" className="hover:text-black/70">Work</a>
            <a href="#services" className="hover:text-black/70">Services</a>
            <a href="#about" className="hover:text-black/70">About</a>
            <a href="#testimonials" className="hover:text-black/70">Testimonials</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-black text-white hover:bg-black/90">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-black/60">Over 10 years of crafting images</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Stunning photography that tells your story
          </h1>
          <p className="mt-4 text-lg text-black/70">
            From timeless weddings to bold commercial campaigns, I create visuals that resonate and endure.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-black text-white hover:bg-black/90">
              Explore Portfolio <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-black/10 hover:border-black/30">
              Book a Session
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-xs uppercase tracking-wide text-black/60">Years</p>
            </div>
            <div>
              <p className="text-3xl font-bold">300+</p>
              <p className="text-xs uppercase tracking-wide text-black/60">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-xs uppercase tracking-wide text-black/60">Brands</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            {[
              'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1000&auto=format&fit=crop',
            ].map((src, i) => (
              <img key={i} src={src} alt="portfolio" className="aspect-[3/4] w-full object-cover rounded-lg shadow-sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const images = [
    'https://images.unsplash.com/photo-1520978441270-ea2d681b67dd?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975922325-24c184e89a8e?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975924531-3c6f2ad3f66a?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520974735194-4f4a97e5aa1a?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520974756888-1e0a2f2b5756?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518552781929-25b216d8c617?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517076756559-838f9b30df6e?q=80&w=1400&auto=format&fit=crop',
  ]
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Work</h2>
            <p className="text-black/70">A curated selection across weddings, portraits, and commercial shoots.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 hover:border-black/30">
            Book Now <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl bg-gray-100">
              <img src={src} alt={`work-${i}`} className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      title: 'Weddings',
      desc: 'Timeless storytelling from engagement to the last dance.',
    },
    { title: 'Portraits', desc: 'Editorial-style portraits that capture personality and presence.' },
    { title: 'Events', desc: 'Professional coverage for conferences, launches, and celebrations.' },
    { title: 'Commercial', desc: 'Campaigns, lookbooks, and content that elevates your brand.' },
  ]
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 rounded-xl bg-white border border-black/10">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-black/70">
                <li className="flex items-center gap-2"><LucideCheckCircle size={16} className="text-green-600"/> High-res delivery</li>
                <li className="flex items-center gap-2"><LucideCheckCircle size={16} className="text-green-600"/> Professional editing</li>
                <li className="flex items-center gap-2"><LucideCheckCircle size={16} className="text-green-600"/> Fast turnaround</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <img src="https://images.unsplash.com/photo-1756142006200-732d4390b078?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxQaG90b2dyYXBoZXJ8ZW58MHwwfHx8MTc2Mjg1Njg0Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Photographer" className="rounded-xl w-full object-cover h-80 lg:h-full" />
        <div>
          <h2 className="text-3xl font-bold">Hi, I'm Alex — your photographer</h2>
          <p className="mt-4 text-black/70">
            With over a decade behind the lens, I blend technical precision with artistic intuition to capture images that feel alive. My approach is collaborative, calm, and detail-focused.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-50 border border-black/5">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm text-black/60">Years Experience</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-black/5">
              <p className="text-2xl font-bold">5⭐</p>
              <p className="text-sm text-black/60">Client Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      quote: 'Our wedding photos are beyond anything we imagined — emotional, elegant, and timeless.',
      name: 'Maya & Daniel'
    },
    {
      quote: 'Professional, creative, and a joy to work with. The campaign exceeded expectations.',
      name: 'Sofia, Brand Manager'
    },
    {
      quote: 'I finally have portraits that feel like me. Could not recommend more highly.',
      name: 'Jordan P.'
    }
  ]
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Kind Words</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="p-6 rounded-xl bg-white border border-black/10">
              <p className="text-lg">“{t.quote}”</p>
              <p className="mt-4 text-sm text-black/60">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_type: '', budget: '', message: '', source: 'Website' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      await res.json()
      setStatus({ loading: false, success: 'Thanks! Your inquiry has been received. I will get back to you shortly.', error: null })
      setForm({ name: '', email: '', phone: '', service_type: '', budget: '', message: '', source: 'Website' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Could not send your message. Please try again later.' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold">Let’s work together</h2>
            <p className="mt-4 text-black/70">Tell me about your project — date, location, and your vision. I’ll respond within 24 hours.</p>
            <div className="mt-6 space-y-3 text-black/80">
              <p className="flex items-center gap-2"><Mail size={18}/> hello@stellarframes.com</p>
              <p className="flex items-center gap-2"><Phone size={18}/> +1 (555) 012-3456</p>
              <p className="flex items-center gap-2"><MapPin size={18}/> Based in New York, available worldwide</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" aria-label="Instagram" className="p-2 rounded-full border hover:bg-gray-50"><Instagram size={18}/></a>
                <a href="#" aria-label="Facebook" className="p-2 rounded-full border hover:bg-gray-50"><Facebook size={18}/></a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4 p-6 rounded-xl bg-gray-50 border border-black/10">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="Optional" />
              </div>
              <div>
                <label className="text-sm font-medium">Service</label>
                <select value={form.service_type} onChange={e=>setForm({...form, service_type:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white">
                  <option value="">Select</option>
                  <option>Wedding</option>
                  <option>Portrait</option>
                  <option>Event</option>
                  <option>Commercial</option>
                  <option>Product</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Budget</label>
                <input value={form.budget} onChange={e=>setForm({...form, budget:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="$1,000 - $3,000" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea required rows={5} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="Tell me about your project" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <p className="text-sm text-black/70">By submitting, you agree to be contacted about your inquiry.</p>
                <button disabled={status.loading} className="px-5 py-3 rounded-md bg-black text-white hover:bg-black/90 disabled:opacity-50">
                  {status.loading ? 'Sending…' : 'Send Inquiry'}
                </button>
              </div>
              {status.success && (
                <p className="sm:col-span-2 text-green-700 bg-green-50 border border-green-200 p-3 rounded">{status.success}</p>
              )}
              {status.error && (
                <p className="sm:col-span-2 text-red-700 bg-red-50 border border-red-200 p-3 rounded">{status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} Stellar Frames. All rights reserved.</p>
        <a href="#contact" className="px-4 py-2 rounded-md border border-black/10 hover:border-black/30">Get a Quote</a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen text-black">
      <Nav />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
