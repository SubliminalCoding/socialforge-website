export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-950/40 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px]" />
    </div>
  );
}
