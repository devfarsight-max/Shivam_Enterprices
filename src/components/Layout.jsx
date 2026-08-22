import {useState,useLayoutEffect,useEffect} from 'react'
import {NavLink,Link,Outlet,useLocation} from 'react-router-dom'
import {ArrowRight,Menu,X} from 'lucide-react'
import AdditionalContent from './AdditionalContent'
import HomeContent from './HomeContent'
import AboutContent from './AboutContent'

const links=[['/','Home'],['/about','About'],['/products','Products'],['/infrastructure','Infrastructure'],['/contact','Contact']]

export default function Layout(){
 const[open,setOpen]=useState(false)
 const[scrolled,setScrolled]=useState(false)
 const{pathname}=useLocation()
 useLayoutEffect(()=>{history.scrollRestoration='manual';window.scrollTo(0,0)},[pathname])
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>72);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[])
 return <div className="site-shell">
  <header className={`navbar ${scrolled?'navbar-scrolled':''}`}>
   <Link className="brand" to="/" aria-label="Shivam Enterprises home"><img src="/shivam-enterprises-logo.png" alt="Shivam Enterprises"/></Link>
   <nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{links.slice(0,-1).map(([to,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}<NavLink className="nav-cta" to="/contact" onClick={()=>setOpen(false)}>Get in touch <ArrowRight size={16}/></NavLink></nav>
   <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open?<X/>:<Menu/>}</button>
  </header>
  <main><Outlet/>{pathname==='/'&&<HomeContent/>}{pathname==='/about'&&<AboutContent/>}<AdditionalContent/></main>
  <footer><div className="footer-main"><Link className="brand footer-brand" to="/"><img src="/shivam-enterprises-logo.png" alt="Shivam Enterprises"/></Link><p>Organised trading of quality rice and paddy from Gondia, Maharashtra.</p><div className="footer-links">{links.map(([to,label])=><Link key={to} to={to}>{label}</Link>)}</div></div><div className="footer-bottom"><span>Copyright {new Date().getFullYear()} SHIVAM ENTERPRISES. All rights reserved.</span><span>Gondia • Maharashtra • India</span></div></footer>
 </div>
}
