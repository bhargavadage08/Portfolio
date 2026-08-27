import React, { useState } from 'react';
import { X, Minus, Square, Maximize2, Minimize2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { soundFx } from '../utils/useSound';

export default function OSWindow({ id, title, icon: Icon, children, isOpen, onClose }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const { activeWindow, bringToFront } = useTheme();

  if (!isOpen) return null;

  const isFocused = activeWindow === id;

  const toggleMaximize = () => {
    soundFx.playClick();
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      onClick={() => bringToFront(id)}
      className={`fixed z-30 transition-all duration-300 animate-in fade-in zoom-in-95 ${
        isMaximized
          ? 'inset-0 pt-10 pb-20 px-4'
          : 'top-16 bottom-24 left-4 right-4 sm:left-12 sm:right-12 md:left-24 md:right-24 max-w-5xl mx-auto'
      }`}
      style={{ zIndex: isFocused ? 35 : 30 }}
    >
      <div className="w-full h-full glass-card rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden">
        
        {/* OS Window Titlebar */}
        <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            
            {/* Control Buttons (Red, Yellow, Green) */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => { e.stopPropagation(); soundFx.playClick(); onClose(); }}
                className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
                title="Close Window"
              />
              <button
                onClick={(e) => { e.stopPropagation(); soundFx.playClick(); onClose(); }}
                className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors"
                title="Minimize Window"
              />
              <button
                onClick={(e) => { e.stopPropagation(); toggleMaximize(); }}
                className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
                title="Maximize Window"
              />
            </div>

            {/* Window Title */}
            <div className="flex items-center gap-2 ml-3">
              {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
              <span className="text-xs font-mono font-bold text-slate-200">{title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMaximize}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => { soundFx.playClick(); onClose(); }}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Window Content View */}
        <div className="flex-1 overflow-y-auto bg-[#090d16]/95 text-slate-100 p-6">
          {children}
        </div>

      </div>
    </div>
  );
}
