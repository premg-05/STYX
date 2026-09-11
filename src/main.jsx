import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Mail,
  MessageCircle,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  X,
} from 'lucide-react'
import './styles.css'

const imageBase = 'https://images.unsplash.com/'

const categories = [
  { name: 'Necklaces', note: 'SIGNATURE CHAINS', image: `${imageBase}photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85` },
  { name: 'Bracelets', note: 'WRIST STORIES', image: `${imageBase}photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=85` },
  { name: 'Rings', note: 'MARK YOUR OWN', image: `${imageBase}photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85` },
  { name: 'Accessories', note: 'THE FINISHING TOUCH', image: `${imageBase}photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85` },
]

function Logo() {
  return <a className="logo" href="#top" aria-label="STYX home"><img className="logo-image" src="/styx-logo.svg" alt="STYX" /></a>
}

function InstagramMark() {
  return <svg className="instagram-mark" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" /></svg>
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <nav className="navbar" aria-label="Main navigation">
        <Logo />
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['Home', 'Shop', 'Collections', 'About'].map((link) => <a href={`#${link.toLowerCase()}`} key={link} onClick={() => setMenuOpen(false)}>{link}</a>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search"><Search size={19} strokeWidth={1.5} /></button>
          <button className="icon-button bag-button" aria-label="Shopping bag"><ShoppingBag size={19} strokeWidth={1.5} /><small>0</small></button>
          <button className="icon-button menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" role="img" aria-label="Minimal silver necklace on a dark surface" />
      <div className="hero-shade" />
      <div className="hero-content page-pad">
        <p className="eyebrow reveal">EST 2024 <span /> COPENHAGEN / EVERYWHERE</p>
        <h1 className="hero-title reveal delay-1">STREET<br /><em>LUXURY</em></h1>
        <p className="hero-copy reveal delay-2">Sculptural pieces considered with care<br />Made for the moments between words</p>
        <div className="hero-buttons reveal delay-3"><a className="button button-light" href="#shop">Shop collection <ArrowUpRight size={15} /></a><a className="text-link" href="#about">Explore STYX <ArrowDownRight size={15} /></a></div>
      </div>
      <div className="hero-index">01 <span /> 04</div>
      <a className="scroll-cue" href="#categories">Scroll to discover <ArrowDownRight size={15} /></a>
    </section>
  )
}

function SectionHeading({ kicker, title, action }) {
  const actionHref = action === 'View all pieces' ? 'https://www.instagram.com/_styx.in' : '#shop'
  const actionProps = action === 'View all pieces' ? { target: '_blank', rel: 'noreferrer' } : {}

  return <div className="section-heading"><div><p className="eyebrow">{kicker}</p><h2>{title}</h2></div>{action && <a className="text-link" href={actionHref} {...actionProps}>{action} <ArrowUpRight size={15} /></a>}</div>
}

function Categories() {
  return <section className="section page-pad categories" id="categories"><SectionHeading kicker="01 / THE EDIT" title={<>Find your<br /><em>signature</em></>} action="View all pieces" /><div className="category-grid">{categories.map((category, index) => <a className="category-card" href="#shop" key={category.name}><div className="category-image"><img src={category.image} alt="" loading="lazy" /><span>0{index + 1}</span></div><div className="category-meta"><div><p>{category.note}</p><h3>{category.name}</h3></div><ArrowUpRight size={19} /></div></a>)}</div></section>
}

function Statement() {
  return <section className="statement page-pad" id="about"><img className="statement-star" src="/gold-star.svg" alt="" /><div className="statement-copy"><p className="eyebrow">03 / A POINT OF VIEW</p><h2>NOT MADE<br /><em>FOR EVERYONE</em></h2><p>STYX exists for those who choose their own direction Quiet confidence Distinct identity No unnecessary noise</p><a className="text-link" href="https://chat.whatsapp.com/BTVYwF9puZS6ZbGH6I0iwr?mode=gi_t" target="_blank" rel="noreferrer">Read our story <ArrowUpRight size={15} /></a></div></section>
}

function CollectionBanner() {
  return <section className="collection-banner"><div className="collection-image" /><div className="collection-shade" /><div className="collection-content page-pad"><p className="eyebrow">04 / NEW SEASON</p><h2>THE AFTER<br /><em>DARK COLLECTION</em></h2><a className="button button-outline" href="#shop">Discover collection <ArrowUpRight size={15} /></a></div><span className="collection-caption">A study in shadow &amp; light / 2024</span></section>
}

function Newsletter() {
  return <section className="newsletter page-pad"><div><p className="eyebrow">STYX / PRIVATE ACCESS</p><h2>ENTER THE<br /><em>WORLD OF STYX</em></h2></div><div className="newsletter-form"><p>Get first access to new drops collections and stories</p><form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" /><button type="submit" aria-label="Join newsletter">Join <ArrowUpRight size={15} /></button></form><small>By subscribing you agree to our privacy policy</small></div></section>
}

function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.history.replaceState(null, '', '#top')
  }

  return <footer className="footer page-pad" id="footer"><div className="footer-top"><Logo /><p>Quiet pieces for<br />loud identities</p><a className="back-top" href="#top" onClick={scrollToTop}>Back to top <ArrowUpRight size={15} /></a></div><div className="footer-links"><div className="footer-contact"><a href="https://instagram.com/_styx.in" target="_blank" rel="noreferrer"><InstagramMark />_styx.in</a><a href="tel:+919025642965"><Phone size={15} strokeWidth={1.5} />+91 90256 42965</a><a href="mailto:styxofficial.ity@gmail.com?subject=STYX%20Enquiry&body=Hello%20STYX%2C%0A%0A"><Mail size={15} strokeWidth={1.5} />styxofficial.ity@gmail.com</a></div></div><div className="footer-bottom"><span>© 2024 STYX WORLD</span><span>MADE FOR THOSE WHO MOVE DIFFERENTLY</span><Camera size={17} strokeWidth={1.5} /></div></footer>
}

function App() {
  return <><Navbar /><main><Hero /><Categories /><Statement /><CollectionBanner /><Newsletter /></main><Footer /></>
}

export default App

createRoot(document.getElementById('root')).render(<App />)
