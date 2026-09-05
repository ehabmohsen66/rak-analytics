import React from 'react';
import Modal from './Modal';
import InquiryForm from './InquiryForm';
export default function DemoRequestModal({isOpen,onClose,topic}){return <Modal isOpen={isOpen} onClose={onClose} title="Let’s see what your data can do."><p>Tell us where you want to go. Our team can help you find the right dashboard, product, or service.</p>{isOpen&&<InquiryForm key={topic} topic={topic}/>}</Modal>;}
