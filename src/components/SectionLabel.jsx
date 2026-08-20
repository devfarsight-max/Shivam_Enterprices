export default function SectionLabel({number,children,light=false}){return <div className={`section-label ${light?'light-label':''}`}><span>{number}</span>{children}</div>}
