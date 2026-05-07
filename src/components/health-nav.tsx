'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { id: 'stroke', label: '认识中风' },
  { id: 'hypertension', label: '防治高血压' },
  { id: 'longevity', label: '养生长寿' },
  { id: 'century', label: '百年之道' },
];

export function HealthNav() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const current = sections.find((section) => {
        if (!section.el) return false;
        const rect = section.el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-md backdrop-blur-md dark:bg-emerald-950/90'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-lg font-bold text-emerald-800 dark:text-emerald-300"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="shrink-0"
          >
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <path
              d="M16 8c-1 3-4 5-4 8s2 5 4 8c2-3 4-5 4-8s-3-5-4-8z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M10 14c2 1 4 1 6 1s4 0 6-1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          百年健康
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100'
                  : scrolled
                    ? 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-emerald-900 dark:hover:text-emerald-300'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Mobile nav */}
        <div className="flex items-center gap-1 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100'
                  : scrolled
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-white/90'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
