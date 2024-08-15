export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`relative flex flex-col h-auto justify-center`}>
      <main className="mx-auto max-w-7xl px-6 flex-grow py-16">{children}</main>
    </div>
  );
}
