import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import Calculators from './pages/Calculators';
import Insights from './pages/Insights';

const validPages = ['dashboard', 'calculators', 'insights'];

function App() {
  const [theme, setTheme] = useState('light');
  const [page, setPage] = useState('dashboard');

  useEffect(() => {
    const initialHash = window.location.hash.replace('#', '');
    if (validPages.includes(initialHash)) {
      setPage(initialHash);
    } else {
      window.location.hash = '#dashboard';
      setPage('dashboard');
    }

    const onHashChange = () => {
      const nextPage = window.location.hash.replace('#', '');
      if (validPages.includes(nextPage)) {
        setPage(nextPage);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const navItemClasses = (target) =>
    `text-sm font-medium tracking-tight ${
      page === target
        ? 'text-slate-950 dark:text-white border-b-2 border-blue-900 dark:border-blue-400 pb-1'
        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
    } transition-all`;

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/70">
        <nav className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white font-headline">
              HXD Expertise
            </div>
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full border border-slate-300 dark:border-slate-700 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === 'dark' ? 'Light' : 'Dark'} mode
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a href="#dashboard" className={navItemClasses('dashboard')}>
              Dashboard
            </a>
            <a href="#calculators" className={navItemClasses('calculators')}>
              Calculators
            </a>
            <a href="#insights" className={navItemClasses('insights')}>
              Insights
            </a>
            <button
              type="button"
              onClick={() => (window.location.hash = '#calculators')}
              className="editorial-gradient text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-blue-950/10 hover:opacity-95 transition-all"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-28">
        {page === 'dashboard' && <Dashboard onStart={() => (window.location.hash = '#calculators')} />}
        {page === 'calculators' && <Calculators />}
        {page === 'insights' && <Insights />}
      </main>

      <footer className="w-full py-12 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">© 2024 HXD Expertise. All rights reserved.</div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-500 dark:text-slate-400">
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#dashboard">
              Privacy Policy
            </a>
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#dashboard">
              Terms of Service
            </a>
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#dashboard">
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
