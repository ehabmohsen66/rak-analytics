import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
export default function Modal({isOpen,onClose,title,children,wide=false}){
 const ref=useRef(null);const titleId=useId();const close=useRef(onClose);close.current=onClose;
 useEffect(()=>{
  if(!isOpen)return;
  const previous=document.activeElement;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';
  const frame=requestAnimationFrame(()=>ref.current?.querySelector('button')?.focus());
  const key=e=>{if(e.key==='Escape'){e.preventDefault();close.current();}if(e.key==='Tab'){const nodes=[...(ref.current?.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]')||[])].filter(el=>!el.closest('[hidden]'));if(!nodes.length){e.preventDefault();return;}const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&(document.activeElement===first||!ref.current.contains(document.activeElement))){e.preventDefault();last.focus();}else if(!e.shiftKey&&(document.activeElement===last||!ref.current.contains(document.activeElement))){e.preventDefault();first.focus();}}};
  document.addEventListener('keydown',key);return()=>{cancelAnimationFrame(frame);document.body.style.overflow=overflow;document.removeEventListener('keydown',key);previous?.focus?.();};
 },[isOpen]);
 if(!isOpen)return null;
 return createPortal(<div className="modal-portal"><div className="signal-modal-scrim" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><section ref={ref} className={`signal-modal ${wide?'wide':''}`} role="dialog" aria-modal="true" aria-labelledby={titleId}><header className="signal-modal-header"><h2 id={titleId}>{title}</h2><button aria-label="Close dialog" onClick={onClose}><X size={19}/></button></header><div className="signal-modal-body">{children}</div></section></div></div>,document.body);
}
