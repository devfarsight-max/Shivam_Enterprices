import { motion } from 'motion/react'
export default function PageHero({eyebrow,title,accent,text}){return <section className="page-hero"><div className="page-hero-bg"/><motion.div className="page-hero-content" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}><span>{eyebrow}</span><h1>{title}<br/><em>{accent}</em></h1><p>{text}</p></motion.div></section>}
