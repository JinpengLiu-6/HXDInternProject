import React from 'react';

function Dashboard({ onStart }) {
  return (
    <section className="min-h-[860px] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                analytics
              </span>
              Profitability Ledger
            </div>
            <div className="max-w-2xl space-y-5">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Analyze your operational health with architectural precision
              </h1>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                HXD Expertise gives restaurant founders clearer cash flow visibility, sharper revenue intelligence, and a polished startup-grade dashboard experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onStart}
                className="editorial-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-blue-950/20 transition hover:scale-[1.01]"
              >
                Open calculator
              </button>
              <a
                href="#insights"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
              >
                View insights
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-slate-100 to-transparent opacity-80 blur-3xl" />
            <div className="rounded-[2.5rem] border border-slate-200 bg-white/95 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
              <div className="rounded-[2rem] bg-[#f3faf6] p-8 text-slate-950 shadow-xl dark:bg-slate-900 dark:text-white">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-300">Monthly net profit</p>
                    <p className="mt-3 text-[2.75rem] font-semibold leading-none">$248,500</p>
                  </div>
                  <div className="rounded-3xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900">
                    +16.4%
                  </div>
                </div>
                <div className="mt-8 grid gap-4 text-slate-700 dark:text-slate-300">
                  <div className="rounded-[1.75rem] bg-white p-5 shadow-sm dark:bg-slate-950">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Daily surplus</p>
                    <p className="mt-3 text-2xl font-semibold">$432</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-white p-5 shadow-sm dark:bg-slate-950">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Min daily revenue</p>
                      <p className="mt-3 text-xl font-semibold">$185.40</p>
                    </div>
                    <div className="rounded-[1.75rem] bg-white p-5 shadow-sm dark:bg-slate-950">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Risk score</p>
                      <p className="mt-3 text-xl font-semibold">12%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 text-slate-950 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Full report</p>
                  <h3 className="mt-4 text-2xl font-semibold">Get your profitability report</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Download a ready-to-share overview of revenue, margins, and operating burn.
                  </p>
                </div>
                <div className="border-t border-slate-200 px-6 py-5 dark:border-slate-800">
                  <button
                    type="button"
                    className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/20 hover:opacity-95 transition"
                  >
                    Export detailed report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
