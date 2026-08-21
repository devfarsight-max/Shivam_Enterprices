import {motion} from 'motion/react'
import {ArrowRight,Building2,Globe2,Landmark,Route,SearchCheck,Truck,Warehouse} from 'lucide-react'
import {Link} from 'react-router-dom'
import SectionLabel from './SectionLabel'

const steps=[
 {icon:SearchCheck,title:'Requirement review',text:'We understand the product, quantity, quality expectations, destination and delivery schedule.'},
 {icon:Route,title:'Source matching',text:'Our regional network helps us identify suitable produce and commercially practical supply options.'},
 {icon:Warehouse,title:'Handling & storage',text:'Organised handling and planned storage help preserve produce quality before dispatch.'},
 {icon:Truck,title:'Coordinated delivery',text:'Documentation, loading and transport are aligned for reliable movement to the buyer.'},
]
const buyers=[
 {icon:Building2,title:'Rice millers',text:'Consistent paddy sourcing to support processing schedules and production continuity.'},
 {icon:Globe2,title:'Export-linked buyers',text:'Quality-focused rice and paddy supply for businesses serving wider domestic and overseas markets.'},
 {icon:Landmark,title:'Institutions & programmes',text:'Structured supply readiness for institutional demand and government procurement opportunities.'},
]

export default function HomeContent(){return <>
 <section className="home-process page-section"><div className="home-process-head"><div><SectionLabel number="04">How we work</SectionLabel><h2>From first enquiry to<br/><em>final delivery.</em></h2></div><p>Our process is designed to reduce uncertainty for buyers. Clear requirements, dependable sourcing and active coordination keep every transaction moving with confidence.</p></div><div className="home-step-grid">{steps.map(({icon:Icon,title,text},i)=><motion.article key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><div><span>{String(i+1).padStart(2,'0')}</span><Icon/></div><h3>{title}</h3><p>{text}</p></motion.article>)}</div></section>
 <section className="home-buyers page-section"><div className="buyer-copy"><SectionLabel number="05" light>Markets we serve</SectionLabel><h2>One network.<br/><em>Many opportunities.</em></h2><p>Our location in Gondia places us close to an active rice-producing region. We use that local understanding to serve established buyers and develop new market relationships.</p><Link className="button button-gold" to="/contact">Discuss your requirement <ArrowRight size={18}/></Link></div><div className="home-buyer-list">{buyers.map(({icon:Icon,title,text})=><article key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
 <section className="home-growth page-section"><div className="growth-statement"><span>Our next chapter</span><h2>Strengthening capacity.<br/>Expanding <em>possibility.</em></h2></div><div className="growth-copy"><p>The proposed business expansion will improve procurement capacity, storage facilities and inventory management. This will enable SHIVAM ENTERPRISES to respond to increasing market demand with greater speed and operational control.</p><p>As trading volumes increase, the project will support the agricultural supply chain, generate employment opportunities and create lasting value for customers, suppliers and business partners.</p><Link className="text-link" to="/infrastructure">Explore our growth plan <ArrowRight size={18}/></Link></div></section>
 </>}
