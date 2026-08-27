import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { soundFx } from '../utils/useSound';

export default function InteractiveTerminal({ isOpen, onClose, onOpenGame }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Alex Dev Cyber CLI v2.4.0 [Type "help" for commands]' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const { changeTheme, bgMode, setBgMode, soundEnabled, setSoundEnabled } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim();
      if (!rawCmd) return;

      soundFx.playClick();
      const newCmdHistory = [...cmdHistory, rawCmd];
      setCmdHistory(newCmdHistory);
      setHistoryIndex(-1);

      const parts = rawCmd.split(' ');
      const mainCmd = parts[0].toLowerCase();
      const arg1 = parts[1]?.toLowerCase();

      const newEntries = [{ type: 'input', text: `${PORTFOLIO_DATA.personal.terminalPrompt} ${rawCmd}` }];

      switch (mainCmd) {
        case 'help':
          newEntries.push({
            type: 'output',
            text: `Available Terminal Commands:
  • help       : Display available commands
  • bio        : Display developer bio & location
  • skills     : Output technical stack skills
  • projects   : View featured projects list
  • contact    : Display email & social contact info
  • theme      : Change theme [cyberpunk | matrix | midnight | synthwave]
  • matrix     : Toggle Matrix Digital Rain background
  • game       : Launch 45s Cyber Arcade game
  • clear      : Clear terminal screen
  • whoami     : Display guest session info`
          });
          break;

        case 'bio':
        case 'cat':
          if (mainCmd === 'cat' && arg1 !== 'bio' && arg1 !== 'profile.json') {
            newEntries.push({ type: 'error', text: `cat: ${arg1 || ''}: No such file. Try "cat bio"` });
          } else {
            newEntries.push({
              type: 'output',
              text: `[PROFILE] ${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.title}
Status  : ${PORTFOLIO_DATA.personal.status}
Location: ${PORTFOLIO_DATA.personal.location}
Bio     : ${PORTFOLIO_DATA.personal.bio}`
            });
          }
          break;

        case 'skills':
          const skillList = [
            ...PORTFOLIO_DATA.skills.frontend,
            ...PORTFOLIO_DATA.skills.backend,
            ...PORTFOLIO_DATA.skills.devops
          ].map(s => `  • ${s.name.padEnd(25)} [${'='.repeat(Math.floor(s.level / 10))}${' '.repeat(10 - Math.floor(s.level / 10))}] ${s.level}%`).join('\n');
          newEntries.push({ type: 'output', text: `TECHNICAL STACK COMPETENCIES:\n${skillList}` });
          break;

        case 'projects':
          const projList = PORTFOLIO_DATA.projects.map(p => `  • ${p.title} (${p.category}) -> Tags: ${p.tags.join(', ')}`).join('\n');
          newEntries.push({ type: 'output', text: `FEATURED PROJECTS:\n${projList}` });
          break;

        case 'contact':
          newEntries.push({
            type: 'output',
            text: `CONTACT DIRECTORY:
  • Email   : ${PORTFOLIO_DATA.personal.email}
  • GitHub  : ${PORTFOLIO_DATA.personal.github}
  • LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
  • API Host: http://localhost:8000/api/contact`
          });
          break;

        case 'theme':
          if (['cyberpunk', 'matrix', 'midnight', 'synthwave'].includes(arg1)) {
            changeTheme(arg1);
            newEntries.push({ type: 'output', text: `[SUCCESS] Theme updated to "${arg1}".` });
          } else {
            newEntries.push({ type: 'error', text: 'Usage: theme [cyberpunk | matrix | midnight | synthwave]' });
          }
          break;

        case 'matrix':
          setBgMode(bgMode === 'matrix' ? 'neural' : 'matrix');
          newEntries.push({ type: 'output', text: `[SUCCESS] Matrix rain background ${bgMode === 'matrix' ? 'disabled' : 'enabled'}.` });
          break;

        case 'game':
        case 'play':
          newEntries.push({ type: 'output', text: 'Launching Cyber Arcade...' });
          onOpenGame();
          break;

        case 'clear':
          setHistory([]);
          setInputVal('');
          return;

        case 'whoami':
          newEntries.push({ type: 'output', text: 'guest@portfolio-client: privileged visitor session [authenticated]' });
          break;

        default:
          newEntries.push({ type: 'error', text: `zsh: command not found: ${rawCmd}. Type "help" for options.` });
          break;
      }

      setHistory(prev => [...prev, ...newEntries]);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex < cmdHistory.length - 1 ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`glass-card rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
          isExpanded ? 'w-full h-full max-w-none' : 'max-w-3xl w-full h-[520px]'
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5 font-bold">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              alex@dev-station: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Output */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-5 font-mono text-xs leading-relaxed bg-[#070b12] text-slate-200 overflow-y-auto space-y-2 cursor-text"
        >
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'input' && (
                <div className="text-cyan-400 font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="whitespace-pre-wrap text-slate-300 font-mono text-xs leading-relaxed">{item.text}</pre>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 font-mono">{item.text}</div>
              )}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-1 text-cyan-400 font-bold">
            <span>{PORTFOLIO_DATA.personal.terminalPrompt}</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono text-xs caret-cyan-400"
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Footer info */}
        <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex justify-between">
          <span>Type <span className="text-cyan-400">help</span> for command list</span>
          <span>UTF-8 | ZSH 5.9</span>
        </div>
      </div>
    </div>
  );
}
