import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Calculator, TrendingUp, Info, RefreshCw, Download, Shield } from "lucide-react";

/**
 * NightShield ROI – Minimal, elegant, responsive UI
 * Black/red theme • glass cards • soft glow • smooth micro‑interactions
 */

const formatGBP = (n: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
const fmtInt = (n: number) => new Intl.NumberFormat("en-GB").format(Math.round(n));

export default function NightShieldROI() {
  // Scenario (applies multiplier to unit-cost assumptions)
  const [scenario, setScenario] = useState<"Starter" | "Professional" | "Enterprise">("Professional");
  const mult = scenario === "Starter" ? 0.5 : scenario === "Enterprise" ? 1.25 : 1;

  // Unit costs (inflation‑adjusted conservative baselines)
  const [C_vio_inj, setCVI] = useState(18000);
  const [C_vio_no, setCVN] = useState(7500);
  const [C_fall, setCF] = useState(1900);

  // Counts (this month)
  const [F_inj, setFI] = useState(1);
  const [F_no, setFN] = useState(1);
  const [N_falls, setNF] = useState(1);

  // Ops + fee
  const [guardRate, setGuardRate] = useState(13.45);
  const [hoursSaved, setHoursSaved] = useState(80);
  const [insDelta, setInsDelta] = useState(1200); // annual
  const [uptimeHours, setUptimeHours] = useState(0);
  const [revPerHour, setRevPerHour] = useState(1500);
  const [fee, setFee] = useState(1499);

  const benefits = useMemo(() => {
    const violence = (C_vio_inj * mult) * F_inj + (C_vio_no * mult) * F_no;
    const falls = (C_fall * mult) * N_falls;
    const labour = guardRate * hoursSaved;
    const insurance = insDelta / 12;
    const uptime = uptimeHours * revPerHour;
    return { violence, falls, labour, insurance, uptime };
  }, [C_vio_inj, C_vio_no, C_fall, F_inj, F_no, N_falls, guardRate, hoursSaved, insDelta, uptimeHours, revPerHour, mult]);

  const totals = useMemo(() => {
    const totalBenefit = benefits.violence + benefits.falls + benefits.labour + benefits.insurance + benefits.uptime;
    const net = totalBenefit - fee;
    const roiPct = fee > 0 ? (net / fee) * 100 : 0;
    return { totalBenefit, net, roiPct };
  }, [benefits, fee]);

  const reset = () => {
    setCVI(18000); setCVN(7500); setCF(1900);
    setFI(1); setFN(1); setNF(1);
    setGuardRate(13.45); setHoursSaved(80); setInsDelta(1200);
    setUptimeHours(0); setRevPerHour(1500); setFee(1499);
    setScenario("Professional");
  };

  return (
    <div className="relative bg-black text-zinc-200">
      {/* ambient red glows */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(239,68,68,0.16),transparent_40%),radial-gradient(600px_300px_at_90%_-10%,rgba(239,68,68,0.1),transparent_45%)]" />

      {/* Header */}
      <header className="relative z-10 mx-auto max-w-6xl px-4 pt-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-red-700/40 bg-red-500/10 grid place-items-center">
            <Shield className="h-4 w-4 text-red-500"/>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-red-500">NightShield</div>
            <h1 className="text-2xl md:text-3xl font-semibold text-zinc-100">ROI Calculator</h1>
          </div>
          <div className="ml-auto w-full md:w-auto md:ml-auto flex items-center gap-2 overflow-x-auto md:overflow-visible whitespace-nowrap py-2 -mx-1 md:mx-0">
            {(["Starter","Professional","Enterprise"] as const).map(s => (
              <button key={s}
                onClick={()=>setScenario(s)}
                className={`mx-1 px-4 py-2 md:px-3 md:py-1 rounded-full border text-sm md:text-xs transition-all ${scenario===s ? 'bg-gradient-to-b from-red-600 to-red-700 text-white border-red-600 shadow-[0_0_24px_rgba(239,68,68,0.45)]' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-red-600/60 hover:bg-zinc-900/80'}`}
              >{s}</button>
            ))}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-40 md:pb-28">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs card */}
          <GlassCard className="lg:col-span-7" title="Inputs" icon={<Calculator className="h-4 w-4 text-red-500"/>}>
            {/* Unit costs */}
            <SectionLabel>Unit Costs (per incident)</SectionLabel>
            <div className="grid md:grid-cols-3 gap-4">
              <NumberField label="Violence (injury) £" value={C_vio_inj} step={100} onChange={setCVI} />
              <NumberField label="Violence (no injury) £" value={C_vio_no} step={100} onChange={setCVN} />
              <NumberField label="Fall / medical £" value={C_fall} step={50} onChange={setCF} />
            </div>
            <Hint>Scenario multiplier: <span className="text-zinc-300 font-medium">{mult}x</span></Hint>

            <Divider />

            {/* Counts sliders */}
            <SectionLabel>Counts This Month</SectionLabel>
            <div className="grid md:grid-cols-3 gap-4">
              <SliderField label="Fights (injury)" min={0} max={10} value={F_inj} onChange={setFI} />
              <SliderField label="Fights (no injury)" min={0} max={12} value={F_no} onChange={setFN} />
              <SliderField label="Falls" min={0} max={12} value={N_falls} onChange={setNF} />
            </div>

            <Divider />

            {/* Ops + fee */}
            <SectionLabel>Operational & Fee</SectionLabel>
            <div className="grid md:grid-cols-3 gap-4">
              <NumberField label="Guard wage £/hr" value={guardRate} step={0.25} onChange={setGuardRate} />
              <SliderField label="Hours saved / mo" min={0} max={160} value={hoursSaved} onChange={setHoursSaved} />
              <NumberField label="Insurance Δ (annual £)" value={insDelta} step={50} onChange={setInsDelta} />
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <SliderField label="Closure hours avoided" min={0} max={40} value={uptimeHours} onChange={setUptimeHours} />
              <NumberField label="Revenue £/hour" value={revPerHour} step={50} onChange={setRevPerHour} />
              <NumberField label="NightShield fee £/mo" value={fee} step={25} onChange={setFee} />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <GhostButton icon={<RefreshCw className="h-4 w-4"/>} onClick={reset}>Reset</GhostButton>
             
            </div>
          </GlassCard>

          {/* Results */}
          <GlassCard className="lg:col-span-5" title="Results" icon={<TrendingUp className="h-4 w-4 text-red-500"/>}>
            <div className="grid grid-cols-2 gap-3">
              <Stat label="Violence benefit" value={benefits.violence} />
              <Stat label="Falls benefit" value={benefits.falls} />
              <Stat label="Labour repurposed" value={benefits.labour} />
              <Stat label="Insurance effect" value={benefits.insurance} />
              <Stat label="Uptime revenue" value={benefits.uptime} />
              <Stat label="Subscription fee" value={-fee} negative />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              <SummaryTile label="Total Monthly Benefit" value={totals.totalBenefit} kind="accent" />
              <SummaryTile label="Net Impact (Benefit − Fee)" value={totals.net} />
              <SummaryTile label="ROI % (Net / Fee)" value={totals.roiPct} isPercent />
            </div>

            <div className="mt-6 text-xs text-zinc-500 flex items-center gap-2">
              <Info className="h-4 w-4"/>
              Replace defaults with venue logs & broker letter; scenario adjusts unit-cost assumptions.
            </div>
          </GlassCard>
        </div>
      </main>

      {/* Mobile summary bar */}
      <MobileSummaryBar total={totals.totalBenefit} roiPct={totals.roiPct} />

            
    </div>
  );
}

/* ————————————
   Reusable UI Bits (Aceternity‑style minimal glass components)
———————————— */

function GlassCard({ children, className = "", title, icon }: { children: React.ReactNode; className?: string; title?: string; icon?: React.ReactNode }) {
  return (
    <div className={`relative rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-950/80 to-zinc-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl ${className}`}>
      {(title || icon) && (
        <div className="flex items-center gap-2 px-4 pt-3 pb-2 text-zinc-200">
          {icon}
          <h3 className="font-semibold tracking-tight">{title}</h3>
        </div>
      )}
      <div className="p-4 md:p-6">{children}</div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_80px_rgba(239,68,68,0.08)]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-xs uppercase tracking-wider text-red-400 mb-2">{children}</div>;
}

function Hint({ children }: { children: React.ReactNode }) {
  return <div className="mt-1 text-xs text-zinc-500">{children}</div>;
}

function Divider() {
  return <div className="h-px w-full my-5 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"/>;
}

function NumberField({ label, value, onChange, step = 1 }: { label: string; value: number; onChange: (v: number) => void; step?: number }) {
  return (
    <label className="block">
      <div className="text-base md:text-sm text-zinc-300 mb-1">{label}</div>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e)=>onChange(parseFloat(e.target.value || "0"))}
        className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 px-3 py-3 md:py-2 text-zinc-100 text-base md:text-sm outline-none focus:ring-2 focus:ring-red-500/60 transition"
      />
    </label>
  );
}

function SliderField({ label, min=0, max=10, value, onChange }: { label: string; min?: number; max?: number; value: number; onChange: (v: number)=>void }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <div className="text-base md:text-sm text-zinc-300">{label}</div>
        <div className="text-sm md:text-xs text-zinc-500">{value}</div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e)=>onChange(parseInt(e.target.value))}
        className="w-full accent-red-600 cursor-pointer h-2"
      />
    </label>
  );
}

function Stat({ label, value, negative=false }: { label: string; value: number; negative?: boolean }) {
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className={`mt-1 text-xl font-semibold ${negative ? 'text-red-300' : 'text-zinc-100'}`}>{negative ? `- ${formatGBP(Math.abs(value))}` : formatGBP(value)}</div>
    </motion.div>
  );
}

function SummaryTile({ label, value, kind, isPercent=false }: { label: string; value: number; kind?: 'accent'; isPercent?: boolean }) {
  const display = isPercent ? `${fmtInt(value)}%` : formatGBP(value);
  const cls = kind === 'accent'
    ? 'border-red-900/40 bg-red-950/20 text-red-400'
    : 'border-zinc-800 bg-zinc-950/70 text-zinc-100';
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className={`rounded-xl p-4 border ${cls}`}>
      <div className={kind==='accent' ? 'text-xs text-red-300' : 'text-xs text-zinc-400'}>{label}</div>
      <div className={`mt-1 text-2xl font-semibold ${kind==='accent' ? 'text-red-400' : ''} break-words overflow-hidden`}>{display}</div>
    </motion.div>
  );
}

function GhostButton({ children, icon, onClick }: { children: React.ReactNode; icon?: React.ReactNode; onClick?: ()=>void }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-zinc-200 hover:border-red-600/60 hover:text-white transition">
      {icon}{children}
    </button>
  );
}

function MobileSummaryBar({ total, roiPct }: { total: number; roiPct: number }) {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-20 border-t border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl px-4 py-3">
      <div className="mx-auto max-w-6xl grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-red-900/40 bg-red-950/20 px-3 py-2">
          <div className="text-[10px] uppercase tracking-wide text-red-300">Total Benefit</div>
          <div className="text-lg font-semibold text-red-400 break-words overflow-hidden">{formatGBP(total)}</div>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2">
          <div className="text-[10px] uppercase tracking-wide text-zinc-400">ROI %</div>
          <div className="text-lg font-semibold text-zinc-100">{fmtInt(roiPct)}%</div>
        </div>
      </div>
    </div>
  );
}
