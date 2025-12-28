export function TimeBox({ label, value }: { label: string; value: number | string }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-xl border border-picton-blue/30 bg-jelly-bean/20 px-3 py-2 font-semibold text-portica ">
        {padded}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-dark-navy/70 font-medium">
        {label}
      </div>
    </div>
  );
}
