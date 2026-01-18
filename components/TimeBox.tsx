export function TimeBox({ label, value }: { label: string; value: number | string }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center min-w-[60px] sm:min-w-[120px] lg:min-w-[160px]">
      <div className="w-full rounded-lg sm:rounded-2xl border-2 border-picton-blue/30 bg-jelly-bean/20 px-2 py-3 sm:px-6 sm:py-6 lg:px-8 lg:py-8 font-black text-portica text-2xl sm:text-5xl lg:text-7xl text-center shadow-[inset_0_0_20px_rgba(61,178,225,0.15)] backdrop-blur-md">
        {padded}
      </div>
      <div className="mt-2 sm:mt-4 text-[9px] sm:text-xs lg:text-sm uppercase tracking-[0.2em] text-dark-navy font-black opacity-90">
        {label}
      </div>
    </div>
  );
}
