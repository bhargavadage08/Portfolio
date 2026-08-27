import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} Developer Portfolio. Built with React & Tailwind CSS.
    </footer>
  );
}
