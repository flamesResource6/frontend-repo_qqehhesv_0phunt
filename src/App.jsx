import { useState } from 'react'
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter, LucideCheckCircle, ArrowRight, Calendar } from 'lucide-react'

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-black text-white"><Camera size={20} /></div>
            <span className="font-semibold">CineFrame Studio</span>
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
          <p className="text-sm uppercase tracking-widest text-black/60">Cameraman • Director of Photography</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Cinematic visuals that move your audience
          </h1>
          <p className="mt-4 text-lg text-black/70">
            From commercials and music videos to events and documentaries, I capture stories with intention, craft, and style.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-black text-white hover:bg-black/90">
              Explore Portfolio <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-black/10 hover:border-black/30">
              Get a Quote
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-xs uppercase tracking-wide text-black/60">Years</p>
            </div>
            <div>
              <p className="text-3xl font-bold">400+</p>
              <p className="text-xs uppercase tracking-wide text-black/60">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100M+</p>
              <p className="text-xs uppercase tracking-wide text-black/60">Views</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            {[
              'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1499744632587-74a5c9fda2fd?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
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
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517076756559-838f9b30df6e?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518552781929-25b216d8c617?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1400&auto=format&fit=crop',
  ]
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Work</h2>
            <p className="text-black/70">A selection across commercials, music videos, documentaries, and events.</p>
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
    { title: 'Commercial', desc: 'High-impact ads and branded content with cinematic flair.' },
    { title: 'Music Videos', desc: 'Concept-to-cut filmmaking for artists and labels.' },
    { title: 'Events', desc: 'Multi-cam coverage for conferences, launches, and shows.' },
    { title: 'Documentary', desc: 'Authentic storytelling with a grounded visual approach.' },
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
                <li className="flex items-center gap-2"><LucideCheckCircle size={16} className="text-green-600"/> 4K/6K capture</li>
                <li className="flex items-center gap-2"><LucideCheckCircle size={16} className="text-green-600"/> Color grading</li>
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
        <img src="https://images.unsplash.com/photo-1614036742146-6e9bb0a163d5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYW1lcmFtYW58ZW58MHwwfHx8MTc2MzAwNzU4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Cameraman" className="rounded-xl w-full object-cover h-80 lg:h-full" />
        <div>
          <h2 className="text-3xl font-bold">Hi, I'm Alex — Cameraman & DoP</h2>
          <p className="mt-4 text-black/70">
            I combine technical precision with cinematic sensibility to craft visuals that feel immersive and intentional. I’m calm on set, collaborative with crews, and obsessed with details.
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
    { quote: 'Delivered stunning footage on a tight schedule. Professional and a pleasure to work with.', name: 'Riley, Producer' },
    { quote: 'Our brand launch video blew up — exactly the energy we wanted.', name: 'Sam, Marketing Lead' },
    { quote: 'Understood the brief immediately and elevated it with smart creative choices.', name: 'Jamie, Director' },
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
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    budget: '',
    shoot_date: '',
    requirements: '',
    message: '',
    source: 'Website'
  })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    // Prepare payload with proper date formatting if provided
    const payload = { ...form }

    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      await res.json()
      setStatus({ loading: false, success: 'Thanks! Your inquiry has been received. I will get back to you shortly.', error: null })
      setForm({ name: '', email: '', phone: '', service_type: '', budget: '', shoot_date: '', requirements: '', message: '', source: 'Website' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Could not send your message. Please try again later.' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold">Let’s collaborate</h2>
            <p className="mt-4 text-black/70">Share the date, budget, and requirements. I’ll respond within 24 hours.</p>
            <div className="mt-6 space-y-3 text-black/80">
              <p className="flex items-center gap-2"><Mail size={18}/> hello@cineframe.studio</p>
              <p className="flex items-center gap-2"><Phone size={18}/> +1 (555) 012-3456</p>
              <p className="flex items-center gap-2"><MapPin size={18}/> Based in New York, available worldwide</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" aria-label="Instagram" className="p-2 rounded-full border hover:bg-gray-50"><Instagram size={18}/></a>
                <a href="#" aria-label="YouTube" className="p-2 rounded-full border hover:bg-gray-50"><Youtube size={18}/></a>
                <a href="#" aria-label="Twitter" className="p-2 rounded-full border hover:bg-gray-50"><Twitter size={18}/></a>
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
                  <option>Commercial</option>
                  <option>Music Video</option>
                  <option>Event</option>
                  <option>Documentary</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium flex items-center gap-2">Shoot Date <Calendar size={16} className="text-black/60"/></label>
                <input type="date" required value={form.shoot_date} onChange={e=>setForm({...form, shoot_date:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" />
              </div>
              <div>
                <label className="text-sm font-medium">Budget</label>
                <input value={form.budget} onChange={e=>setForm({...form, budget:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="$2,000 - $8,000" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Requirements</label>
                <textarea required rows={5} value={form.requirements} onChange={e=>setForm({...form, requirements:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="Describe the shoot: locations, hours, deliverables, references" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Additional Notes</label>
                <textarea rows={4} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full p-3 rounded-md border border-black/10 bg-white" placeholder="Anything else you'd like to add" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} CineFrame Studio. All rights reserved.</p>
          <a href="#contact" className="px-4 py-2 rounded-md border border-black/10 hover:border-black/30">Get a Quote</a>
        </div>
        <div className="flex items-center justify-center sm:justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-black/70">
            <Mail size={16} /> hello@cineframe.studio
            <span className="mx-2">•</span>
            <Phone size={16} /> +1 (555) 012-3456
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border hover:bg-gray-50"><Instagram size={18}/></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full border hover:bg-gray-50"><Youtube size={18}/></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full border hover:bg-gray-50"><Twitter size={18}/></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full border hover:bg-gray-50"><Facebook size={18}/></a>
          </div>
        </div>
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
