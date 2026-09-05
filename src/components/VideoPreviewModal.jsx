import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Modal from './Modal';
import AnalyticsPreview from './AnalyticsPreview';
export default function VideoPreviewModal({isOpen,onClose,title,openDemoModal}){return <Modal isOpen={isOpen} onClose={onClose} title={title||'Explore the analytics experience'} wide><p>Explore this illustrative workspace. Switch business views, choose a time range, and select a month to inspect the sample data.</p>{isOpen&&<AnalyticsPreview/>}<div className="hero-actions"><button className="signal-button orange" onClick={()=>{onClose();openDemoModal(title||'Guided dashboard demo');}}>Request a guided demo<ArrowUpRight size={17}/></button><span className="modal-inline-note">Sample preview. No live business data.</span></div></Modal>;}
