'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-[var(--military-dark)]/80 via-[var(--military-base)]/70 to-[var(--military-dark)]/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,255,65,0.1)]">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between h-16 max-w-[90%] mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border-2 border-[var(--military-accent)] flex items-center justify-center bg-[var(--military-accent)]/5 group-hover:bg-[var(--military-accent)]/10 transition-all">
              <span className="text-[var(--military-accent)] font-bold">P</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--military-accent)] tracking-wider uppercase group-hover:text-[var(--military-tactical)] transition-colors">
              PRATHAM
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="group relative px-5 py-2 uppercase text-sm font-semibold tracking-wider transition-all duration-300 text-[var(--military-text)] hover:text-[var(--military-accent)]"
              >
                <span className="relative z-10">[{item.name}]</span>
                <div className="absolute inset-0 bg-[var(--military-accent)]/0 group-hover:bg-[var(--military-accent)]/10 border border-transparent group-hover:border-[var(--military-accent)]/30 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--military-accent)] hover:bg-[var(--military-olive)]/30 p-2 border border-[var(--military-border)] transition-all"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[var(--military-dark)]/95 backdrop-blur-xl">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 uppercase text-sm font-semibold tracking-wider border border-[var(--military-border)] hover:border-[var(--military-accent)] text-[var(--military-text)] hover:text-[var(--military-accent)] hover:bg-[var(--military-accent)]/10 transition-all"
              >
                [{item.name}]
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;