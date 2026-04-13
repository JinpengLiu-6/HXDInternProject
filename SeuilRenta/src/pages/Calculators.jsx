import React, { useMemo, useState } from 'react';

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function Calculators() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(120000);
  const [foodCostPct, setFoodCostPct] = useState(35);
  const [laborCostPct, setLaborCostPct] = useState(22);
  const [rent, setRent] = useState(2400);
  const [dailyCustomers, setDailyCustomers] = useState(32);

  const monthlyVariableCost = useMemo(
    () => monthlyRevenue * ((foodCostPct + laborCostPct) / 100),
    [monthlyRevenue, foodCostPct, laborCostPct]
  );

  const monthlyProfit = useMemo(
    () => monthlyRevenue - monthlyVariableCost - rent - 3500,
    [monthlyRevenue, monthlyVariableCost, rent]
  );

  const efficiency = useMemo(() => {
    const ratio = monthlyProfit / monthlyRevenue;
    return Math.min(100, Math.max(0, ratio * 100)).toFixed(0);
  }, [monthlyProfit, monthlyRevenue]);

  const breakEvenDays = useMemo(() => {
    if (monthlyProfit <= 0) return 'Never';
    return Math.max(1, (rent + 3500) / (monthlyProfit / 30)).toFixed(0);
  }, [monthlyProfit, rent]);

  return (
    <section className="min-h-[820px] bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-10">
              <p className="uppercase tracking-[0.35em] text-slate-400 text-xs">Calculator</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Profitability Ledger.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                Analyze your restaurant performance with live assumptions and premium visual cues for every scenario.
              </p>
            </div>

            <div className="space-y-8">
              <label className="block">
                <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <span>Monthly rent (€)</span>
                  <span>{formatCurrency(rent)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={rent}
                  onChange={(e) => setRent(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </label>

              <label className="block">
                <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <span>Average basket (€)</span>
                  <span>{formatCurrency(monthlyRevenue / Math.max(dailyCustomers, 1) / 26)}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="1"
                  value={monthlyRevenue / Math.max(dailyCustomers, 1) / 26}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value) * dailyCustomers * 26)}
                  className="w-full accent-primary"
                />
              </label>

              <label className="block">
                <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <span>Daily customers</span>
                  <span>{dailyCustomers}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="1"
                  value={dailyCustomers}
                  onChange={(e) => setDailyCustomers(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </label>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-slate-900">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Cost percentage</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{foodCostPct + laborCostPct}%</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-slate-900">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Open days / month</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">26</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-100 via-emerald-50 to-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:from-emerald-950 dark:via-slate-950 dark:to-slate-900">
            <div className="rounded-[2rem] border border-white/90 bg-white p-8 shadow-xl dark:border-emerald-900 dark:bg-emerald-950/95">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-300">Your business is safe</p>
                  <p className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">+{formatCurrency(Math.max(monthlyProfit, 0))}</p>
                </div>
                <div className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-900">
                  Stable
                </div>
              </div>

              <div className="mt-8 rounded-[2rem] border border-emerald-200/80 bg-emerald-50 p-6 text-slate-950 shadow-xl dark:border-emerald-900 dark:bg-emerald-950 dark:text-white">
                <p className="text-sm text-slate-600 dark:text-emerald-300">Based on your current configuration, you are operating at {efficiency}% efficiency.</p>
                <p className="mt-4 text-2xl font-semibold">You reach break-even on the {breakEvenDays}th day of each month.</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-white p-6 text-slate-950 shadow-lg dark:bg-slate-900 dark:text-white">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Min. daily rev.</p>
                  <p className="mt-3 text-xl font-semibold">{formatCurrency(monthlyRevenue / 26)}</p>
                </div>
                <div className="rounded-[1.75rem] bg-white p-6 text-slate-950 shadow-lg dark:bg-slate-900 dark:text-white">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Risk score</p>
                  <p className="mt-3 text-xl font-semibold">{Math.max(0, 100 - Number(efficiency))}%</p>
                </div>
              </div>

              <button
                type="button"
                className="mt-10 w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-2xl shadow-primary/30 transition hover:opacity-95"
              >
                Export Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculators;
