import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Bot, TrendingUp, LayoutDashboard, Boxes } from 'lucide-react';
import AnalyticsPreview from './AnalyticsPreview';
const capabilities = [
  {name:'Private AI',icon:ShieldCheck,copy:'Your intelligence. Your environment. Keep control of your business data with AI designed for your organization.'},
  {name:'Agentic AI',icon:Bot,copy:'Move from understanding to execution. Connect agents to business processes and put insights to work.'},
  {name:'Predictive analytics',icon:TrendingUp,copy:'Look beyond what happened. Use historical and current data to see emerging trends and plan your next move.'},
  {name:'Business dashboards',icon:LayoutDashboard,copy:'See the measures that matter. Bring finance, sales, and operational reporting into a clearer picture.'},
  {name:'ERP integration',icon:Boxes,copy:'Connect the systems your business runs on. Unify data and make reporting part of the everyday workflow.'}
];
export default function USPsSection({setActiveTab,openDemoModal}){
 const [active,setActive]=useState(3);
 const item=capabilities[active];
 return <section id="intelligence" className="intelligence-section"><div className="signal-container"><div className="section-heading reveal"><div><span className="signal-eyebrow">01 / THE INTELLIGENCE LAYER</span><h2>See further.<br/><span className="muted-heading">Decide with confidence.</span></h2></div><p>From disconnected data to a shared understanding. Bring your people, systems, and decisions together with RAK Analytics.</p></div>
 <div className="capability-selector reveal" aria-label="Explore capabilities">{capabilities.map((c,i)=><button key={c.name} onClick={()=>setActive(i)} className={active===i?'active':''} aria-pressed={active===i}><c.icon size={19}/>{c.name}</button>)}</div><div className="capability-description" aria-live="polite"><span>{item.copy}</span><button onClick={openDemoModal}>Let’s explore it <ArrowUpRight size={16}/></button></div>
 <div className="reveal"><AnalyticsPreview onExplore={()=>setActiveTab('solutions')}/></div><div className="demo-footnote"><span><i/> Explore the workspace: switch views, time ranges, and months.</span><span>Illustrative dashboard · sample data</span></div></div></section>;
}
