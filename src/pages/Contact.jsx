import {MapPin,Mail,Phone,Clock} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'

const details = [
  {icon: MapPin, label: 'Business location', value: 'Gondia, Maharashtra, India'},
  {icon: Mail, label: 'Email', value: 'contact@shivamenterprises.in', href: 'mailto:contact@shivamenterprises.in'},
  {icon: Phone, label: 'Phone', value: 'Contact number to be updated'},
  {icon: Clock, label: 'Business hours', value: 'Monday–Saturday · 9:00 AM–6:00 PM'},
]

export default function Contact(){
 return <>
  <PageHero eyebrow="Contact us" title="Start a dependable" accent="business relationship." text="Connect with our team to discuss sourcing, volumes and delivery."/>
  <section className="page-section contact-page contact-details-only">
   <div className="contact-heading">
    <SectionLabel number="01">Get in touch</SectionLabel>
    <h2>Let&apos;s talk about<br/><em>your requirement.</em></h2>
    <p className="contact-intro">We welcome conversations with rice millers, exporters, institutions and procurement partners.</p>
   </div>
   <div className="contact-details">
    {details.map(({icon:Icon,label,value,href})=><div key={label}>
     <Icon aria-hidden="true"/>
     <span><b>{label}</b>{href?<a href={href}>{value}</a>:value}</span>
    </div>)}
   </div>
  </section>
 </>
}
