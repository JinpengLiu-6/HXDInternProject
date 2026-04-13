import React from 'react';

function Insights() {
  return (
    <section id="insights" className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-slate-400 text-xs">Insights</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Focus on the metrics that matter.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Turn data into decisions with focused operational insights for food costs, labor, gross margin, and customer conversion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: 'insights',
              title: 'Customer conversion',
              copy: 'See how small shifts in average spend and traffic affect margin and efficiency in real time.',
            },
            {
              icon: 'schedule',
              title: 'Operating cadence',
              copy: 'Identify which weeks and dayparts are profitable so you can optimize staffing and menu pricing.',
            },
            {
              icon: 'account_balance_wallet',
              title: 'Cash runway',
              copy: 'Understand your runway line-by-line and project funding needs with built-in margin scenarios.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/95">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0f4bae] text-white shadow-lg shadow-[#0f4bae]/20">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
