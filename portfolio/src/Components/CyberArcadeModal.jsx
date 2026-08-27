import React, { useState, useEffect } from 'react';
import { Gamepad2, X, Trophy, RefreshCw, CheckCircle2, Award, Zap, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/useSound';

export default function CyberArcadeModal({ isOpen, onClose }) {
  const [gameState, setGameState] = useState('start'); // 'start' | 'playing' | 'ended'
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = PORTFOLIO_DATA.arcadeQuestions || [];

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState('ended');
            soundFx.playSuccess();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  if (!isOpen) return null;

  const startGame = () => {
    soundFx.playLaunch();
    setScore(0);
    setTimeLeft(45);
    setCurrentIdx(0);
    setStreak(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setGameState('playing');
  };

  const handleAnswer = (optionIdx) => {
    if (selectedOption !== null) return; // Prevent double click
    setSelectedOption(optionIdx);
    
    const currentQ = questions[currentIdx];
    const correct = optionIdx === currentQ.answer;
    setIsCorrect(correct);

    if (correct) {
      soundFx.playSuccess();
      const points = 100 + streak * 25;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
    } else {
      soundFx.playBeep(200, 0.2);
      setStreak(0);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      if (currentIdx + 1 < questions.length) {
        setCurrentIdx(prev => prev + 1);
      } else {
        // Loop back questions if time left
        setCurrentIdx(0);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-xl w-full rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl space-y-0 relative">
        
        {/* Header */}
        <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-none">Cyber Bug Defense Arcade</h3>
              <p className="text-[11px] text-slate-400">Test your developer trivia knowledge & earn a score badge</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 bg-[#090d16]">
          
          {gameState === 'start' && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-0.5 mx-auto shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-white">Ready for the 45s Code Defense?</h4>
                <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
                  Answer developer logic & tech stack questions as fast as possible. Build streaks to gain score multipliers!
                </p>
              </div>

              <button
                onClick={startGame}
                className="px-8 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Start Cyber Arcade Game
              </button>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="space-y-6">
              {/* Game Stats Bar */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Trophy className="w-4 h-4" />
                  <span>Score: {score}</span>
                </div>

                <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Streak: {streak}x</span>
                </div>

                <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                  <span>Time: {timeLeft}s</span>
                </div>
              </div>

              {/* Current Question */}
              {questions[currentIdx] && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-semibold text-white">
                    <span className="text-cyan-400 font-mono text-xs block mb-1">Question {currentIdx + 1} of {questions.length}</span>
                    {questions[currentIdx].question}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {questions[currentIdx].options.map((opt, i) => {
                      let btnStyle = 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:bg-slate-800/60';
                      if (selectedOption === i) {
                        btnStyle = isCorrect ? 'bg-emerald-950 border-emerald-500 text-emerald-200' : 'bg-rose-950 border-rose-500 text-rose-200';
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswer(i)}
                          disabled={selectedOption !== null}
                          className={`p-3.5 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {selectedOption === i && (
                            <span>{isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {gameState === 'ended' && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Game Complete!</span>
                <h4 className="text-3xl font-extrabold text-white">Final Score: {score} PTS</h4>
                <p className="text-slate-400 text-xs">
                  {score > 400 ? '⭐ Certified Master Cyber Engineer Badge Earned!' : 'Great effort! Play again to beat your high score.'}
                </p>
              </div>

              {/* Badge Preview */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left max-w-sm mx-auto space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-slate-800 pb-2">
                  <span>DEV CERTIFICATE</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-slate-300">Holder: Guest Visitor</div>
                <div className="text-slate-300">Score: {score} Points</div>
                <div className="text-slate-500 text-[10px]">Verified by Alex Dev Cyber Portfolio v2.4</div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={startGame}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-900 bg-gradient-to-r from-cyan-400 to-indigo-400 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> Play Again
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700"
                >
                  Close Arcade
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
