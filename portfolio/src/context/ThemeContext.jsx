import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    bg: '#0b0f19',
    accent: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
    gradient: 'from-cyan-400 via-indigo-400 to-purple-500',
    border: 'border-cyan-500/30'
  },
  matrix: {
    id: 'matrix',
    name: 'Matrix Code',
    bg: '#050a06',
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.25)',
    gradient: 'from-emerald-400 via-teal-400 to-green-500',
    border: 'border-emerald-500/30'
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight Sapphire',
    bg: '#030712',
    accent: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.25)',
    gradient: 'from-blue-400 via-indigo-400 to-cyan-400',
    border: 'border-blue-500/30'
  },
  synthwave: {
    id: 'synthwave',
    name: 'Synthwave Sunset',
    bg: '#0f0817',
    accent: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.25)',
    gradient: 'from-pink-500 via-purple-400 to-amber-400',
    border: 'border-pink-500/30'
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved && THEMES[saved]) return saved;
    }
    return 'cyberpunk';
  });

  const [bgMode, setBgMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_bg_mode');
      if (saved) return saved;
    }
    return 'neural';
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_sound');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  // OS Window State Management
  const [openWindows, setOpenWindows] = useState({
    projects: false,
    skills: false,
    experience: false,
    contact: false,
    about: false
  });
  const [activeWindow, setActiveWindow] = useState(null);

  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio_bg_mode', bgMode);
  }, [bgMode]);

  useEffect(() => {
    localStorage.setItem('portfolio_sound', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  const changeTheme = (newTheme) => {
    if (THEMES[newTheme]) {
      setTheme(newTheme);
    }
  };

  const toggleWindow = (winId) => {
    setOpenWindows(prev => {
      const nextState = { ...prev, [winId]: !prev[winId] };
      if (nextState[winId]) setActiveWindow(winId);
      else if (activeWindow === winId) setActiveWindow(null);
      return nextState;
    });
  };

  const openWindow = (winId) => {
    setOpenWindows(prev => ({ ...prev, [winId]: true }));
    setActiveWindow(winId);
  };

  const closeWindow = (winId) => {
    setOpenWindows(prev => ({ ...prev, [winId]: false }));
    if (activeWindow === winId) setActiveWindow(null);
  };

  const bringToFront = (winId) => {
    setActiveWindow(winId);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig: THEMES[theme],
        changeTheme,
        bgMode,
        setBgMode,
        soundEnabled,
        setSoundEnabled,
        THEMES,
        openWindows,
        activeWindow,
        toggleWindow,
        openWindow,
        closeWindow,
        bringToFront
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
