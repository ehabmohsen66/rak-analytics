import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import Modal from './Modal';
import { SITE_INFO } from '../data/siteData';
export default function SubscriberPortalModal({isOpen,onClose,openDemoModal}){return <Modal isOpen={isOpen} onClose={onClose} title="Your client workspace"><ShieldCheck size={32} color="#ef6000" style={{marginBottom:20}}/><p>Your client workspace brings subscribed dashboards, reports, and account information together. Contact the RAK team for your organization’s access link.</p><p className="modal-inline-note">Account sign-in is not connected in this website preview.</p><div className="hero-actions"><button className="signal-button dark" onClick={()=>{onClose();openDemoModal('Client workspace access');}}>Request access<ArrowUpRight size={17}/></button><a className="signal-text-link ink" href={`mailto:${SITE_INFO.email}`}>Contact support<ArrowUpRight size={16}/></a></div></Modal>;}
